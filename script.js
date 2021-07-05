// ==UserScript==
// @name        Sketchful Skribbl Skin
// @match        *://sketchful.io/*
// @grant        none
// ==/UserScript==

const background = document.querySelector('html');
background.style.backgroundImage = 'url(https://skribbl.io/res/background.png)';

const menuLogo = document.querySelector('#menuLogo');
menuLogo.style.backgroundImage = 'url(https://skribbl.io/res/logo.gif)';

const gameLogo = document.querySelectorAll('img.gameLogo');
gameLogo.forEach(logo => {
  logo.dataset.src = 'https://skribbl.io/res/logo.gif';
})
