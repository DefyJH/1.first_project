document.querySelector('.sdoor2').addEventListener(
    'click', ()=>{
        location.href='../welcome0/welcome.html'
    }
)
document.querySelector('.cordinator').addEventListener(
    'click', ()=>{
        location.href='../codinator0/codinator.html'
    }
)
document.querySelector('.custom').addEventListener(
    'click',()=>{
        location.href='./custom.html'
    }
)
document.querySelector('.oversea').addEventListener(
    'click', ()=>{
        location.href='../oversea0/oversea.html'
    }
)
document.querySelector('.buy').addEventListener(
    'click', ()=>{
        location.href='../buy0/buy.html'
    }
)
document.querySelector('.sell').addEventListener(
    'click', ()=>{
        location.href='../sell0/sell.html'
    }
)
function displayFileName() {
    var fileName = document.getElementById('file').files[0].name;
    
    document.querySelector('.file_name').value = fileName;
}
function validateForm() {
    var cstChecked = document.querySelector('input[name="cst"]:checked');
    var cst2Checked = document.querySelector('input[name="cst2"]:checked');
    if (!cstChecked || !cst2Checked) {
        alert('커스텀을 하고자 하는 물품의 종류와 소재를 선택하세요.');
        return false;
    }
    var email = document.querySelector('input[type="email"]').value;
    if (email.trim() === '') {
        alert('도안을 받기 위한 이메일 주소를 입력하세요.');
        return false;
    }
    return true;
}
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
    window.open("../popup0/popup01.html","_blank",
    "width=500,height=600");