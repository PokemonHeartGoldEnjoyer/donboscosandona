import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Paragraph from "components/Paragraph.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="VIAGGIO INTERSPAZIALE"
        description="un'esperienza fuori da questo mondo!"
        imageUrl="https://cdn.mos.cms.futurecdn.net/Zu8AKR4sXV5VHNRVKZhAe.jpg"
        opacity={0.3}
        buttonText="Ordina il tuo sogno ora"
        buttonUrl="https://....."
        height="103"
      />

<Paragraph
  title="Viaggio interspaziale"
  subtitle="Un'avventura da non perdere"
  topImageUrl="https://upload.wikimedia.org/wikipedia/commons/3/3f/Pink-battle-worn-outside_mango_concept-art_04.png"
  avatarImageUrl=""
  leftImageUrl=""
  rightImageUrl=""
  backgroundImageUrl=""
  backgroundColor="#C0C0C0"
  opacity={0.3}
  blur="0.2rem"
  color="white"
  columnCount={3}
  maxWidth="lg"

>
Esplora le profondità insondabili dell'universo con il nostro straordinario viaggio spaziale. Preparati a intraprendere un'avventura epica oltre i confini della Terra, dove il silenzio cosmico e la vastità dello spazio siderale si fondono in un'esperienza senza precedenti.

Il tuo viaggio inizia con l'addestramento di un equipaggio esperto che ti guiderà attraverso le complesse operazioni di volo spaziale. Ti immergerai nella tecnologia all'avanguardia e nell'equipaggiamento di ultima generazione, permettendoti di vivere la vita di un vero astronauta.
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