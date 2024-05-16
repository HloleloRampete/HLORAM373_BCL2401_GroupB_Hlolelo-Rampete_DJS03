
// Importing data and constants from external module
import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";

// Initializing variables for pagination and filtering
let page = 1;
let matches = books;

// Function to get DOM element by selector
const getElement = (selector) => document.querySelector(selector);

// Function to create and append book previews to the DOM
const createBookPreviews = (books, container) => {
  const fragment = document.createDocumentFragment();
  books.forEach(({ author, id, image, title }) => {
    const element = document.createElement("button");
    element.classList = "preview";
    element.setAttribute("data-preview", id);
    element.innerHTML = `
            <img class="preview__image" src="${image}" />
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

    fragment.appendChild(element);
  });
  container.appendChild(fragment);
};

