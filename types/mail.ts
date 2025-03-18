import type { TransportOptions } from 'nodemailer'

export interface FormData {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface MailResponse {
  success: boolean
  message: string
  errors?: string[]
  error?: string
}

export interface RuntimeConfig {
  EMAIL_USER: string
  APP_PASSWORD: string
  EMAIL_RECIPIENT: string
}

export interface MailOptions {
  from: string
  to: string
  subject: string
  html: string
}

export interface MailTransportConfig extends TransportOptions {
  service: 'gmail'
  auth: {
    user: string
    pass: string
  }
}
