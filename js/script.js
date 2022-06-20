let advice_id = document.querySelector('.advice-card__number');
let advice_text = document.querySelector('.advice-card__advice');
let dice_btn = document.querySelector('.img-dice')
const adviceURL = "https://api.adviceslip.com/advice";

dice_btn.addEventListener('click', (e) => {
    e.preventDefault();
    loadAdvice();
});


async function loadAdvice() {

    //Firefox failed to fetch new requests though Chrome & Edge work fine. So found this hack on stack overflow that adds a dummy character that changes on every query call which fixes issue on Firefox

    //you can get more info on bbarker's answer here https://stackoverflow.com/questions/29246444/fetch-how-do-you-make-a-non-cached-request 

    let ms = Date.now();
    const response = await fetch(adviceURL + "?dummy=" + ms);
    const adviceObject = await response.json();
    advice_id.innerHTML = "Advice #" + adviceObject.slip.id;
    advice_text.innerHTML = '"' + adviceObject.slip.advice + '"';
    console.log(adviceObject);
}

loadAdvice();