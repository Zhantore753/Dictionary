import {
    getResource
} from '../services/requests';

let firstArr = [];
const table = (wrapper) => {
        let searchArr = [],
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
                firstArr.push(object);
            });
            document.querySelector('.total').textContent = `Количество слов: ${arr.length}`
            document.querySelector(wrapper).innerHTML = '';
            arr.forEach(obj=>{
                updateTable(obj);
            });
        }

        document.querySelector('.btn-search')
        .addEventListener('click', (e)=>{
            e.preventDefault();
            let input = document.querySelector('.search'),
                length = input.value.length,
                value = input.value.toLowerCase();
            for(let i = 0; i < arr.length; i++){
                let calcEnSlice = arr[i].en.length - length,
                    calcRuSlice = arr[i].ru.length - length,
                    checker = false;
                    if(calcEnSlice >= 0){
                        let en = arr[i].en;
                        if(calcEnSlice !== 0){
                            en = arr[i].en.slice(0, -calcEnSlice);
                        }
                        if(en.toLowerCase() == value){
                            checker = checker || true;
                        } else{
                            checker = checker || false;
                        }
                        console.log(checker);
                    }
                    if(calcRuSlice >= 0){
                        let ru = arr[i].ru;
                        if(calcRuSlice !== 0){
                            ru = arr[i].ru.slice(0, -calcRuSlice);
                        }
                        if(ru.toLowerCase() == value){
                            checker = checker || true;
                        } else{
                            checker = checker || false;
                        }
                        console.log(checker);
                    }
                    if(checker){
                        searchArr.push(arr[i]);
                    }
            };
            document.querySelector('.total').textContent = `Количество слов: ${searchArr.length}`
            document.querySelector(wrapper).innerHTML = '';
            searchArr.forEach(obj=>{
                updateTable(obj);
            });
            console.log(arr);
            console.log(searchArr)
            console.log(input.value.length);
        });

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
};

export {
    table
};
export {
    firstArr
};