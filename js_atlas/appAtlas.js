import {doApi} from "./atlasManger.js"
import { declareEvents } from "./eventView.js";

const init = () => {
  doApi();
  declareEvents();
}

init();