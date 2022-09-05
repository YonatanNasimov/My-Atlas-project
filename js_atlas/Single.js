import CountryItem from "./CountryItem.js";
const init = () => {
  doapi();
}

const doapi = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  let name = urlParams.get("name");
  if (name) {
    let url = `https://restcountries.com/v3.1/name/${name}`;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data)
    creatCountries(data)
  }
}

const creatCountries = _ar  => {
  console.log(_ar);
   document.querySelector("#id_row").innerHTML = "";
  _ar.forEach(item => {
     let Country = new CountryItem("#id_row", item);
     Country.render();
  });
}

let logo = document.querySelector(".logo");
logo.style.cursor = "pointer"
logo.addEventListener("click", () => {
window.open("index.html")
})





init();