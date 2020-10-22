import {
    table
} from './modules/table';
import modal from './modules/modal';
import addWord from './modules/addWord';
import test from './modules/test';

window.addEventListener('DOMContentLoaded', () => {
    table('tbody');
    modal('.add-word', '.modal-add');
    modal('.test-btn', '.modal-test');
    test();
    addWord();
});