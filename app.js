let btn = document.getElementById('btn');
let quote = document.getElementById('quote');
let name = document.getElementById('name');


btn.addEventListener('click', ()=>{
        fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": "3bcf882644mshb6f4e09b94ec195p1f0070jsna19923ed40cf"
        }
    })
    .then(res => res.json())
    .then(data => {
        
            let author = data['originator']['name'];
            let newQuote = data['content'];

            quote.innerHTML = newQuote;
            name.innerHTML = "- " + author;
        
    });
});
