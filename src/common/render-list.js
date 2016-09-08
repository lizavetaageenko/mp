export default function renderList(list, title, className, target) {
    const container = document.createElement('div');
    const titleEl = document.createElement('h2');
    const listEl = document.createElement('ul');

    target.appendChild(container);

    container.appendChild(titleEl);
    container.appendChild(listEl);

    container.classList.add(className);
    container.classList.add('list');

    titleEl.innerHTML = title;

    list.forEach((heroName) => {
        const heroListItem = document.createElement('li');

        listEl.appendChild(heroListItem);

        heroListItem.innerHTML = heroName;
    });
}
