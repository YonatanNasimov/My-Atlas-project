import CountryItem from "./CountryItem.js";
const countries_ar = []

const showLoading = () => {
   document.querySelector("#id_loading").style.display = "block";
   document.querySelector("#id_row").style.display = "none";
   document.querySelector(".main").style.background = "white";

}

const hideLoading = () => {
   document.querySelector("#id_loading").style.display = "none";
   document.querySelector("#id_row").style.display = "flex";
   // document.querySelector(".main").style.background = "";

}

export const doApi = async () => {
   showLoading();
   let url = "https://restcountries.com/v3.1/all";
   let resp = await fetch(url);
   let data = await resp.json();
   countries_ar.splice(0, data.length, ...data);
   // console.log(data);
   let startCountries_ar = ["Peru", "Israel", "Russia", "Brazil", "Thailand"];
   let filter_ar = data.filter(item => startCountries_ar.includes(item.name.common));
   console.log(filter_ar);
   creatCountries(filter_ar);
}

export const creatCountries = _ar => {
   hideLoading();
   console.log(_ar);
   document.querySelector("#id_row").innerHTML = "";
   if (_ar.length != 0) {
      _ar.forEach(item => {
         let Country = new CountryItem("#id_row", item);
         Country.shownRender();

      })
   } else{
      document.querySelector("#id_row").innerHTML = "<h3>Country is undefined</h3>";
   }
}

export const searchApi = async _searchQuery => {
   console.log(_searchQuery);
   let sorted_ar = countries_ar.filter(item => item.name.common.toLowerCase().includes(_searchQuery.toLowerCase()))
   console.log(sorted_ar);
   creatCountries(sorted_ar);
}