import Guest from "./Guest";
import { useEffect, useState } from "react";
import { getGuests } from "./api";
import ExtraDetails from "./ExtraDetails";

export default function GuestDisplay() {
  const [guests, setGuests] = useState(guestsData);

  const syncGuests = async ()=>{
    const data = await getGuests();
    setGuests(data);
  }

  useEffect(() => {
    syncGuests();
  }, []);
  
  return (
    <>
      <section>
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </section>
      <section>
        <ul>
          {guests.map((guest) => (
            <Guest />
          ))}
        </ul>
      </section>
      <section>
        <SelectedDetails />
      </section>
    </>
  );
}
