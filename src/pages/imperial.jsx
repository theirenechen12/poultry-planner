import imperialpoultry from "../assets/imperialpoultry.webp";

import { useState } from "react";

const stores = [
  {
    id: "imperialpoultry",
    name: "Imperial Poultry",
    address: "821 E Washington Blvd, Los Angeles, CA 90021",
    phone: "(213) 742-9970",
    description: [
    "Imperial Poultry is known for its large varieties of poultry, which range from chickens, ducks, quails, rabbit, and turkey. Owned by Carmen and Elmo Perez, the shop opened over 30 years ago. It caters to the Chinese and Latino communitities with a large Latino customer base.",
    "While the shop ever since COVID-19 does not allow customers to take a breathing chicken home and only sells fresh poultry, this shop has been known for decades for selling these poultry live, then slaughtering and processing them while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter. The chickens has and always will be superior to frozen supermarket chicken.",
    "Next store, the shop contains a mini-market for groceries, such as rice, vegetables, chicken broths, and sodas."
    ],    
    image: imperialpoultry,
    alt: "Front entrance of Imperial Poultry"
  }
];

//to add more stores add more imports and more elements to array

export default function Imperial() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Imperial Poultry</h1>

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