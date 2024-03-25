import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

export function initFullpage() {
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    menu: '#myMenu',
    anchors: ['home', 'vision', 'requirements', 'technologien', 'organisation', 'stack', 'vogelperspektive', 'footer'],
  });
}