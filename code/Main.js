fetch("../questions.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error ("res not ok boss!");
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
        let obj = JSON.parse(data);
        let question = new Question(data.question);
        console.log(question);
    })
    .catch((error) => console.error("Unable to fetch"))
