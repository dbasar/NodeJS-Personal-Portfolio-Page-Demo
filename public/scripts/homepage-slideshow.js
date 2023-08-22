// ANASAYFADA GEÇİŞ YAPAN RESİMLER İÇİN


// Asıl kutu content elemanı. Her bir resim, kutunun içinde absolute pozisyonunda yerleşik, yukarı kayan css animasyon hareketine sahip birer arkaplan resmine sahip küçük divler. Kayma işlemi için küçük div kutularının yüksekliği, content kutusundan biraz daha büyük. (Kutular orjinal pozisyonundayken kutuların tabanı content kutusunun tabanına değiyor, kayma sırasında yukarıda kalan ve görünmeyen kısım aşağıya iniyor.) Content kutusunda overflow: hidden; var. 

// Her bir yeni kutunun animasyonu 10 sn sürüyor. Sayfa yüklendikten sonra her 8 sn de bir, mevcut active class lı kutuyua ending classı ekleniyor (böylece z-index i düşürülüyor), bir sonraki kutuya active classı ekleniyor (z-index i daha büyük). Yeni active class lı kutunun opacity si yavaşça 0 dan 1 e 2 sn de çıkıyor. Eski .active.ending kutunun animasyonu devam ediyor (animasyon .active de tanımlı). 2 sn nin sonunda eski kutudan active ve ending classları siliniyor ve onun standart, animasyon yapmayan en küçük z indeksli ve opacity si 0 olan diğer kutulardan olması sağlanıyor. bu işlem 8 + 2 = 10 sn de tamamlanıyor. 


//const heroHeader = document.getElementById('hero-header');
const heroLink = document.getElementById('hero-link');
let newImgIndex, oldImgIndex;


function imageChange() {
    const imgNodes = document.querySelectorAll('.image-div');

    if (typeof oldImgIndex === 'undefined') {
        oldImgIndex = 0;
        imgNodes[0].classList.add('active');
        imgNodes[0].removeAttribute('style');
        assignLink(0);

    } else {
        heroLink.classList.add('fade');

        oldImgIndex = Array.from(imgNodes)
                           .indexOf(document.querySelector('.image-div.active'));

        imgNodes[oldImgIndex].classList.add('ending');

        if (oldImgIndex === 3) {
            newImgIndex = 0;
        } else {
            newImgIndex = oldImgIndex + 1;
        }

        imgNodes[newImgIndex].classList.add('active');

        window.setTimeout(function() {
            imgNodes[oldImgIndex].classList.remove('ending', 'active');
        }, 2000);   
        assignLink(newImgIndex);
    }

    window.setTimeout(imageChange, 8000);
}

function assignLink(imgIndex) {
    window.setTimeout(function() {
        const heroLinkSpan = heroLink.firstElementChild.firstElementChild;
        heroLink.classList.remove('fade');

        if (imgIndex === 0 || imgIndex === 2) {
            heroLink.firstElementChild.setAttribute('href', '/industrial-design');
            heroLinkSpan.textContent = heroLinkSpan.getAttribute('data-industrial');                       
        } else {
            heroLink.firstElementChild.setAttribute('href', '/furniture');
            heroLinkSpan.textContent = heroLinkSpan.getAttribute('data-furniture');
        }    
    }, 1000)
}


window.addEventListener('load', imageChange);

