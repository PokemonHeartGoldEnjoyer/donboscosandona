import Layout from 'components/Layout'
import Footer from '/dev/albaniandevils/Footer'



let socials = [
    { title: 'Facebook', icon: '<SocialIcon network="pinterest" style={{ height: 50, width: 50 }} />', url: 'https://www.facebook.com/donboscosandona/?fref=ts' },
    { title: 'Instagram', imageUrl: 'https://www.donboscosandona.it/img/ck/5c1c2a74750c62b3349df0d555ea9a26d1c6e8af.png', url: 'https://www.instagram.com/donboscosandona/' },
    { title: 'Youtube', imageUrl: 'https://www.donboscosandona.it/img/ck/36189d32ee9d4be0a612c292a430106948c85bfc.png', url: 'https://www.youtube.com/channel/UCZ2sxe9w7Yf9lP4nl65oAvg' },
    { title: 'Linkedin', imageUrl: 'https://www.donboscosandona.it/img/ck/55ed185e94be2aa2a1d854487273a4d139e5475f.png', url: 'https://www.linkedin.com/company/c-f-p-don-bosco/' },
]

let images = [
    { title: 'Oratorio', imageUrl: 'http://www.sigecweb.beniculturali.it/images/fullsize/ICCD1027783/ICCD11794690_00365323_3.JPG', },
]


export default function Page() {
    return (
        <Footer
            imageUrl="https://donboscoitalia.it/wp-content/uploads/2019/07/Copia-di-donboscoitalia-foto-11.jpg"
            color="#3B654C"
            opacity={1}
            title1="Chi Siamo"
            description1="Salam alekum alekum selaamm"
            title2="Social Media"
            socials={socials}
            title3="Il nostro Oratorio"
            images={images}
            //menu={sezioni}
            copyright="Copyright (C) 2023 9dreams Agency."
        />
    )
}