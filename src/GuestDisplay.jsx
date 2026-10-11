import Guest from "./Guest";
import { useEffect, useState } from "react";
import { getGuests } from "./api";
import SelectedDetails from "./SelectedDetails";

export default function GuestDisplay() {
  const [guests, setGuests] = useState([]);
  const [guestDetails, setGuestDetails] = useState();

  const syncGuests = async ()=>{
    const data = await getGuests();
    setGuests(data);
  }

  useEffect(() => {
    syncGuests();
  }, []);

  // Renders a list for the headers and list of
  // each guest's details
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
            <Guest key={guest.id} guest={guest} setGuestDetails={setGuestDetails} />
          ))}
        </ul>
      </section>
      <section>
        <SelectedDetails job={guestDetails?.job} bio={guestDetails?.bio}/>
      </section>
    </>
  );
}
