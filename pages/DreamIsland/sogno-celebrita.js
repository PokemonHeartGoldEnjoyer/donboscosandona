import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Paragraph from "components/Paragraph.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="Sogno di celebrità"
        description="Un'esperienza da vero VIP"
        imageUrl="https://images.squarespace-cdn.com/content/v1/5697d9f1df40f306cadcda48/1497888379503-D0WXB9MFO9UOB7RPMP0D/vlcsnap-2017-06-19-18h04m28s53.png?format=2500w"
        opacity={0.6}
        buttonText="Ordina il tuo sogno ora"
        buttonUrl="https://....."
        height="103"
      />

<Paragraph
  title="Marco"
  subtitle="Marco parla della sua esperienza da vero VIP"
  topImageUrl="https://www.marcomengoni.it/wp-content/uploads/2023/02/Mengoni-8-scaled-1.jpg"
  avatarImageUrl=""
  leftImageUrl=""
  rightImageUrl=""
  backgroundImageUrl=""
  backgroundColor="#0C62E8"
  opacity={0.8}
  blur="0.2rem"
  color="white"
  columnCount={3}
  maxWidth="lg"

>
Il mio sogno è sempre stato fare il cantante e grazie a questa azienda ho avuto la possibilità di vivere un'esperienza unica nel suo genere.
</Paragraph>
    </Layout>
    
  );
}

let categorie = [
  {
    title: "Alessandro nel Viaggio interspaziale 2022",
    category: "",
    description:
      "",
    immagineUrl:
      "https://esquire.com.gr/Content/ImagesDatabase/p/crop/both/13/13621a91efc64719ac047ecd354c3d2b.jpg?quality=60&404=default&v=02",
    url: "",
  }
];

let in_evidenza = [
  {
    title: "",
    category: "",
    description: "",
    immagineUrl:
      "",
    url: "",
  }
];
