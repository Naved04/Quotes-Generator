const URL = "https://api.quotable.io/random";
const btn = document.querySelector("#btn");
const quoteText = document.querySelector("#quoteText");
const author = document.querySelector("#author");

btn.addEventListener("click", async () => {
    let response = await fetch(URL);
    let data =await response.json();
    // console.log(data)
    // console.log(quotes)
    let quote = `"${data.content}"`;
    let authorText = `- ${data.author}`;
    quoteText.innerText = quote;
    author.innerText = authorText;
});

