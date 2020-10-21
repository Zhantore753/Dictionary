import {
    getResource
} from '../services/requests';

const table = (wrapper) => {
    try {
        let allSum,
            arr = [];
        getResource('http://localhost:3000/dictionary')
            .then(res => createCards(res))
            .catch(error => console.log(error));

        function createCards(response) {
            response.forEach(({
                en,
                ru,
                id
            }) => {
                let object = {
                    'id': id,
                    'en': en,
                    'ru': ru
                };
                arr.push(object);
            });
            document.querySelector('.total').textContent = `Количество слов: ${arr.length}`
            arr.forEach(obj=>{
                updateTable(obj);
            });
        }
        function updateTable(obj){
            let row = document.createElement('tr');

            row.innerHTML = `
                <th scope="row">${obj.id}</th>
                <td>${obj.en}</td>
                <td>${obj.ru}</td>
                <td><a target="_blank" href="https://translate.google.com/?hl=ru#view=home&op=translate&sl=en&tl=ru&text=${obj.en}">Google</a></td>
                <td><a target="_blank" href="https://translate.yandex.kz/?ui=ru&lang=en-ru&text=${obj.en}">Яндекс</a></td>
            `;

            document.querySelector(wrapper).appendChild(row);
        }
    } catch (e) {}
};

export default table;