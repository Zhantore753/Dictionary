import table from './modules/table';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    table('tbody');
    modal('.add-word', '.modal-add');
});