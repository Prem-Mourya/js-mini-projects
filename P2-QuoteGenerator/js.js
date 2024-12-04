const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector("#newQuote");
const api_url = "https://quotes-api-self.vercel.app/quote";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

btn.addEventListener('click', function (e) {
    getQuote(api_url);
})
getQuote(api_url)

