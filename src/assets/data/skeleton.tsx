import { HeaderPropsType } from '../../components/Header'
import { buttonProps } from '../../components/Button'
import { ModrenTechPropsType } from '../../components/ModrenTechSection'
import { GeneralThandsBlockPropsType } from '../../components/GeneralTrands'
import ReactGroupImage from '../images/React-group.png'


export const navBarLinks: HeaderPropsType = {
	list: [
		{ link: 'Главная', id: 'home' },
		{ link: 'Frontend-технологии', id: 'frontend' },
		{ link: 'Backend-технологии', id: 'backend' },
		{ link: 'Общие тренды', id: 'trends' }
	]
}

export const modrenTechSection: ModrenTechPropsType = {
	title: 'Современные технологии в мире разработки',
	description: 'Самые популярные и перспективные фреймворки и библиотеки в 2025 году',
	image: ReactGroupImage
}

export const detailedButton: buttonProps = {
	text: 'Подробнее'
}

export const retrospectiveButton: buttonProps = {
	text: 'Ретроспектива'
}

export const sendButton: buttonProps = {
	text: 'Отправить'
}

export const learnMoreButton: buttonProps = {
	text: 'Подробнее'
}

export const generalTrands: GeneralThandsBlockPropsType = {
	list: {
		trand_1: 'Artificial intelligence',
		trand_2: 'CDN networks',
		trand_3: 'Efficiency',
		trand_4: 'Edge features',
		trand_5: 'Automation',
		trand_6: 'Cloud Computing'
	}
}