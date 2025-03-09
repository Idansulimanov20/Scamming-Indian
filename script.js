const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const email = params.get('email');
const credit_card = params.get('card id');



let name_p = document.querySelector('#name');
name_p.textContent = ("Thank you for your donation : " + name);
let credit = document.querySelector('#credit');
credit.textContent = ("Charged from credit card number : " + credit_card);
let Email = document.querySelector('#email');
Email.textContent = ("The receipt was sent to the received email address : " + email)


