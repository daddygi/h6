const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const htmlMarkup = images
  .map(
    (image) => `
      <li class="gallery-item">
        <img class="gallery-image" src="${image.url}" alt="${image.alt}">
      </li>
    `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", htmlMarkup);

const styleElement = document.createElement("style");
styleElement.textContent = `
      .gallery {
        display: flex;
        list-style: none;
        padding: 0;
      }

      .gallery-item {
        margin: 10px;
      }

      .gallery-image {
        max-width: 100%;
        height: auto;
        border-radius: 10pxpx;
      }
    `;

document.head.appendChild(styleElement);
