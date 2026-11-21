import singleewhittier from "../assets/singleewhittier.jpg";
import hingleerosemead from "../assets/hingleerosemead.jpg";
import hingleeelmonte from "../assets/hingleeelmonte.jpg";

import { useState } from "react";

const stores = [
  {
    id: "singleewhittier",
    name: "Sing Lee Seafood & Poultry Market",
    address: "13482 Telegraph Rd, Whittier, CA 90605",
    phone: "(562) 777-7219",
    description: [
    "The main facility for the Hing Lee family group, it sells live chickens and ducks. The birds are sold live, preserving freshness as the bag was handed warm rather than cool to you minutes after slaughter.",
    "The name still contains the word seafood, though the entrance doesn't advertise seafood. As such, if you want seafood, it is advised to call ahead of time.",
    ],
    image: singleewhittier,
    alt: "Front entrance of Sing Lee Seafood & Poultry Market"
  },
  {
    id: "hingleerosemead",
    name: "Hing Lee Poultry",
    address: "3246 San Gabriel Blvd, #C, Rosemead, CA 91770",
    phone: "(626) 872-6023",
    description: [
    "A retail store for the Hing Lee family group, the poultry is sourced fresh daily from the main facility in Whittier, as well as Wing Lee Farms."
    ],    
    image: hingleerosemead,
    alt: "Front entrance of Hing Lee Poultry"
  },
  {
    id: "hingleeelmonte",
    name: "Hinglee Farm Market",
    address: "4547 Peck Rd, El Monte, CA 91732",
    phone: "(626) 758-1468",
    description: [
    "A retail store for the Hing Lee family group, the poultry is sourced fresh daily from the main facility in Whittier, as well as Wing Lee Farms. It also sells pork and contains a mini-market for groceries."
    ], 
    image: hingleeelmonte,
    alt: "Front entrance of Hinglee Farm Market"
  },
];

//to add more stores add more imports and more elements to array

export default function Hinglee() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Hinglee Farm Market</h1>

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