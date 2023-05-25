import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Paragraph from "components/Paragraph.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="Paradiso Tropicale"
        description="Ricordati la crema solare!"
        imageUrl="https://wallpaperaccess.com/full/2810331.jpg"
        opacity={0.6}
        buttonText="Ordina il tuo sogno ora"
        buttonUrl="https://....."
        height="103"
      />

<Paragraph
  title="Il Paradiso Tropicale"
  subtitle="Un vero e proprio paradiso sulla sabbia!"
  topImageUrl=""
  avatarImageUrl=""
  leftImageUrl=""
  rightImageUrl="/img/creatura"
  backgroundImageUrl=""
  backgroundColor="#664229"
  opacity={0.8}
  blur="0.2rem"
  color="white"
  columnCount={3}
  maxWidth="lg"

>
Il "Paradiso Tropicale" è uno dei sogni più scelti dai nostri clienti. Una delle tante possibilità che puoi avare è il poter scegliere la temperatura dell' aria e dell'acqua a tua scelta. Porta un amico!   
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