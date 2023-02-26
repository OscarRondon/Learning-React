import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: '¡Hola! Me llamo Oscar Rondon y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'Hi! My name is Oscar Rondon and I am creating a clone of React Router.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/63406119?s=400&u=98b7d8ab09f295bd97fc512c1ddda80999a5bf57&v=4' alt='Oscar Rondon' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
