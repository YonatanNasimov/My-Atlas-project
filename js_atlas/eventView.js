import { searchApi } from "./atlasManger.js"

  export const declareEvents = () => {
    let search_btn = document.querySelector("#search_btn");
    let id_input = document.querySelector("#id_input");
    id_input.addEventListener("keydown",(e) => {
      // e.key => מכיל על איזה מקש לחצנו במקלדת ובדקנו שזה אנטר
      if(e.key == "Enter"){
        searchApi(id_input.value);
      }
    })
  
    search_btn.addEventListener("click", () => {
      searchApi(id_input.value);
    })
  }



