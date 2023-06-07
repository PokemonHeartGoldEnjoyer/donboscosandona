import Layout from "components/Layout.js";
import LandingHero from "components/LandingHero2.js";
import Products from "components/Products.js";

export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        title="Dream Island"
        //description="L'agenzia che realizza i tuoi sogni più audaci!"
        imageUrl="https://media.quincemil.com/imagenes/2022/05/09225208/Isla-de-Ons-3-1920x1080.jpg"
        opacity={0.1}
        buttonText="Ordina sogni qui"
        buttonUrl="https://....."
        height="103"
      />
      <Products
        id="piu_richiesti"
        title="Sogni più richiesti"
        products={in_evidenza}
        cardWidth={4}
        borderRadius="10px"
      />
      <Products
        id="diventati_realta"
        title="Sogni diventati realtà"
        //description="Non lasciarti scappare queste fantastiche aventure"
        products={sogni}
        cardWidth={3}
        borderRadius="10px"
      />
    </Layout>
  );
}

let in_evidenza = [
  {
    title: "Vita da supereroe",
    description: "",
    immagineUrl: "/DreamIsland/img/supereroe-1",
    url: "/DreamIsland/",
  },
  {
    title: "Esperienza di volo umano",
    description: "",
    immagineUrl:
      "https://cdn.gencraft.com/prod/user/bd108962-5607-46a3-8351-e6a6dc923656/d15e342a-1b25-46bb-835a-690df5ea382b/images/image1_1024_1024_watermark.jpg?Expires=1685003483&Signature=h7mYzbTakWARPGS7ILaa8BVuOhytvi7m4ClMxw~59j6JtCNVvgufsB-wBmyWWATV8qSEWvXf5xkZ~BAYKP9h7tuc4JIQ1KhRWkcJKgTs0~QpXW3un1krWQQ1Fv5wqJRFXU~nzdna7VKqfzarfjp4dIf7Wo7t64ULFYFTzn3QVD6F0rGpxGTnM-4Y6TinIJcG2aGFmRRDdkXoUVXDEI9wmqh3Jt6YbKayDK9FnYS0EMQkilYNDdn7cupt76DtNHUJK3fcKmS7MCZWoW~GNzRZEwA-z2vkGAPgOfADQFZjdT2OHz5vIpD7HN24lp284j0vJegQ57T7xihOgyUFyYuxNw__&Key-Pair-Id=K3RDDB1TZ8BHT8",
    url: "/DreamIsland/volo-umano",
  },
  {
    title: "Incontro con creature mitiche",
    description: "",
    immagineUrl:
      "https://cdn.gencraft.com/prod/user/bd108962-5607-46a3-8351-e6a6dc923656/554b7ee8-a64b-4f08-b0a6-d00113dbd6a3/images/image0_1024_1024_watermark.jpg?Expires=1685003546&Signature=bLVZvuC5bScHQurG40L5DND3FNokDGT0mZof6iFj79vPK7x~9P3NTHiPUhdMtmYrGn4a2vKYnm9qEofzec2x30qla5r~WSbK5C7-ucAB0GzP~V~ReFrcxaDTMfPxmEQgIVATot9seUZhAODtepLhrWOUYEGKZCb8E~6UbxDrVeX7EpfZI0QoMNYg7cq6mwYEDp3lULFAlZAYMLH6F46mGxFIdum9NBgeIYFUrMLKcrifwrZnNwhVN2vsuIET5Bq6KsRUyS7liBsarJht55aQ5jWICKbhk5CusrwT3UFE-1czVnU~R1ctGOGU0IoXYwCezx1zxqHh4F5atJLeu7NWFQ__&Key-Pair-Id=K3RDDB1TZ8BHT8",
    url: "/DreamIsland/creature-mistiche",
  },
];

let sogni = [
  {
    title: "Vita da supereroe",
    description: "",
    immagineUrl: "/img/supereroe-card.jpg",
    url: "/DreamIsland/vita-da-supereroe",
  },
  {
    title: "Viaggio interstellare",
    description: "",
    immagineUrl: "/img/",
    url: "/DreamIsland/viaggio-interstellare",
  },
  {
    title: "Paradiso tropicale",
    description: "",
    immagineUrl: "/img/",
    url: "/DreamIsland/paradiso-tropicale",
  },
  {
    title: "Esperienza di volo umano",
    description: "",
    immagineUrl: "/img/",
    url: "/DreamIsland/volo-umano",
  },
  {
    title: "Incontro con creature mitiche",
    description: "",
    immagineUrl: "/img/",
    url: "/DreamIsland/creature-mistiche",
  },
  {
    title: "Sogno di celebrità",
    description: "",
    immagineUrl: "/img/",
    url: "/DreamIsland/sogno-celebrita",
  },
  {
    title: "Esplorazione del mondo microscopico",
    description: "",
    immagineUrl: "/img/",
    url: "/DreamIsland/mondo-microscopico",
  },
  {
    title: "Avventura epica",
    description: "",
    immagineUrl: "/img/",
    url: "/DreamIsland/avventura-epica",
  },
];
