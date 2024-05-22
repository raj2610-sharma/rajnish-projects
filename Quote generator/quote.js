let quotes =[
{
    text:"The only way to do great work is to love what you do.",
    author:"Steve Jobs",
},
{
    text:"In the end, it's not the years in your life that count. It's the life in your years.",
    author:" Abraham Lincoln",
},
{
    text:"The greatest glory in living lies not in never falling, but in rising every time we fall",
    author:"Nelson Mandela",
},
{
    text:"The future belongs to those who believe in the beauty of their dreams.",
    author:"Eleanor Roosevelt",
},
{
    text:"Success is not final, failure is not fatal: It is the courage to continue that counts..",
    author:"Winston Churchill",
},
{
    text:"You miss 100% of the shots you don't take.",
    author:"Wayne Gretzky",
},
{
    text:"The only limit to our realization of tomorrow will be our doubts of today.",
    author:"Franklin D. Roosevelt",
},
{
    text:"The only way to achieve the impossible is to believe it is possible.",
    author:"Charles Kingsleigh (From Alice in Wonderland)",
},
{
    text:"Your time is limited, don't waste it living someone else's life.",
    author:"Steve Jobs",
},
{
    text:"Don't judge each day by the harvest you reap but by the seeds that you plan",
    author:"Robert Louis Stevenson",
}
];

let btn = document.querySelector("#btn")
let output = document.querySelector("#output")
let title = document.querySelector("#title");

btn.addEventListener('click',()=>{
    let randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
    output.textContent = randomQuotes.text;
    title.textContent = randomQuotes.author;
})