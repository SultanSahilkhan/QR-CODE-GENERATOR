// const btnEle=document.querySelector(".btn");
// const imgEle = document.getElementById("qr-img");
// const boxEle = document.getElementById("img-box");
// const inputEle = document.getElementById("qr-text");
// btnEle.addEventListener("click",()=>{
//     if(inputEle.value.length>0){
//         imgEle.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEle.value} '
//     boxEle.classList.add("show-img")

//     }
  
    
// });

const btnEle = document.querySelector(".btn");
const imgEle = document.getElementById("qr-img");
const boxEle = document.getElementById("img-box");
const inputEle = document.getElementById("qr-text");

btnEle.addEventListener("click", () => {
    if (inputEle.value.trim().length > 0) {
        imgEle.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputEle.value)}`;
        boxEle.classList.add("show-img");
    } 
});

// // Hide QR code when input is cleared
// inputEle.addEventListener("input", () => {
//     if (inputEle.value.trim().length === 0) {
//         imgEle.src = "";
//         boxEle.classList.remove("show-img");
//     }
// });

inputEle.addEventListener("input", () => {
    if (inputEle.value.trim().length === 0) {
        boxEle.classList.remove("show-img"); // Smoothly collapse
        setTimeout(() => {
            imgEle.src = ""; // Remove QR code after transition
        }, 500); // Match CSS transition time
    }
});



