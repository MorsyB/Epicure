
export default async function getRestaurants() {
    fetch("/api/restaurants/getRestaurants")
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                console.log(data)
                return data;
            } else {
                alert("Wrong email or password");
            }
        });
        return [];
}