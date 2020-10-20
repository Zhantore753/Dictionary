const modal = (trigger, modal) => {
    try {
        const btn = document.querySelector(trigger),
            thisModal = document.querySelector(modal);
        btn.addEventListener('click', (e) => {
            // e.preventDefault();
            thisModal.classList.add('show');
            thisModal.style.display = 'block';
        });
        thisModal.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                thisModal.classList.remove('show');
                thisModal.style.display = 'none';
            });
        });
    } catch (e) {}
};

export default modal;