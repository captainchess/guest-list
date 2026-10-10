
export default function Guest({ guest }) {
    return (
        <div onClick={getDetails}>
            <li key={guest.id}>{guest.name}</li>
            <li key={guest.email}>{guest.email}</li>
            <li key={guest.phone}>{guest.phone}</li>
        </div>
    );
}
