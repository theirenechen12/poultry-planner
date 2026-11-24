import calpoultry from "../assets/calpoultry.jpg";

import { useState } from "react";

const stores = [
  {
    id: "calpoultry",
    name: "CAL Poultry Vikon",
    address: "8932 E Garvey Ave, Rosemead, CA 91770",
    phone: "(626) 288-1398",
    description: [
    "Operating since 1991 and USDA-approved since 1993 and also known as Chinese American Live Poultry, Dana and Quan Phu have dedicated themselves around raising Vikon chickens, where they are bred in free range farms with no added hormones or antibiotics and are slower grown compared to the commerical Cornish cross. The shop sells Buddhist-style chickens and previously faced risk of closures due to odor complaints. The Phus have filed a lawsuit against these complaints citing discrimination and have since worked to minimize odor complaints and allow the store to remain in operation since.",
    "This store sells varieties of birds, ranging from chickens to ducks to Muscovies to guineas to pheasants to quails to squab to chukar. It also sells chicken parts and contains a mini grocery shop which sells joss paper and other prayer related items. The birds are sold live, this shop has been known for decades for selling these poultry live, then slaughtering and processing them while you wait, preserving freshness as the bag is handed warm rather than cool to you minutes after slaughter."
    ],    
    image: calpoultry,
    alt: "Front entrance of CAL Poultry Vikon"
  }
];

//to add more stores add more imports and more elements to array

export default function Vikon() {
  const [selectedId, setSelectedId] = useState("");

  const selectedStore = stores.find(
    (store) => store.id === selectedId
  );

  return (
    <main>
      <h1>Vikon Farms</h1>

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