document.querySelector('.musinsa').addEventListener(
    'click',()=>{
        location.href='https://www.musinsa.com/'
    }
)
document.querySelector('.kream').addEventListener(
    'click', ()=>{
        location.href='https://kream.co.kr/'
    }
)
document.querySelector('.balaan').addEventListener(
    'click', ()=>{
        location.href='https://www.balaan.co.kr/shop/main/index.php'
    }
)
document.querySelector('.thunder').addEventListener(
    'click', ()=>{
        location.href='https://m.bunjang.co.kr/'
    }
)
document.querySelector('.naver').addEventListener(
    'click', ()=>{
        location.href='https://web.joongna.com/'
    }
)
document.querySelector('.arena').addEventListener(
    'click', ()=>{
        location.href='https://www.arenakorea.com/arena'
    }
)
document.querySelector('.GQ').addEventListener(
    'click', ()=>{
        location.href='https://www.gqkorea.co.kr/'
    }
)
document.querySelector('.esq').addEventListener(
    'click', ()=>{
        location.href='https://www.esquirekorea.co.kr/'
    }
)
document.querySelector('.maxim').addEventListener(
    'click', ()=>{
        location.href='https://www.maximkorea.net/'
    }
)
document.querySelector('.GQs').addEventListener(
    'click', ()=>{
        location.href='https://www.gqkorea.co.kr/style/'
    }
)
document.querySelector('.codinator').addEventListener(
    'click', ()=>{
        location.href='../codinator0/codinator.html'
    }
)
document.querySelector('.sdoor2').addEventListener(
    'click', ()=>{
        location.href='../welcome0/welcome.html'
    }
)
document.querySelector('.sell').addEventListener(
    'click', ()=>{
        location.href='../sell0/sell.html'
    }
)
document.querySelector('.custom').addEventListener(
    'click', ()=>{
        location.href='../custom0/custom.html'
    }
)
document.querySelector('.buy').addEventListener(
    'click', ()=>{
        location.href='../buy0/buy.html'
    }
)
document.querySelector('.oversea').addEventListener(
    'click', ()=>{
        location.href='../oversea0/oversea.html'
    }
)
document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.querySelector(".login-link");
    var loginPopup = document.getElementById("login-popup");
    loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    openLoginPopup();
    });
    function openLoginPopup() {
    loginPopup.style.display = "block";
    }
    });