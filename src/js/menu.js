import menuTemplate from '../templates/menu-list.hbs';
// console.log(menuTemplate);
import cards from '../menu.json';

const cardsMarkup = createCardsListMarkup(cards);
const menulistRef = document.querySelector('.js-menu');

menulistRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsListMarkup(cards) {
    //  return cards.map(card=>menuTemplate(card)).join('');
    return cards.map(menuTemplate).join('');
}

