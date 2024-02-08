'use server'
//@ts-ignore
import axios from 'axios'
import {ProjectType} from '@/env/types'

const baseURL: string = 'http://localhost:4000/api'

axios.defaults.baseURL = baseURL

export const getAllProjects = async (start: number = 0, end: number = 30) => {
    let {data} = await axios.get<ProjectType[]>('/projects')

    return {
        projects: data.slice(start, end),
        length: data.length
    }
}

export const getProject = async (id = '') => {
    let params: any = {id}
    let {data} = await axios.post<ProjectType>('/project', params) 

    return data
}