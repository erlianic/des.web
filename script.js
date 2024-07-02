document.getElementById('readMoreBtn').addEventListener('click', function() {
    var moreContent = document.getElementById('moreContent');
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        this.textContent = 'Ler Menos';
    } else {
        moreContent.classList.add('hidden');
        this.textContent = 'Ler Mais';
    }
});
