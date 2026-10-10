import Guest from "./Guest";
import { useEffect, useState } from "react";
import { getGuests } from "./getGuests";
import ExtraDetails from "./ExtraDetails";

useEffect();

export default function GuestDisplay() {
  const [guests] = useState(guestsData);
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
        <ExtraDetails />
      </section>
    </>
  );
}
