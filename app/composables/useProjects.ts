import projectsData from '../assets/data/projects.json'

export type ProjectTranslation = {
  name: string
  description: string
  content: string
}

export type ProjectUrl = {
  type: string
  url: string
}

export type Project = {
  id: string
  image: string
  url: ProjectUrl[]
  tags: string[]
  homepage: boolean
  translations: {
    [key: string]: ProjectTranslation
  }
}

export const useProjects = () => {
  const { locale } = useI18n()

  const sortByIdDesc = (a: Project, b: Project) => b.id.localeCompare(a.id)

  const localizeProject = (project: Project) => {
    const translation = project.translations[locale.value] || project.translations['en'] || { name: '', description: '', content: '' }
    return {
      ...project,
      name: translation.name,
      description: translation.description,
      content: translation.content,
      image: `/images/${project.image}`,
    }
  }

  const getFeaturedProjects = (): Project[] => {
    return (projectsData as Project[])
      .filter(project => project.homepage)
      .sort(sortByIdDesc)
      .map(localizeProject)
  }

  const getAllProjects = (): Project[] => {
    return (projectsData as Project[])
      .sort(sortByIdDesc)
      .map(localizeProject)
  }

  const getProject = (id: string): Project | undefined => {
    const project = (projectsData as Project[]).find(p => p.id === id)
    return project ? localizeProject(project) : undefined
  }

  return {
    getFeaturedProjects,
    getAllProjects,
    getProject,
  }
}
