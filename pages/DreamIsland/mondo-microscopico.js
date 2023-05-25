import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Paragraph from "components/Paragraph.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="Esplorazione del mondo microscopico"
        description="Affronta un viaggio fantastico di graandezza microscopica"
        imageUrl= "https://mail.google.com/mail/u/0?ui=2&ik=7b961903ac&attid=0.5&permmsgid=msg-f:1766861949509187252&th=18852794f3a636b4&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ96OKvyU2XDsGdnpylzU0IGcyTjCyvkeQqFOlKQbRSWL-wYbOT0ET4qx3gNLhBCM2voQzbJV3vQVb7Tam1xYUXxkOHOGdrWYbpxhrH1mo523TjhUUOq-YxleBk&disp=emb&realattid=ii_li1gzbvg0"
        opacity={0.6}
        buttonText="Ordina il tuo sogno ora"
        buttonUrl="https://....."
        height="103"
      />

<Paragraph
  title="Esplorazione del mondo microscopico"
  subtitle="Un esperienza microscopica"
  topImageUrl=""
  avatarImageUrl=""
  leftImageUrl=""
  rightImageUrl=""
  backgroundImageUrl=""
  backgroundColor="#056614"
  opacity={0.8}
  blur="0.2rem"
  color="white"
  columnCount={3}
  maxWidth="lg"

>
Un'esperienza fantastica tra milioni di forme di vita microscopiche, il viaggio viene effettuato grazie ad una navicella costruita su misura dai nostri scienziati.
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