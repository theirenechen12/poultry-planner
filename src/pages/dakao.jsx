import dakaopoultry from "../assets/dakaopoultry.jpg";

import { useState } from "react";

const stores = [
  {
    id: "dakaopoultry",
    name: "Dakao Poultry",
    address: "8061 Bolsa Ave, Midway City, CA 92655",
    phone: "(714) 893-8363",
    description: [
    "Opened in the early 2000s by Hung Ngo, who left Vietnam in 1981, the shop has remained a staple in Midway City, which has a prominent Vietnamese population. The shop is known for its free range chicken, its ducks, eggs, and balut. It also sells chicken parts and contains a mini grocery shop which sells joss paper and other prayer related items. The birds are sold live, this shop has been known for decades for selling these poultry live, then slaughtering and processing them while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter."
    ],    
    image: dakaopoultry,
    alt: "Front entrance of Dakao Poultry"
  }
];

//to add more stores add more imports and more elements to array

export default function Dakao() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Dakao Poultry</h1>

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