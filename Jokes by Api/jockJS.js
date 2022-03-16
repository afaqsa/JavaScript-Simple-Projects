
// using Fetch Api

// 90% promise consumed

const jokes = document.getElementById('joke');
const btn = document.getElementById('btn');
// By promising
// const genrate = () => {
//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }
//     fetch("https://icanhazdadjoke.com/", setHeader)
//         .then((res) => res.json())
//         .then((data) =>  jokes.innerHTML = data.joke )
//         .catch((error) =>  alert(error))
    
// }

// Now by asynic avoid

// asy
const genrate = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch("https://icanhazdadjoke.com/", setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke
        
    } catch (err) {
        alert(`Error is ${err}`);
    }
}
btn.addEventListener('click', genrate);
genrate();
