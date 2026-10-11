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
        <ul className="ul-header">
          <li className="column-header">Name</li>
          <li className="column-header">Email</li>
          <li className="column-header">Phone</li>
        </ul>
      </section>
      <section>
        <ul className="ul-guests">
          {guests.map((guest) => (
            <Guest key={guest.id} guest={guest} setGuestDetails={setGuestDetails} />
          ))}
        </ul>
      </section>
      <section>
        <SelectedDetails name={guestDetails?.name} job={guestDetails?.job} bio={guestDetails?.bio}/>
      </section>
    </>
  );
}
