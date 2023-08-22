
topBar.addEventListener('click', function(event) { 
    //event.stopPropagation();
    if (!document.body.classList.contains('menu-open')) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
});
