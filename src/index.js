import "./styles.css";
import lazyload from "./lazyload.js";

let str = "";
const passage = src => `
<h1>Lazy Loading OH YEA!!</h1>
<div>
<img id="suh" data-src="${src}"/>
Each image is lazy loaded so if you can't see it, it hasn't been loaded yet.
</div>
`;

// fill up the page
[...Array(50).keys()].forEach(i => {
  str += passage(
    "https://louisvilletech.org/images/louisville-tech-logo-light.svg?id=" + i
  );
});

document.getElementById("app").innerHTML = str;
lazyload();
