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
    description: [
    "Wing Lee Farms is a USDA-inspected poultry slaughterhouse and meat packer located in Chino, CA, neighboring American Beef Packers. It opened in 2006 to expand Wing Lee's chickens and wholesale.",
    "It originally was for wholesale, but eventually and as of today, retail stores source chickens fresh daily exclusively from this facility. Wing Lee exclusively raises and slaughters chickens with various contract growers. It does not raise or slaughter ducks, as the ducks are outsourced fresh daily from Pitman Farms. While these retail stores used to slaughter on site prior to the opening of the Chino facility, most notably in San Diego and Fountain Valley, they stopped slaughtering on site a few years after the Chino facility opened, centralizing their operations to Chino. Despite this outsourcing, the chickens are slaughtered daily at Chino and are barely chilled to preserve freshness and quality."
    ],
    image: wingleefarms,
    alt: "Front entrance of Wing Lee Farms"
  },
  {
    id: "sinleefoods",
    name: "Sin Lee Foods",
    address: "4665 El Cajon Blvd, San Diego, CA 92115",
    description: [
    "Originally located on Euclid Ave, it used to slaughter chickens on site, until it relocated inside a supermarket in 2014. Since then, their chickens are sourced fresh daily from their local processor in Chino."
    ],
    image: sinleefoods,
    alt: "Front entrance of Sin Lee Foods"
  },
  {
    id: "chinapoultry",
    name: "China Poultry",
    address: "16281 Harbor Blvd, Fountain Valley, CA 92708",
    description: [
    "Prior to the Chino facility, it used to slaughter chickens on site. Following the centralization of Wing Lee's operations in their Chino processing plant, the chickens are sourced fresh daily there."
    ],
    image: chinapoultry,
    alt: "Front entrance of China Poultry"
  },
  {
    id: "wingleeelmonte",
    name: "Wing Lee Fresh Poultry",
    address: "3015 Central Ave, El Monte, CA 91733",
    description: [
    "A retail store known for its extremely fresh chickens. The chickens are sourced fresh daily from their processor in Chino."
    ],
    image: wingleeelmonte,
    alt: "Front entrance of Wing Lee Fresh Poultry"
  },
  {
    id: "wingleelapuente",
    name: "Wing Lee Fresh Poultry",
    address: "1043 N Hacienda Blvd, La Puente, CA 91744",
    description: [
    "A retail store known for its extremely fresh chickens. The chickens are sourced fresh daily from their processor in Chino."
    ],
    image: wingleelapuente,
    alt: "Front entrance of Wing Lee Fresh Poultry"
  },
  {
    id: "wingleesanjose",
    name: "Wing Lee Fresh Poultry and Meat",
    address: "1166 Tully Rd, San Jose, CA 95122",
    description: [
    "A retail store known for selling fresh poultry. The chickens are sourced fresh daily from their processor in Chino."
    ],
    image: wingleesanjose,
    alt: "Front entrance of Wing Lee Fresh Poultry and Meat"
  },
  {
    id: "wingleepomona",
    name: "Wing Lee Poultry Market",
    address: "1665 Indian Hill Blvd, Pomona, CA 91767",
    description: [
    "A retail store known for its extremely fresh chickens. The chickens are sourced fresh daily from their processor in Chino."
    ],
    image: wingleepomona,
    alt: "Front entrance of Wing Lee Poultry Market"
  },
  {
    id: "wingleearizona",
    name: "Wing Lee Exotic Fruits Market",
    address: "111 S Dobson Rd, Ste 106, Mesa, AZ 85202",
    description: [
    "An exotic fruits market, known for selling various fruits and groceries. It used to sell poultry that was slaughtered fresh daily in Chino, but it isn't known if it sells poultry anymore. Still, the fruits they sell are excellent and they also have pho ga which sources Wing Lee's premium chickens."
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