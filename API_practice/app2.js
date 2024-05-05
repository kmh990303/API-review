// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED!!!", res);
//         res.json().then((data) => {
//             console.log("SUCCEED", data);
//         })
//     })
//     .catch((e) => {
//         console.log("ERROR!!!", e);
//     })

// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED!!!", res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!!!", e);
//     })

//비동기함수로 작성하면 비동기 작업을 수행하는 코드에 await 키워드를 사용할 수 있다
const loadStarWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
}

loadStarWarsPeople();