document.querySelector('.sdoor2').addEventListener(
    'click', ()=>{
        location.href='http://127.0.0.1:5500/1.first_project/main.html'
    }
)
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        var priceRange = document.querySelector('input[name="price"]').value;
        var location = document.querySelector('input[name="location"]').value;

        if (priceRange.trim() == '' || location.trim() == '') {
            alert('원하는 코디 가격대와 사시는 지역을 입력하세요.');
            event.preventDefault();
        }
    });
});
function displayFileName() {
    var fileName = document.getElementById('file').files[0].name;
    
    document.querySelector('.file_name').value = fileName;
}
