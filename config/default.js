import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "I SOGNI PAZZI"
export const siteTitle = "La Sueños Locos S.A. - I tuoi sogni diventano realtà"
export const siteDescription = "L'isola di Ons in Spagna, la tua isola dei sogni"

export const menu = [
    { title: 'Home', url: '/DreamIsland' },
    { title: 'Sogni più richiesti', url: '#piu_richiesti'},
    { title: 'Sogni avverati', url: '#diventati_realta'},
    { title: 'Chi Siamo', url: '#footer'},
    { title: 'Vieni a torvarci', url: 'https://goo.gl/maps/TJ9jwMVXopYsqkcm6'}
]

export const header = ''

const menuFooter = menu

const socials = [
    { title: 'Facebook', imageUrl: 'https://archive.donboscosandona.it/img/ck/1cffc9d197e15de1f72a89477cc75e56073980b0.png', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https:///archive.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://archive.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://archive.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
]

export const footer = <Footer
    color="#94928d"
    opacitycolor="1"
    opacity={1}
    title1="Chi siamo"
    description1="Endri Simakou,Luca Schiavon&Mattia Rosettin"
    title2="Social Feed"
    socials={socials}
    title3="I Settori"
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>