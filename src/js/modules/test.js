import {
    firstArr
} from './table';

const test = () => {
    let words = [];
    const btnStart = document.querySelector('.btn-start'),
        btnNext = document.querySelector('.btn-next'),
        testEn = document.querySelector('.test-en'),
        testRu = document.querySelector('.test-ru'),
        testAmount = document.querySelector('.test-amount'),
        btnCheck = document.querySelector('.btn-check'),
        wrapTest = document.querySelector('.modal-wrap__test');

    let now,
    lang,
    timeout,
    result = document.createElement('h4');
    result.classList.add('text-center');

    btnStart.addEventListener('click', (e)=>{
        e.preventDefault();
        for(let i = 0; i < 20; i++){
            let word = getRandomBetween(0, firstArr.length-1);
            words.push(firstArr[word]);
        }
        btnStart.style.display = 'none';
        btnCheck.style.display = '';
        updateTest();
        lang = getRandomBetween(0, 1);
        now = words.shift();
        updateTest();
        if(lang == 0){
            testEn.value = now.en;
            testEn.setAttribute('readonly', true);
        }else{
            testRu.value = now.ru;
            testRu.setAttribute('readonly', true);
        }
    });

    

    btnNext.addEventListener('click', (e)=>{
        if(words.length == 0){
            result.textContent = 'Тест завершен!';
            result.style.color = 'green';
            timeout = setTimeout(()=>{
                result.remove();
            }, 5000);
            btnStart.style.display = '';
            btnCheck.style.display = 'none';
            btnNext.style.display = 'none';
        } else{
            e.preventDefault();
            btnCheck.style.display = 'block';
            btnNext.style.display = 'none';
            lang = getRandomBetween(0, 1);
            now = words.shift();
            updateTest();
            if(lang == 0){
                testEn.value = now.en;
                testEn.setAttribute('readonly', true);
            }else{
                testRu.value = now.ru;
                testRu.setAttribute('readonly', true);
            }
            if(timeout){
                clearTimeout(timeout);
                result.remove();
            }
        }
    });

    btnCheck.addEventListener('click', (e)=>{
        e.preventDefault();
        let checker = false;
        if(lang == 0){
            if(now.ru.toLowerCase() == testRu.value.toLowerCase()){
                checker = true;
            } else {
                checker = false;
            }
        }else{
            if(now.en.toLowerCase() == testEn.value.toLowerCase()){
                checker = true;
            } else {
                checker = false;
            }
        }

        if(checker == false){
            words.push(now);
            result.textContent = 'Ошибка! Ну как так-то?';
            result.style.color = 'red';
        }else{
            now = '';
            result.textContent = 'Все верно!';
            result.style.color = 'green';
        }
        wrapTest.appendChild(result);
        timeout = setTimeout(()=>{
            result.remove();
        }, 2000);
        btnCheck.style.display = 'none';
        btnNext.style.display = 'block';
    });
    
    function updateTest(){
        testAmount.textContent = `Осталось ${words.length + 1}/20`;
        testEn.value = ''
        testRu.value = '';
        if(testEn.getAttribute('readonly')){
            testEn.removeAttribute('readonly');
        }
        if(testRu.getAttribute('readonly')){
            testRu.removeAttribute('readonly');
        }
    };

    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

export default test;