const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/*{
    //Bài toán tính tổng tự động 2 số
    let num1 = $('.number_a');
    let num2 = $('.number_b');
    let result = $('.result');
    let tinhTong = () => {
        let sum = Number(num1.value) + Number(num2.value);
        if(isNaN(sum)){
            result.innerHTML = `
            Kết quả :  Không xác định
            `;
            alert("Giá trị nhập vào không đúng")
        } else {
            result.innerHTML = `
            Kết quả :  ${sum}
            `;
        }
    }
    num1.onkeyup = tinhTong;
    num2.onkeyup = tinhTong;

}*/

{
    //window
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(width, height); 
    
    let btn = $('.btn');
    btn.onclick = () => {
        window.open('http://gamek.vn', "Xin chào các bạn", "width = 500px, height = 500px")
    }
}

