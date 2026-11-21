import superiorpoultrychinatown from "../assets/superiorpoultrychinatown.jpg";
import pekingpoultry from "../assets/pekingpoultry.jpg";
import sanfranciscopoultry from "../assets/sanfranciscopoultry.jpg";
import superiorpoultryela from "../assets/superiorpoultryela.webp";
import waikikiepollos from "../assets/waikikiepollos.jpg";
import majesticpoultryalhambra from "../assets/majesticpoultryalhambra.webp";
import wingonmontereypark from "../assets/wingonmontereypark.webp";
import wingonsangabriel from "../assets/wingonsangabriel.webp";
import wingonalhambra from "../assets/wingonalhambra.webp";
import wingon1619 from "../assets/wingonsangabriel.png";

import { useState } from "react";

const stores = [
  {
    id: "superiorpoultrychinatown",
    name: "Superior Poultry",
    address: "750 N Broadway, Los Angeles, CA 90012",
    description: [
    "Operational since at least 1943, Superior Poultry has been a landmark to the Chinese and Latino diaspora in California. Owned by the Wong family across multiple generations starting with Gloria and her husband David, it is dedicated to selling live free-range chickens even after live poultry markets were on the decline, even after World War II. Today, their son, Willard, continues to keep the business going, passing this across multiple generations. Superior Poultry, alternatively named as Wing On Poultry as transliterated by their Chinese name 永安雞鴨欄, became so successful that the Wongs decided to expand the network, which would later be known as Wing On Poultry (永安), across multiple locations in California, including another Chinatown store just a few blocks away.",
    "Superior Poultry sells a large variety of selections ranging from chickens to ducks to rabbit to even game bird selections like quail. The birds are sold live, then slaughtered and processed while you wait, preserving freshness with a warm bird bagged to you. Alternatively, unlike most live markets where you are not allowed to take the bird home unless it has been processed/slaughtered, this shop allows you to take the bird home live, allowing you to slaughter the bird yourself, whether its due to religion or out of curiosity, or continue raising them for longer if you want to start a new poultry farm and get eggs from them. However, this is not recommended, as any live poultry that has left the store lies responsibility in the customer rather than the shop.",
    "This store also wholesales freshly slaughtered poultry to the other stores of the Wing On network. To maintain and keep up supply of their inventory, some of the chickens shipped from Chinatown to these stores, rather than slaughtered in Chinatown, are externally processed from various poultry processing facilities and shipped to the Chinatown shop."
    ],
    image: superiorpoultrychinatown,
    alt: "Front entrance of Superior Poultry"
  },
  {
    id: "pekingpoultry",
    name: "Peking Poultry",
    address: "717 N Broadway, Los Angeles, CA 90012",
    description: [
    "Another live poultry market of the Wing On (永安) network, while Peking Poultry usually transliterates as 北京雞鴨欄, on banners it shows as 北京永安雞鴨欄, showing it is a part of the Wing On Poultry network. Not only that, but the store even frequently advertises Wing On Poultry as shown in its advertisement on walls, as well as its products, unlike Superior who only advertises it is a part of the Wing On network through its Chinese name 永安.",
    "Like Superior Poultry, the birds are sold live rather than from exterior distributors, and it too sells a large variety of birds like its main shop. This store, in addition to poultry, has a selection of live fish and fresh pork, as well as multiple sections for groceries, making it more of a grocery store specialized in various forms of meat than a mere poultry shop unlike Superior Poultry which exclusively sells poultry."
    ],
    image: pekingpoultry,
    alt: "Front entrance of Peking Poultry"
  },
  {
    id: "sanfranciscopoultry",
    name: "San Francisco Poultry",
    address: "1114 Grant Ave, San Francisco, CA 94133",
    description: [
    "Located on 1118 Grant Avenue, it is also known as Wing On Poultry, showcasing how Wing On Poultry has expanded out of Southern California to Northern California. It sells various selections of live birds which are slaughtered and processed on the spot while you wait."
    ],
    image: sanfranciscopoultry,
    alt: "Front entrance of San Francisco Poultry"
  },
  {
    id: "superiorpoultryela",
    name: "Superior Poultry",
    address: "450 N Ford Blvd, Los Angeles, CA 90022",
    description: [
    "Formerly known as Majestic Poultry, the shop was renamed Superior Poultry in 2018. For decades, the shop slaughtered and butchered live birds on the spot. It is speculated they do not sell live birds on site anymore ever since the rebrand and that the birds come in pre-slaughtered and pre-dead from the main shop in Chinatown.",
    "Still, regardless of where the birds came from, they are much fresher than supermarket chicken. It has a large variety of poultry products. It even has a mini market for groceries, such as lettuce and rice."
    ],
    image: superiorpoultryela,
    alt: "Front entrance of Superior Poultry"
  },
  {
    id: "waikikiepollos",
    name: "Waikikie Pollos",
    address: "10116 Garvey Ave, El Monte, CA 91733",
    description: [
    "Also known as Wing On Market, this store sells fresh poultry which is sourced from the main shop in Chinatown daily. It also sells deli meats, groceries, and other products."
    ],
    image: waikikiepollos,
    alt: "Front entrance of Waikikie Pollos"
  },
  {
    id: "majesticpoultryalhambra",
    name: "Majestic Poultry & Market",
    address: "408 E Valley Blvd, Alhambra, CA 91801",
    description: [
    "The second store of the former Majestic Poultry location, this store branches as a part of the Majestic branch). This store sells fresh poultry which is freshly slaughtered at the live poultry shops owned by the Wing On Poultry network. It also sells pork, seafood, various groceries, and is known for its wontons and lottery tickets."
    ],
    image: majesticpoultryalhambra,
    alt: "Front entrance of Majestic Poultry & Market"
  },
  {
    id: "wingonmontereypark",
    name: "Wing On Market",
    address: "726 E Garvey Ave, Monterey Park, CA 91755",
    description: [
    "This is the first expansion of Wing On Poultry from Superior Poultry, Peking Poultry, Majestic Poultry, and San Francisco Poultry to various smaller stores in the San Gabriel Valley. These stores sell various selections of poultry sourced fresh daily from the main Chinatown facility, alongside fish, pork, and various groceries."
    ],
    image: wingonmontereypark,
    alt: "Front entrance of Wing On Market"
  },
  {
    id: "wingonsanggabriel",
    name: "Wing On Market",
    address: "705 E Las Tunas Dr, San Gabriel, CA 91776",
    description: [
    "Wing On Market's second location which sells various selections of poultry sourced fresh daily from the main Chinatown facility, alongside various groceries."
    ],
    image: wingonsangabriel,
    alt: "Front entrance of Wing On Market"
  },
  {
    id: "wingonalhambra",
    name: "Wing On Market",
    address: "2107 W Commonwealth Ave, Ste 448, Alhambra, CA 91803",
    description: [
    "Wing On Market's location in Alhambra, near Costco, which sells various selections of poultry sourced fresh daily from the main Chinatown facility, alongside various groceries."
    ],
    image: wingonalhambra,
    alt: "Front entrance of Wing On Market"
  },
  {
    id: "wingon1619",
    name: "Wing On Market",
    address: "1619 S Del Mar Ave, San Gabriel, CA 91776",
    description: [
    "Wing On Market's location in San Gabriel near Sheraton and Hilton Los Angeles/San Gabriel, which sells various selections of poultry sourced fresh daily from the main Chinatown facility, alongside various groceries."
    ],
    image: wingon1619,
    alt: "Front entrance of Wing On Market"
  },
];

export default function WingOn() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Wing On Farms</h1>

      <label htmlFor="store">Choose an address: </label>

      <select
        id="store"
        value={selectedId}
        onChange={(event) => setSelectedId(event.target.value)}
        >
        <option value="">(Select)</option>

        {stores.map((store) => (
            <option key={store.id} value={store.id}>
            {store.address}
            </option>
        ))}
        </select>

      {selectedStore && (
        <section>
            <h2>{selectedStore.name}</h2>
            <p>{selectedStore.address}</p>

            <img
            src={selectedStore.image}
            alt={selectedStore.alt}
            style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />

            {selectedStore.description.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: "16px" }}>
                {paragraph}
            </p>
            ))}
        </section>
        )}
    </main>
  );
}