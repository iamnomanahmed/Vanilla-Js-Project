const btn = document.getElementById('btn')
const quotes = document.getElementById('quotes')

const showQuote = (e) => {


    fetch("https://type.fit/api/quotes")
        .then( (response) => {
            return response.json();
        })
        .then(function (data) {
            const num = Math.floor(Math.random() *100);
            const text = data[num].text;
            const author = data[num].author;
            quotes.innerHTML = `
            <div>
           <div> <h1>"${text}"</h1></div>
            <div ><h3>${author}</h3></div>
            </div>
    `       

        });

}


btn.addEventListener('click', showQuote)
