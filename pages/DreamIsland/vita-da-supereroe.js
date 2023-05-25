import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Paragraph from "components/Paragraph.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="Vita da supereroe"
        description="Una SUPER esperienza"
        imageUrl="https://mail.google.com/mail/u/0?ui=2&ik=9d088931ea&attid=0.2&permmsgid=msg-f:1766761794540798504&th=1884cc7dce560228&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8eHLPN5ht4VKF1FW7gJqSnB9N94XnGGCwXTivNqNpsVQgM0znAI8hMG-pmKD4iptILKTOtsr21e843nrEUhgTQCm89qkMZiR0UBQ4Vx0xCGJoQmhrRKM3aZ7A&disp=emb&realattid=ii_li1exynv1"
        opacity={0.6}
        buttonText="Ordina il tuo sogno ora"
        buttonUrl="https://....."
        height="103"
      />

<Paragraph
  title="Una vita da supereroe"
  subtitle="Un'avventura da non perdere"
  topImageUrl=""
  avatarImageUrl=""
  leftImageUrl=""
  rightImageUrl="https://mail.google.com/mail/u/0?ui=2&ik=9d088931ea&attid=0.1&permmsgid=msg-f:1766761404293339834&th=1884cc22f1c65aba&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-NheeoKE8yPMd9j8zo7vhgkkcQZTYHqi5B3kBC4jAQCRTKm9C-I1otOJLGxjLpWNXm-lYLt2U5yL9ie2knCFJveU6q59lXg8bPuvByjzqqlErf3O3QkNkrICI&disp=emb&realattid=ii_li1euzqu0"
  backgroundImageUrl=""
  backgroundColor="#E03C31"
  opacity={0.8}
  blur="0.2rem"
  color="white"
  columnCount={3}
  maxWidth="lg"

>
C'era una volta un uomo di nome Alex, che viveva una vita ordinaria e priva di avventure. Era stanco della monotonia quotidiana e desiderava qualcosa di più, qualcosa di straordinario. Un giorno, mentre sfogliava un giornale, gli occhi di Alex caddero su un annuncio che catturò la sua attenzione: "Dream Island - L'agenzia che realizza i tuoi sogni più audaci!"      
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