export type RouteType = {
    title: string,
    url: string
}

export type ProjectType = {
    id: string,
    title: string,
    category: string,
    description: string,
    year: number,
    url: string,
    technologies: string[]
}

export type ProjectTypeProps = {
    data: ProjectType
}

export type ContactIconType = {
    title: string,
    icon: string,
    url: string
}

export type CollectionPropsType = {
    params: {
        id: string
    }
}

export type ProjectLoadingProps = {
    initialCounter: number
}

export type EducationCardType = {
    title: string,
    category: string
    link: string
    time: string
}

export type EmploymentCardType = {
    title: string,
    position: string
    category: string,
    technologies: string[]
    text: string
    url: string
    start: string
    end: string
}

export type SkillType = {
    title: string
    category: string
    level: string
}