const quotes =[
    {
        quote : "Don't dwell on the past.",
        author : "Anonymous",
    },
    {
        quote : "Seize the day.",
        author : "Anonymous",
    },
    {
        quote : "You only live once.",
        author : "Anonymous",
    },
    {
        quote : "Past is just past.",
        author : "Anonymous",
    },
    {
        quote : "Life is a journey.",
        author : "Ralph Waldo Emerson",
    },
    {
        quote : "Be brave.",
        author : "Anonymous",
    },
    {
        quote : "This too shall pass away.",
        author : "Abraham Lincoln",
    },
    {
        quote : "When in doubt, choose change.",
        author : "Lily Leung",
    },
    {
        quote : "Love what you do",
        author : "Anonymous",
    },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const quoteForm = document.querySelector("#quote span")

function randomQuote(){
     // if (quoteForm.classList.contains("fade-in-box")){
    //     quoteForm.classList.replace("fade-in-box", "fade-out-box")
    // } else {
    //     quoteForm.classList.add("fade-in-box")
    // }
    quote.classList.toggle("fade-out-box")
    // quote.classList.toggle("fade-in-box")
    author.classList.toggle("fade-out-box")
    // author.classList.toggle("fade-in-box")

    const randomInt = Math.floor(Math.random() * (quotes.length - 1))
    document.getElementById("")
    quote.innerText = '"' + quotes[randomInt].quote + '"'
    author.innerText = "- " + quotes[randomInt].author + " -"
   
}
randomQuote()
setInterval(randomQuote, 5000)