

window.addEventListener('load', function() {
    this.document.body.classList.remove('fade');    
});
//window.addEventListener('unload', function() {});
window.addEventListener('pageshow', function() {
    if (this.document.body.classList.contains('fade')) {
        this.document.body.classList.remove('fade');    
    }
    if (this.document.body.classList.contains('menu-open')) {
        this.document.body.classList.remove('menu-open');
    }
});