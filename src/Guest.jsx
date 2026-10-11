export default function Guest({ guest, guestDetails, setGuestDetails }) {
  
  return (
    <div className={"div-guests" + (guestDetails ===guest ? " selected" : "")} role="button" onClick={() => setGuestDetails(guest)}>
      <li className="guest-details" key={guest.id}>
        <button className="list-button">{guest.name}</button>
      </li>
      <li className="guest-details" key={guest.email}>
        <button className="list-button">{guest.email}</button>
      </li>
      <li className="guest-details" key={guest.phone}>
        <button className="list-button">{guest.phone}</button>
      </li>
    </div>
  );
}
