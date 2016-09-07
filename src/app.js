import simpsons from './one-more.js';

const body = document.getElementsByTagName('body')[0];

const list = document.createElement('ul');

body.appendChild(list);

simpsons.forEach((heroName) => {
    const heroListItem = document.createElement('li');

    list.appendChild(heroListItem);

    heroListItem.innerHTML = heroName;
});
