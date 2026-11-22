import superiorpoultrychinatown from "../assets/superiorpoultrychinatown.jpg";
import marketlasuperior from "../assets/marketlasuperior.png";
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
    phone: "(213) 628-7645",
    description: [
    "Operational since at least 1943, Superior Poultry has been a landmark to the Chinese diaspora throughout Los Angeles. Owned by the Wong family across multiple generations starting with Gloria and her husband David, it is dedicated to selling live poultry even after live markets were on the decline, even after World War II. A few shops down is the Wong Family Benevolent Association, helping Chinese immigrants and descendants receive assistance and support. The Chinese began immigrating to Los Angeles in the 1850s, forming an early version of present-day Chinatown in the 1870s.",
    "Today, their son, Willard, continues to keep the business going, passing this legacy across multiple generations. Superior Poultry, alternatively named as Wing On Poultry as transliterated by their Chinese name 永安雞鴨欄, became so successful that the Wongs decided to expand the network, which would later be known as Wing On Poultry (永安), across multiple locations in California, including another Chinatown store just a few blocks away across the street.",
    "Superior Poultry sells a large variety of selections ranging from chickens to ducks to rabbit to even game bird selections like quail. The birds are sold live, then slaughtered and processed while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter. Alternatively, unlike most live markets where you are not allowed to take the bird home unless it has been processed/slaughtered, this shop allows you to take the bird home live, allowing you to slaughter the bird yourself, whether its due to religion or out of curiosity, or continue raising them for longer if you want to start a new poultry farm and get eggs from them. However, this is not recommended, as any live poultry that has left the store lies responsibility in the customer rather than the shop.",
    "This store also wholesales freshly slaughtered poultry to the other stores of the Wing On network through distributing them from Chinatown to their wholesale distributor at Market La Superior."
    ],
    image: superiorpoultrychinatown,
    alt: "Front entrance of Superior Poultry"
  },
  {
    id: "marketlasuperior",
    name: "Market La Superior",
    phone: "To Be Announced",
    address: "4513 Dozier St, Los Angeles, CA 90022",
    description: [
    "Formerly located on 270 Monterey Pass Rd, the place was closed on September 2026. As of September 2026 they have moved operations right next to Superior Poultry ELA. Prior to this closure, it was known as Market La Superior or Wing On Market.",
    "The location participated in receiving items from their main location in Chinatown and wholesaling them to their other stores, as well as a retail store. Now that it is next door to Superior Poultry (ELA), assuming Superior Poultry ELA still slaughters on site, they may not need to go from Chinatown to Monterey Park to their retail stores anymore they can just go from East Los Angeles all the way to their retail stores directly. Even if we count that Superior doesn't, it still is more convenient than the former.",
    "The opening date of this store has yet to be announced, so be patient."
    ],
    image: marketlasuperior,
    alt: "Front entrance of Market La Superior" 
  },
  {
    id: "pekingpoultry",
    name: "Peking Poultry",
    address: "717 N Broadway, Los Angeles, CA 90012",
    phone: "(213) 680-2588",
    description: [
    "Another live poultry market of the Wing On (永安) network. While Peking Poultry usually transliterates as 北京雞鴨欄, on official signage outside the shop, it shows instead as 北京永安雞鴨欄, showing it is a part of the Wing On Poultry network. Not only that, but the store even frequently advertises Wing On Poultry as shown in its advertisement on walls, as well as its products, unlike Superior who only advertises it is a part of the Wing On network through its Chinese name 永安.",
    "Like Superior Poultry, the birds are sold live rather than from exterior distributors, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter. This store, in addition to poultry, has a selection of live fish and fresh pork, as well as multiple sections for groceries, making it more of a grocery store specialized in various forms of meat than a mere poultry store unlike Superior Poultry which exclusively sells poultry."
    ],
    image: pekingpoultry,
    alt: "Front entrance of Peking Poultry"
  },
  {
    id: "sanfranciscopoultry",
    name: "San Francisco Poultry",
    phone: "(415) 781-8883",
    address: "1114 Grant Ave, San Francisco, CA 94133",
    description: [
    "Also known as Wing On Poultry, Wing On Poultry has expanded out of Southern California into San Francisco, which like Chinatown, has a large number of Asian immigrants and descendants. San Francisco is known for various Chinese cultural associations, such as the Gin Sun Hall Benevolent Association. Larry Gean, the father of Cal State LA former network administrator Edmund Gean and Miss Asian Global pageant administrative director Julunda Mendoza, was a former president of that association prior to his death. The Gean family resides less than a mile away from San Francisco Poultry, making San Francisco Poultry easily accessible to them. The large immigration of Chinese immigrants began ever since the Gold Rush in the mid 19th century.",
    "It sells various selections of live birds which are slaughtered and processed on the spot while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter. Alternatively, unlike most live markets where you are not allowed to take the bird home unless it has been processed/slaughtered, this shop allows you to take the bird home live, allowing you to slaughter the bird yourself, whether its due to religion or out of curiosity, or continue raising them for longer if you want to start a new poultry farm and get eggs from them. However, this is not recommended, as any live poultry that has left the store lies responsibility in the customer rather than the shop. Next door is another poultry butcher shop, known as Man Sung Market, though unlike San Francisco Poultry it may not slaughter on site."
    ],
    image: sanfranciscopoultry,
    alt: "Front entrance of San Francisco Poultry"
  },
  {
    id: "superiorpoultryela",
    name: "Superior Poultry",
    phone: "(323) 261-4313",
    address: "450 N Ford Blvd, Los Angeles, CA 90022",
    description: [
    "Formerly known as Majestic Poultry and currently also known as Superior Poultry ELA, the shop was renamed Superior Poultry in 2018. For decades, the shop slaughtered and butchered live birds on the spot, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter. It is speculated they do not sell live birds on site anymore ever since the rebrand and that the birds come in pre-slaughtered and pre-dead from the main shop in Chinatown.",
    "It does, however, have Market La Superior right next door to it. Market La Superior was formerly located in Monterey Park and relocated there since. Before, chickens would be slaughtered in Chinatown then moved to Monterey Park before being wholesaled. Now, assuming Superior still slaughters on site it may just need to go from East Los Angeles to their retail stores directly.",
    "It still isn't guaranteed that Superior Poultry slaughters chickens anymore. It could just be an extension of Market La Superior meaning they go from Chinatown to East Los Angeles to their retail stores, which is still more convenient than the former. Still, regardless of where the birds came from, they are much fresher than supermarket chicken as many supermarket chicken has been sitting for days while a chicken sold at this shop was slaughtered hours ago prior to purchase if not minutes ago. In addition, it has a large variety of selections. It even has a mini market for groceries, such as lettuce and rice."
    ],
    image: superiorpoultryela,
    alt: "Front entrance of Superior Poultry"
  },
  {
    id: "waikikiepollos",
    name: "Waikikie Pollos",
    phone: "(626) 582-8399",
    address: "10116 Garvey Ave, El Monte, CA 91733",
    description: [
    "Also known as Wing On Market, this store sells fresh poultry which is sourced from their wholesale distributor. It also sells deli meats, groceries, and other products."
    ],
    image: waikikiepollos,
    alt: "Front entrance of Waikikie Pollos"
  },
  {
    id: "majesticpoultryalhambra",
    name: "Majestic Poultry & Market",
    phone: "(626) 281-3678",
    address: "408 E Valley Blvd, Alhambra, CA 91801",
    description: [
    "The second store of the former Majestic Poultry location. Even after the former rebranded as Superior Poultry, this store still remains under the Majestic brand as of today.", 
    "This store sells a variety of fresh poultry. The birds are freshly slaughtered at the live poultry shops owned by the Wing On Poultry network daily. Aside from fresh poultry, it also sells pork, seafood, and various groceries. It is especially well-known for its wontons and lottery tickets."
    ],
    image: majesticpoultryalhambra,
    alt: "Front entrance of Majestic Poultry & Market"
  },
  {
    id: "wingonmontereypark",
    name: "Wing On Market",
    phone: "(626) 571-8899",
    address: "726 E Garvey Ave, Monterey Park, CA 91755",
    description: [
    "This is the first expansion of Wing On Poultry from Superior Poultry, Peking Poultry, Majestic Poultry, and San Francisco Poultry to various specialty markets in the San Gabriel Valley. These stores sell various selections of poultry sourced fresh daily from their wholesale distributor, alongside fish, pork, and various groceries."
    ],
    image: wingonmontereypark,
    alt: "Front entrance of Wing On Market"
  },
  {
    id: "wingonsanggabriel",
    name: "Wing On Market",
    phone: "(626) 571-8189",
    address: "705 E Las Tunas Dr, San Gabriel, CA 91776",
    description: [
    "Wing On Market's location in San Gabriel which sells various selections of poultry sourced fresh daily from their wholesale distributor, alongside various groceries."
    ],
    image: wingonsangabriel,
    alt: "Front entrance of Wing On Market"
  },
  {
    id: "wingonalhambra",
    name: "Wing On Market",
    phone: "(626) 571-8998",
    address: "2107 W Commonwealth Ave, Ste 448, Alhambra, CA 91803",
    description: [
    "Wing On Market's location in Alhambra, near Costco, which sells various selections of poultry sourced fresh daily from their wholesale distributor, alongside various groceries."
    ],
    image: wingonalhambra,
    alt: "Front entrance of Wing On Market"
  },
  {
    id: "wingon1619",
    name: "Wing On Market",
    phone: "(626) 571-8898",
    address: "1619 S Del Mar Ave, San Gabriel, CA 91776",
    description: [
    "Wing On Market's location located near Sheraton and Hilton Los Angeles/San Gabriel (home to Five Star Seafood Restaurant). It sells various selections of poultry sourced fresh daily from their wholesale distributor, alongside various groceries."
    ],
    image: wingon1619,
    alt: "Front entrance of Wing On Market"
  }
];

export default function WingOn() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Wing On Poultry</h1>

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
            <p>{selectedStore.phone}</p>

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