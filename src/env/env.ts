import {RouteType, ContactIconType, EducationCardType, EmploymentCardType, SkillType} from './types'

export const routes: RouteType[] = [
    {
        title: 'Главная',
        url: '/'
    },
    {
        title: 'Проекты',
        url: '/projects'
    },
    {
        title: 'Curriculum vitae',
        url: '/cv'
    }
]

export const labels: string[] = [
    'Вячеслав Куприянов, 19 лет',
    'Frontend/Fullstack разработчик',
    'Новосибирск, Россия',
    'Высшее неоконченное (НГТУ)',
    '8-(913)-457-93-50',
    '@slavus54'
]

export const contacts: ContactIconType[] = [
    {
        title: 'VK',
        icon: 'https://img.icons8.com/color/48/vk-com.png',
        url: 'https://vk.com/slavus54'
    },
    {
        title: 'Github',
        icon: 'https://img.icons8.com/ios-filled/50/github.png',
        url: 'https://github.com/Slavus54'
    },
    {
        title: 'npmjs',
        icon: 'https://img.icons8.com/color/48/npm.png',
        url: 'https://www.npmjs.com/~slavus54'
    },
    {
        title: 'Telegram',
        icon: 'https://img.icons8.com/color/48/telegram-app--v1.png',
        url: 'https://web.telegram.org/k/#@slavus54'
    },
    {
        title: 'CodeWars',
        icon: 'https://img.icons8.com/color/48/codewars.png',
        url: 'https://www.codewars.com/users/Slavus54'
    }
]

export const edu_cards: EducationCardType[] = [
    {
        title: 'МБОУ Колыванская СОШ #3 Технологический профиль',
        category: 'Среднее',
        link: '/edu/attestat.jpg',
        time: '11 классов'
    },
    {
        title: 'НГТУ РЭФ 11.03.02',
        category: 'Высшее',
        link: '/edu/student_card.jpg',
        time: '3 семестра'
    }
]

export const employment_cards: EmploymentCardType[] = [
    {
        title: 'Клиника АРС Медика',
        position: 'Fullstack Developer',
        category: 'ООО «Арс Медика»',
        technologies: ['React', 'Redux', 'Typescript', 'Node', 'ExpressJS', 'MongoDB', 'Git'],
        text: 'Обновил дизайн, сделал адаптивную верстку, PWA и разработал функционал для личного кабинета клиентов; реализовал запись на приём, мониторинг болезней и поиск лекарств.',
        url: '',
        start: '08.2023',
        end: '01.2024'
    }
]

export const skills: SkillType[] = [
    {
        title: 'Английский язык',
        category: 'Язык',
        level: 'B1'
    },
    {
        title: 'Пунктуальность',
        category: 'Soft',
        level: 'Высокий'
    },
    {
        title: 'Chat GPT 3.5',
        category: 'AI',
        level: 'Средний'
    },
    {
        title: 'Неконфликтность',
        category: 'Soft',
        level: 'Высокий'
    }
]