import GuestList from "./GuestList";
import { useState } from "react";

export default function GuestDisplay() {
    const [ guests ] = useState(guestsData);
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
            <GuestList />
          ))}
        </ul>
      </section>
    </>
  );
}
