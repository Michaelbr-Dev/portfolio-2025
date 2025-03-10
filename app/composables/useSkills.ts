import skillsData from '@/assets/data/skills.json'

export type Skill = {
  name: string
  icon: string
  link: string
  featured: string
}

export const useSkills = () => {
  const getFeaturedSkills = (): Skill[] => {
    const allFeaturedSkills: Skill[] = []

    Object.values(skillsData).forEach((categorySkills) => {
      const featured = categorySkills
        .filter((skill: Skill) => {
          return skill.featured === 'true' && skill.name && skill.icon
        })
      allFeaturedSkills.push(...featured)
    })

    return allFeaturedSkills
  }

  return {
    getFeaturedSkills,
    getAllSkillsByCategory: () => skillsData,
  }
}
