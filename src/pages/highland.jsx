import highlandpoultry from "../assets/highlandpoultry.webp";
import charlestonpoultry from "../assets/charlestonpoultry.png";

import { useState } from "react";

const stores = [
  {
    id: "highlandpoultry",
    name: "Highland Poultry",
    address: "3200 Procyon St, Las Vegas, NV 89102",
    phone: "(702) 437-2888",
    description: [
    "The main shop for the Highland Live Poultry group. Owned by David Lee, it is located near Chinatown Las Vegas, supplying its majorly Hispanic and Asian customer base. The shop sells chickens and ducks, where these birds are sold live, then slaughtered and processed while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter."
    ],
    image: highlandpoultry,
    alt: "Front entrance of Highland Live Poultry"
  },
  {
    id: "charlestonpoultry",
    name: "Charleston Poultry",
    address: "3041 E Charleston Blvd, Las Vegas, NV, 89104",
    phone: "(702) 665-6668",
    description: [
    "The second shop for the Highland Live Poultry group, it sells chickens and ducks, where these birds are sold live, then slaughtered and processed while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter."
    ],    
    image: charlestonpoultry,
    alt: "Front entrance of Charleston Poultry"
  },
];

//to add more stores add more imports and more elements to array

export default function Highland() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Highland Live Poultry</h1>

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