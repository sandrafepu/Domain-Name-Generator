/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#the-domain").innerHTML = generateUrl();
};

let generateUrl = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es"];

  pronoun.forEach(element1 => {
    adj.forEach(element2 => {
      noun.forEach(element3 => {
        extension.forEach(element4 => {
          console.log(element1 + element2 + element3 + element4);
        });
      });
    });
  });
};
