import nodemailer from 'nodemailer'
import type {
  FormData,
  MailResponse,
  RuntimeConfig,
  MailOptions,
  MailTransportConfig,
} from '~/types/mail'

// Validation function
const validateData = (data: FormData): string[] => {
  const errors: string[] = []

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Phone regex (international format)
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

  if (!data.fullName?.trim()) errors.push('Full name is required')
  if (!data.email?.trim()) errors.push('Email is required')
  if (!emailRegex.test(data.email)) errors.push('Invalid email format')
  if (data.phone && !phoneRegex.test(data.phone)) errors.push('Invalid phone format')
  if (!data.subject?.trim()) errors.push('Subject is required')
  if (!data.message?.trim()) errors.push('Message is required')

  return errors
}

export default defineEventHandler(async (event): Promise<MailResponse> => {
  setHeader(event, 'Content-Type', 'application/json')
  try {
    // Get runtime config
    const config = useRuntimeConfig() as RuntimeConfig

    // Get request body
    const body = await readBody<FormData>(event)

    // Validate data
    const validationErrors = validateData(body)
    if (validationErrors.length > 0) {
      return {
        success: false,
        message: 'Validation failed',
        errors: validationErrors,
      }
    }

    // Create transporter
    const transportOptions: MailTransportConfig = {
      service: 'gmail',
      auth: {
        user: config.EMAIL_USER,
        pass: config.APP_PASSWORD,
      },
    }
    const transporter = nodemailer.createTransport(transportOptions)

    // Email content
    const mailOptions: MailOptions = {
      from: config.EMAIL_USER,
      to: config.EMAIL_RECIPIENT,
      subject: `Portfolio Contact: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <h3>Message:</h3>
        <p>${body.message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Email sent successfully',
    }
  }
  catch (error) {
    console.error('Mail send error:', error)
    return {
      success: false,
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
})
