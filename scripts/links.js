const baseURL = "https://devunfox15.github.io/wdd230/";
const linksURL = "https://devunfox15.github.io/wdd230/data/links.json";

async function apiFetch() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const links = data.links;
    for (const link of links) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", link.url);
        a.setAttribute("title", link.title);
        a.textContent = link.title;
        li.appendChild(a);
        document.querySelector("#links-list").appendChild(li); // Changed this line
    }
}