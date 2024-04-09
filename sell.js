document.querySelector('.sdoor2').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/welcome.html'
    }
)
document.querySelector('.cordinator').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/codinator.html'
    }
)
document.querySelector('.custom').addEventListener(
    'click',()=>{
        location.href='http://127.0.0.1:5500/1.first_project/custom.html'
    }
)
document.querySelector('.oversea').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/oversea.html'
    }
)
document.querySelector('.buy').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/buy.html'
    }
)
document.querySelector('.sell').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/sell.html'
    }
)
function displayFileName() {
    var fileName = document.getElementById('file').files[0].name;
    
    document.querySelector('.file_name').value = fileName;
}
function validateForm() {
    var tex1 = document.querySelector('input[name="tex1"]').value;
    var tex2 = document.querySelector('input[name="tex2"]').value;
    var tex3 = document.querySelector('input[name="tex3"]').value;
    var tex4 = document.querySelector('input[name="tex4"]').value;
    var sangtChecked = document.querySelector('input[name="sangt"]:checked');

    if (tex1.trim() === '' || tex2.trim() === '' || tex3.trim() === '' || !sangtChecked) {
        alert('모든 항목을 입력해주세요.');
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