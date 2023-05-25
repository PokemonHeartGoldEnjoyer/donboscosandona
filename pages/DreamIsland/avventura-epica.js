import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Paragraph from "components/Paragraph.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="Avventura epica"
        description="Affronta un'avventura epica da mozzafiato"
        imageUrl= "https://cdn.wallpapersafari.com/95/1/9HlrxU.jpg"
        opacity={0.6}
        buttonText="Ordina il tuo sogno ora"
        buttonUrl="https://....."
        height="103"
      />

<Paragraph
  title="Avventura epica"
  subtitle="Un'avventura mozzafiato"
  topImageUrl=""
  avatarImageUrl=""
  leftImageUrl=""
  rightImageUrl=""
  backgroundImageUrl=""
  backgroundColor="#DB5A2B"
  opacity={0.8}
  blur="0.2rem"
  color="white"
  columnCount={3}
  maxWidth="lg"

>
Un'avventura epica basata sullo sconfiggere un terribile drago sputa fuoco e mangiatore di uomini, l'unico ad essere in grado di sconfiggere il drago sei tu, tuffati all'avventura.
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