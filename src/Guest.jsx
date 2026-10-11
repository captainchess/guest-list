
export default function Guest({ guest, setGuestDetails }) {
    console.debug(guest, setGuestDetails);
    return (
        <div onClick={setGuestDetails(guest)}>
            <li key={guest.id}>{guest.name}</li>
            <li key={guest.email}>{guest.email}</li>
            <li key={guest.phone}>{guest.phone}</li>
        </div>
    );
}
