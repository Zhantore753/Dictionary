import {
    getResource
} from '../services/requests';

const table = (wrapper) => {
    try {
        getResource('http://localhost:3000/dictionary')
            .then(res => createCards(res))
            .catch(error => console.log(error));

        function createCards(response) {
            response.forEach(({
                en,
                ru,
                id
            }) => {
                let row = document.createElement('tr');

                row.innerHTML = `
                    <th scope="row">${id}</th>
                    <td>${en}</td>
                    <td>${ru}</td>
                    <td><a target="_blank" href="https://translate.google.com/?hl=ru#view=home&op=translate&sl=en&tl=ru&text=${en}">Google</a></td>
                    <td><a target="_blank" href="https://translate.yandex.kz/?ui=ru&lang=en-ru&text=${en}">Яндекс</a></td>
            `;

                document.querySelector(wrapper).appendChild(row);
            });
        }
    } catch (e) {}
};

export default table;