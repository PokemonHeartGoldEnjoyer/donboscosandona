import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Paragraph from "components/Paragraph.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="Incontro con creature mitiche"
        description="Un'esperienza da brivido..."
        imageUrl="https://w0.peakpx.com/wallpaper/749/24/HD-wallpaper-strange-encounter-art-aliens-artwork-strange-encounters.jpg"
        opacity={0.6}
        buttonText="Ordina il tuo sogno ora"
        buttonUrl="https://....."
        height="103"
      />

<Paragraph
  title="Incontro con creature mitiche"
  subtitle="Un'avventura che ti farà brillare gli occhi"
  topImageUrl=""
  avatarImageUrl=""
  leftImageUrl=""
  rightImageUrl="/img/creatura"
  backgroundImageUrl=""
  backgroundColor="#274A5A"
  opacity={0.8}
  blur="0.2rem"
  color="white"
  columnCount={3}
  maxWidth="lg"

>
L'incontro con creature mitiche può esser un tranquillizzante per la mente. Certe creature abbassano lo stress se accarezzate e solo la loro presenza porta beneffitti alla salute. Immergiti in quest' esperienza con curiosità e ricordati di divertirti!! 
Ricordiamo che dare più di 20kg di cibo a una creatura è estremamente vietato.
 
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
      "",
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