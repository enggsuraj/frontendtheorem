const quotesBox = document.querySelector(".container_quotes-box");
const eventBox = document.querySelector(".container_event-box");
const id = document.querySelector(".id");

{
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => displayData(data));
}

const getQuotes = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  quotesBox.innerText = data.slip.advice;
  id.innerText = data.slip.id;
};

eventBox.addEventListener("click", () => {
  getQuotes();
});
