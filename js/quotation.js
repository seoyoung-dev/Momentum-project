const quotes = [
  {
    quote: "나를 괴롭히는 것은 대부분 현실보다 상상이다.",
    author: "김은주",
  },
  {
    quote:
      "이걸로 됐어. 전부 이루어지지 않아도 돼. 그래야 남은 걸 소중히 여길 수 있을 것 같아.",
    author: "오누마 노리코",
  },
  {
    quote:
      "명심해라. 이제 너도 어른이라는 것을. 어른이라는 것은 바로 어린 시절 그토록 부모에게 받고자 했던 그것을 스스로에게 주는 사람이라는 것을.",
    author: "공지영",
  },
  {
    quote:
      "성공으로 가는 가장 좋은 길은 네가 사랑하는 일을 찾고 그것을 다른 사람에게 서비스로 제공하는 방법을 찾는 것이다",
    author: "오프라 윈프리",
  },
  {
    quote: "지금 하는 작은 선택이 인생을 바꾼다.",
    author: "정승제",
  },
  {
    quote:
      "심장 소리는 이렇게 다르지만, 누구나 자신의 인생을 살고 있다는 점은 똑같다.",
    author: "마스다 미리",
  },
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

quote.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;
