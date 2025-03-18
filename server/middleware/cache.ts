export default defineEventHandler((event) => {
  appendHeader(event, 'Cache-Control', 'public, max-age=31536000')
  appendHeader(event, 'X-Frame-Options', 'DENY')
})
