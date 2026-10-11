
export default function Guest({ guest, setGuestDetails }) {
    console.debug(guest, setGuestDetails);
    return (
        <div className="div-guests" onClick={setGuestDetails(guest)}>
            <li className="guest-details" key={guest.id}>{guest.name}</li>
            <li className="guest-details" key={guest.email}>{guest.email}</li>
            <li className="guest-details" key={guest.phone}>{guest.phone}</li>
        </div>
    );
}
