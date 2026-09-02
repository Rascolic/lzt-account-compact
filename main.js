// ==UserScript==
// @name         LZT Account Compact
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  More compact layout for marketplace catalog
// @author       nameless
// @match        https://lzt.market/*
// @match        https://lolz.market/*
// @match        https://zelenka.market/*
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lzt.market
// @grant        none
// ==/UserScript==
 
(function () {
    "use strict";
    const customStyle = document.createElement("style");
 
    customStyle.textContent = `
form.section.InlineModForm {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 8px;
}
 
.marketItemCard {
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
  border-radius: 12px;
  background-color: #111615;
 
  box-shadow:
    inset 1px 0 0 var(--primaryDark),
    inset -1px 0 0 var(--primaryDark);
 
  transition: all 0.1s ease-in-out;
}
 
.marketItemCard .mainBlock {
  margin-bottom: auto;
}
 
.marketItemCard .footerBlock {
  border: 1px solid #1e2725;
  background-color: #181e1c;
  border-radius: 0 0 10px 10px;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
 
  margin-top: auto;
}
 
.similarBlock .similarContainer {
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
 
.similarBlock .similarContainer .similar-item {
  margin: 0;
  padding: 12px 16px;
  background: #111615;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
 
 
@media (max-width: 1024px) {
  form.section.InlineModForm, .similarBlock .similarContainer {
    padding-inline: 1rem;
    padding-right: env(safe-area-inset-right);
  }
}
 
@media (max-width: 1024px) and (pointer: coarse){
  form.section.InlineModForm, .similarBlock .similarContainer {
    padding-inline: 1rem;
  }
 
}
`;
 
    document.head.appendChild(customStyle);
})();
