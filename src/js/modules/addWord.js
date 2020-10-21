import {
    postData
} from '../services/requests';

const addWord = () => {
    const forms = document.querySelectorAll('.add-word');

    forms.forEach(form => {
        submitData(form);
    });

    function submitData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/dictionary', json)
                .then(res => {
                })
                .catch(() => {
                    console.log("error");
                })
                .finally(() => {
                });
        });
    }
};

export default addWord;