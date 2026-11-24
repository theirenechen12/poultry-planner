import shangleechinatown from "../assets/shangleechinatown.jpg";
import shangleemarket from "../assets/shangleemarket.jpg";

import { useState } from "react";

const stores = [
  {
    id: "shangleechinatown",
    name: "Shang Lee Fresh Poultry",
    address: "711 N Spring St, Los Angeles, CA 90012",
    phone: "(213) 617-2635",
    description: [
    "Also known as simply Shang Lee Poultry, it is the main shop for Shang Lee Poultry. It was founded by the Long family and is currently managed by Sam Long and Cindy Ly. The birds are sold live, preserving freshness as the bag was handed warm rather than cool to you minutes after slaughter. It sells chickens, ducks, squab, and eggs.",
    "Aside from poultry, it also sells various groceries such as rice noodles, chicken parts, pork/fish, luncheon meat, and sodas.",
    ],
    image: shangleechinatown,
    alt: "Front entrance of Shang Lee Fresh Poultry"
  },
  {
    id: "shangleemarket",
    name: "Shang Lee Market",
    address: "459 E Garvey Ave, Monterey Park, CA 91755",
    phone: "(626) 312-9633",
    description: [
    "Originally located in Chinatown, the Longs branched down to Monterey Park to help regulars who previously frequented the main shop in Chinatown. It is a market that sells various groceries, such as lettuce, tomatoes, fish, pork or corn. It is most known for its specialty poultry.",
    "Like its Chinatown location, it offers similar options. It also has a herbal stand. It sources its chickens daily from their main store in Chinatown, ensuring freshness as possible even if not slaughtered directly on site."
    ],    
    image: shangleemarket,
    alt: "Front entrance of Shang Lee Market"
  },
];

//to add more stores add more imports and more elements to array

export default function ShangLee() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Shang Lee Poultry</h1>

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