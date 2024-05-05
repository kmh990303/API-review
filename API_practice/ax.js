// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//     console.log("RESOLVED", res);
// });


// const getStarWarsPerson = async () => {
//     try {
//         const res = await axios.get("https://swapi.dev/api/people/1/");
//         console.log(res.data);
//     } catch (e) {
//         console.log(e);
//     }
// }

// getStarWarsPerson();

// const jokes = document.querySelector('#jokes');

// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } }
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     const newLI = document.createElement('LI');
//     newLI.append(res.data.joke);
//     jokes.append(newLI);
// }

// getDadJoke();

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}