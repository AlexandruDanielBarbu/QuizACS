fetch("../questions.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error ("res not ok boss!");
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => console.error("Unable to fetch"))
