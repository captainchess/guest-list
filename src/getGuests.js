
export async function getGuests() {
    try {
        const response = fetch(API);
        const result = response.data;
    } catch (e) {
        console.error(e);
    }
}