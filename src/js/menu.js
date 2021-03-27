import refs from './refs.js';

import menuTemplate from '../templates/menu-list.hbs';
// console.log(menuTemplate);
import cards from '../menu.json';

const cardsMarkup = createCardsListMarkup(cards);

refs.menulistRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsListMarkup(cards) {
    //  return cards.map(card=>menuTemplate(card)).join('');
    return cards.map(menuTemplate).join('');
}




// 2 способ(шаблон для всех элементов сразу)
// const cardsMarkup2 = menuTemplate(cards);
// menulistRef.insertAdjacentHTML('beforeend', cardsMarkup2);

