# Frontend Mentor - Advice generator app

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


### Links

- Live Site URL: [Live Demo](#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox


### What I learned

- Javascript async await

```js
const adviceURL = "https://api.adviceslip.com/advice";
dice_btn.addEventListener('click', loadAdvice);

async function loadAdvice() {
    const response = await fetch(adviceURL);
    const adviceObject = await response.json();
    advice_id.innerHTML = "Advice #" + adviceObject.slip.id;
    advice_text.innerHTML = '"' + adviceObject.slip.advice + '"';
    console.log(adviceObject);
}

loadAdvice();

```


## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@iyoha_osaro](https://www.twitter.com/yourusername)

**Really had fun building!** 🚀