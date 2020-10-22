import {
    table
} from './modules/table';
import modal from './modules/modal';
import addWord from './modules/addWord';

window.addEventListener('DOMContentLoaded', () => {
    table('tbody');
    modal('.add-word', '.modal-add');
    addWord();
});