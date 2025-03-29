
async function joke(category = 'Any') {
    try {
        console.log(`Getting joke from the category: ${category}`);
        const response = await fetch(`https://v2.jokeapi.dev/joke/Dark?type=single`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API response:", data);
        
        let jokeText = data.joke || "No joke found.";

        document.getElementById("joke").innerText = jokeText;
        updateTitleSingle(category);
    } catch (error) {
        console.error("Error getting joke:", error);
        document.getElementById("joke").innerText = "Error loading joke. Please try again.";
    }
}


async function two(category = 'Any') {
    try {
        console.log(`Getting two-part joke from category: ${category}`);
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=twopart&safe-mode`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API response:", data);

        let twoPartJoke = data.setup ? `${data.setup} 🤔\n\n${data.delivery} 😂` : "No two-part joke found.";

        document.getElementById("two").innerText = twoPartJoke;
        updateTitleTwo(category);
    } catch (error) {
        console.error("Error getting joke:", error);
        document.getElementById("two").innerText = "Error loading joke. Please try again.";
    }
}


function updateTitleSingle(category) {
    if (category === "Any") {
        document.title = "Joke of the Day";
    } else if (category === "Pun") {
        document.title = "A Random Word Game";
    } else {
        document.title = `A Random Joke - ${category}`;
    }
}

function updateTitleTwo(category) {
    if (category === "Any") {
        document.title = "Two-Part Joke of the Day";
    } else if (category === "Pun") {
        document.title = "A Random Two-Part Word Game";
    } else {
        document.title = `A Random Two-Part Joke - ${category}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    joke();
    two();
});



async function wordQuestion(category = 'Any') {
    try {
        console.log(`Getting joke from the category: ${category}`);
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=single&safe-mode`);
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        console.log("API response:", data);

        document.getElementById("pun-joke").innerText = data.joke;

        updateTitle(category);
    } catch (error) {
        console.error("Error getting joke:", error);
        document.getElementById("pun-joke").innerText = "Error loading joke. Please try again.";
    }
}

function updateTitle(category) {
    document.title = `Joke of the Day - ${category}`;
}


document.addEventListener("DOMContentLoaded", () => wordQuestion('Pun'));


async function fetchTwoPartJoke(category = 'Any') {
    try {
        console.log(`Getting joke from the category: ${category}`);

        let response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=twopart&safe-mode`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        let data = await response.json();
        console.log("API response:", data);
  

        document.getElementById("joke-container").innerHTML = `<strong>${data.setup}</strong> <br> ${data.delivery}`;
        updateTitle(category);
    } catch (error) {
        console.error("Error getting joke:", error);
        document.getElementById("joke-container").innerText = "Error loading joke. Please try again.";
    }
}

function updateTitle(category) {
    if (category === "Any") {
        document.getElementById("joke-title").innerText;
    } else {
        document.getElementById("joke-title").innerText;
    }
}

document.addEventListener("DOMContentLoaded", () => fetchTwoPartJoke());

