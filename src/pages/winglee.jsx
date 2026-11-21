import wingleefarms from "../assets/wingleefarms.webp";
import sinleefoods from "../assets/sinleefoods.jpg";
import chinapoultry from "../assets/chinapoultry.jpg";
import wingleeelmonte from "../assets/wingleeelmonte.jpg";
import wingleelapuente from "../assets/wingleelapuente.jpg";
import wingleesanjose from "../assets/wingleesanjose.jpg";
import wingleepomona from "../assets/wingleepomona.jpg";
import wingleearizona from "../assets/wingleearizona.jpg"

import { useState } from "react";

const stores = [
  {
    id: "wingleefarms",
    name: "Wing Lee Farms",
    address: "13625 Yorba Ave, Chino, CA 91710",
    phone: "(909) 628-2888",
    description: [
    "Wing Lee Farms is a USDA-inspected poultry slaughterhouse and meat packer located in Chino, CA, neighboring American Beef Packers. It opened in 2006 to expand Wing Lee's operation to wholesaling in restaurants and grocery stores due to a rise in the demand by Asian customers for whole chickens that come with the head and feet intact as well as chickens who are free range and slower grown due to its more chewy and tender flavor compared to the modern industrial broiler.",
    "Originally built for wholesale, as of today, the slaughtering operations were centralized in Chino, and as such, their retail stores source chickens daily exclusively from this facility. Wing Lee exclusively raises and slaughters chickens with various contract growers. It does not raise or slaughter ducks, as the ducks are outsourced fresh daily from Pitman Farms. While some of their retail stores used to slaughter on site prior to the opening of the Chino facility, most notably in San Diego and Fountain Valley, they stopped slaughtering on site a few years after the Chino facility opened, centralizing their operations to Chino. Despite this outsourcing, the chickens are slaughtered daily at Chino and are barely chilled to preserve freshness and quality even if not handed as warm as its live counterpart."
    ],
    image: wingleefarms,
    alt: "Front entrance of Wing Lee Farms"
  },
  {
    id: "sinleefoods",
    name: "Sin Lee Foods",
    phone: "(619) 521-2828",
    address: "4665 El Cajon Blvd, San Diego, CA 92115",
    description: [
    "Originally located on Euclid Ave, it was the first live market that Wing Lee operated. It originally for decades slaughtered chickens on site, preserving freshness as the bag was handed warm rather than cool to you minutes after slaughter. Wing Lee was able to navigate such thanks to partnering with a local farm in San Diego, Cebe Farms, to help grow their chickens as they eat their way to market.",
    "However, later it relocated and now operates inside a supermarket, Sin Lee Foods, in 2014. Since then, their chickens are sourced fresh daily from their local processor in Chino rather than slaughtered on site, but is still impossibly fresh compared to most chickens sold at grocery stores."
    ],
    image: sinleefoods,
    alt: "Front entrance of Sin Lee Foods"
  },
  {
    id: "chinapoultry",
    name: "China Poultry",
    address: "16281 Harbor Blvd, Fountain Valley, CA 92708",
    phone: "(714) 839-2328",
    description: [
    "Prior to the Chino facility, it was a prominent live poultry market that sold birds live, preserving freshness as the bag was handed warm rather than cool to you minutes after slaughter. Following the 2004 crackdown, Fountain Valley has since banned the property from slaughtering animals on site.",
    "As a result, as well as following the centralization of Wing Lee's operations to slaughtering, processing, and distributing chickens in their Chino processing plant, the chickens are processed fresh daily in Chino and distributed daily to China Poultry. Despite this outsourcing, they ensure the chickens are much fresher than chickens sold at supermarkets."
    ],
    image: chinapoultry,
    alt: "Front entrance of China Poultry"
  },
  {
    id: "wingleeelmonte",
    name: "Wing Lee Fresh Poultry",
    address: "3015 Central Ave, El Monte, CA 91733",
    phone: "(626) 279-6633",
    description: [
    "A retail store known for its extremely fresh chickens. Opened in 2015, it was opened to expand Wing Lee's operations closer to other Chinese communities at home. The chickens are sourced fresh daily from their processor in Chino."
    ],
    image: wingleeelmonte,
    alt: "Front entrance of Wing Lee Fresh Poultry"
  },
  {
    id: "wingleelapuente",
    name: "Wing Lee Fresh Poultry",
    address: "1043 N Hacienda Blvd, La Puente, CA 91744",
    phone: "(626) 968-8182",
    description: [
    "A retail store known for its extremely fresh chickens. Opened in 2014, it was opened to expand Wing Lee's operations closer to other Chinese communities at home. The chickens are sourced fresh daily from their processor in Chino."
    ],
    image: wingleelapuente,
    alt: "Front entrance of Wing Lee Fresh Poultry"
  },
  {
    id: "wingleesanjose",
    name: "Wing Lee Fresh Poultry and Meat",
    address: "1166 Tully Rd, San Jose, CA 95122",
    phone: "(408) 931-6558",
    description: [
    "A retail store known for selling fresh poultry. It opened in 2016 to expand Wing Lee's operations to San Jose, which also has a broader Chinese diaspora. The chickens are sourced fresh daily from their processor in Chino."
    ],
    image: wingleesanjose,
    alt: "Front entrance of Wing Lee Fresh Poultry and Meat"
  },
  {
    id: "wingleepomona",
    name: "Wing Lee Poultry Market",
    address: "1665 Indian Hill Blvd, Pomona, CA 91767",
    phone: "(909) 482-0880",
    description: [
    "Opened in 2019 to operate close to the Chino processing facility to preserve freshness, the retail store is known for its extremely fresh chickens."
    ],
    image: wingleepomona,
    alt: "Front entrance of Wing Lee Poultry Market"
  },
  {
    id: "wingleearizona",
    name: "Wing Lee Exotic Fruits Market",
    address: "111 S Dobson Rd, Ste 106, Mesa, AZ 85202",
    phone: "(480) 668-1060",
    description: [
    "An exotic fruits market, known for selling various fruits and groceries. Opening in 2014 to expand Wing Lee's operations out of state, it used to sell fresh poultry that was slaughtered fresh daily in Chino, but it isn't known if it sells fresh poultry anymore. It also sells fruits and vegetables and is known for its exotic fruits.fruits they sell are excellent and they also have pho ga which sources Wing Lee's premium chickens."
    ],
    image: wingleearizona,
    alt: "Front entrance of Wing Lee Exotic Fruits Market"
  }
];

//to add more stores add more imports and more elements to array

export default function WingLee() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Wing Lee Farms</h1>

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