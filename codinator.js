document.querySelector('.sdoor2').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/welcome.html'
    }
)
document.querySelector('.custom').addEventListener(
    'click',()=>{
        location.href='http://127.0.0.1:5500/1.first_project/custom.html'
    }
)
document.querySelector('.cordinator').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/codinator.html'
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
    var price = document.querySelector('input[name="price"]').value;
    var location = document.querySelector('input[name="location"]').value;
    var lordChecked = document.querySelector('input[name="lord"]:checked');
    var lord2Checked = document.querySelector('input[name="lord2"]:checked');

    if (price.trim() === '' || location.trim() === '' || !lordChecked || !lord2Checked) {
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