// import './style.css'
// import {format} from "date-fns";
import template from "./index.stache";

document.querySelector('#app').appendChild(template({hello: "Vite"}));

// console.log(format(new Date(), 'dd.MM.yy'));
