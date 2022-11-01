const list = document.querySelector(".quotes-list");

const getData = async function () {
  const response = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes"
  );
  const data = await response.json();
  console.log(data);
};

const getQuote = async function () {
  const response = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=Victor%20Hugo"
  );
  const data = await response.json();
  const quotes = data.data;
  // console.log(quotes[2].quoteText);
  for (let d of quotes) {
    const li = document.createElement("li");
    li.innerText = d.quoteText;
    list.append(li);
    // console.log(d.quoteText)
  }
};

getData();
getQuote();
