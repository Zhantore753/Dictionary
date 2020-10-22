import {
    postData
} from '../services/requests';
import {
    firstArr
} from './table';

const addWord = () => {
    const enWord = document.querySelector('[name="en"]'),
        ruWord = document.querySelector('[name="ru"]'),
        wrap = document.querySelector('.modal-wrap');
    let available = true;
    const forms = document.querySelectorAll('.add-word');

    forms.forEach(form => {
        submitData(form);
    });

    function submitData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            firstArr.forEach(obj=>{
                console.log(obj)
                if(enWord.value.toLowerCase() == obj.en.toLowerCase()){
                    available = false;
                }
            });

            const result = document.createElement('h4');
            result.classList.add('text-center');
            
            if(available){
                const formData = new FormData(form);
                const json = JSON.stringify(Object.fromEntries(formData.entries()));
                postData('http://localhost:3000/dictionary', json)
                    .then(res => {
                        result.textContent = 'Слово добавлено!';
                        result.style.color = 'green';
                    })
                    .catch(() => {
                        result.textContent = 'Упсс, проблемы с сервером!';
                        result.style.color = 'red';
                    })
                    .finally(() => {
                        wrap.appendChild(result);
                    });
            } else{
                result.textContent = 'Упсс, кажется такое слово уже есть...';
                result.style.color = 'red';
                wrap.appendChild(result);
            }
            setTimeout(()=>{
                result.remove();
            }, 2000);
        });
    }
};

export default addWord;