

export default function GuestDisplay() {
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
                    {guests.map((guest) => <GuestList />) }
                </ul>
            </section>
        </>
    );
}