import baladipoultry from "../assets/baladipoultry.jpg";

import { useState } from "react";

const stores = [
  {
    id: "baladipoultry",
    name: "Baladi Poultry",
    address: "8261 Bolsa Ave, Midway City, CA 92655",
    phone: "(714) 894-7796",
    description: [
    "Owned by Mohammed Ismail and operated by Adam Elgabry, the shop is known for its Halal Poultry products, as well as its Vietnamese speaking clerks, due to its large concentration of Vietnamese customers who frequent the shop. The shop sells a large variety of poultry, ranging from chickens to rabbits to muscovies.",
    "The birds are sold live, then slaughtered and processed while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter. Alternatively, unlike most live markets where you are not allowed to take the bird home unless it has been processed/slaughtered, this shop allows you to take the bird home live, allowing you to slaughter the bird yourself, whether its due to religion or out of curiosity, or continue raising them for longer if you want to start a new poultry farm and get eggs from them. They also sell pet baby rabbits and parakeet unlike most poultry butcher shops which don't allow you to take animals live home, let alone pets."
    ],
    image: baladipoultry,
    alt: "Front entrance of Baladi Poultry"
  }
];

//to add more stores add more imports and more elements to array

export default function Baladi() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Baladi Poultry</h1>

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