interface ProjectLink {
  url: string
  type: 'demo' | 'github'
  name: Record<string, string>
}

interface ProjectTechnologies {
  frontend?: string[]
  backend?: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  image: string
  tags: string[]
  content?: string
  technologies?: ProjectTechnologies
  url?: ProjectLink[]
}

export type Projects = Project[]
