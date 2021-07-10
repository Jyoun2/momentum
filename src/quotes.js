const quotes = [
    {
        quote: "착하게 말해주세요",
        author: "정영한"
    },
    {
        quote: "아 치킨 먹고싶다",
        author: "정영한"
    },
    {
        quote: "새벽 4시 19분은 너무 행복해",
        author: "정영한"
    },
    {
        quote: "부끄러워요",
        author: "정영한"
    },
    {
        quote: "언제쯤 완벽해질 수 있을까?",
        author: "정영한"
    },
    {
        quote: "떠나요 둘이서 힘들게 별로 없어요",
        author: "정영한"
    },
    {
        quote: "하고싶은거 할래",
        author: "정영한"
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;