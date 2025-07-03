"use strict";

const text = document.querySelector(".text");
const byName = document.querySelector("small");
const button = document.querySelector(".button");

async function getData() {
  try {
    const url = "./quotes.json";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    insertRandomQuote(data);
  } catch (error) {
    console.error(error.message);
  }
}

function insertRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  text.innerHTML = quotes[randomIndex].quote;
  byName.innerHTML = quotes[randomIndex].author;
}

button.addEventListener("click", getData);
