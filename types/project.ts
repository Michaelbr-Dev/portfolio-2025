export interface Project {
  id: string
  name: string
  description: string
  image: string
  date: string
  tags: string[]
  content: string
  technologies?: {
    frontend?: string[]
    backend?: string[]
  }
  url: {
    type: 'demo' | 'code'
    name: Record<string, string>
    url: string
  }[]
}
