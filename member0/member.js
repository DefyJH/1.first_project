const elZonecode = document.querySelector("#zonecode");
const elRoadAddress = document.querySelector("#roadAddress");
const elRoadAddressDetail = document.querySelector("#roadAddressDetail");
const elResults = document.querySelectorAll(".el_result");
const onClickSearch = () => {
    console.log(1);
    new daum.Postcode({
        oncomplete: function (data) {
        console.log(data);
        elZonecode.setAttribute("value", data.zonecode);
        elRoadAddress.setAttribute("value", data.address);
        },
        }).open();
};
const register = () => {
    console.log(`우편번호: ${elZonecode.getAttribute("value")}`);
    console.log(`주소: ${elRoadAddress.getAttribute("value")}`);
    console.log(`상세주소: ${elRoadAddressDetail.getAttribute("value")}`);
    elResults[0].innerHTML = elZonecode.getAttribute("value");
    elResults[1].innerHTML = elRoadAddress.getAttribute("value");
    elResults[2].innerHTML = elRoadAddressDetail.getAttribute("value");
};
    document.querySelector("#search-btn").addEventListener("click", () => {
    onClickSearch();
    });
    document.querySelector("#register-btn").addEventListener("click", () => {
    register();
    });
    elRoadAddressDetail.addEventListener("change", (e) => {
    elRoadAddressDetail.setAttribute("value", e.target.value);
    });


function checkForm() {
    var form = document.getElementById("myform");
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            alert("빈칸을 채워주세요.");
            return false;
        }
    }
    return true;
}
document.getElementById("submit-btn").addEventListener('click', function(event) {
    if (!checkForm()) {
        event.preventDefault();
    }
});
document.getElementById("submit-btn").addEventListener('click', () => {
    var formData = new FormData(document.getElementById("myform"));
    var data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
    document.getElementById("myform").submit();
});