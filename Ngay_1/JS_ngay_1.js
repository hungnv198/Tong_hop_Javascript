// getbutton-element
/*{
    let clickMeBtn = document.getElementById('clickme');
    clickMeBtn.addEventListener('click', function(){
        alert("Hello World!")
    })
}*/
//Dùng hàm prompt:
/*{
    let clickMeBtn = document.querySelector('#clickme');
    clickMeBtn.onclick = function(){
        var name = prompt("Nhập tên của bạn");
        console.log(name);
    }
}*/
//Tạo hàm check số lẻ
/*{
    function checkPriority(value) {
        if(!(value % 2 == 0)){
            console.log(value, 'là số lẻ');
        } else {
            console.log(value, 'là số chẵn');
        }
    }
    checkPriority(6);
}*/
/*{
    function myName(value){
        console.log(value || "Tên tôi là Computer");
    }
    // Gọi không truyền tham số
    myName();
    // Gọi có truyền tham số
    myName("Tên tôi là Nguyễn Văn Hùng");
}*/
//Arrow function: 
/*{
    let myNumber = (value) => {
        if(value % 3 == 0){
            alert(`${value} là số chia hết cho 3`);
        } else {
            alert(`${value} là số không chia hết cho 3`);

        }
    }
    // myNumber(10);
    let myYear = (value) => {
        if(value % 400 == 0) {
            // console.log(`${value} là năm nhuận`);
            return true;
        } else if(value % 4 == 0){
            // console.log(`${value} là năm nhuận`);
            return true;
        } else {
            // console.log(`${value} không là năm nhuận`);
            return false;
        }
    }
    // myYear(3020);
    // myYear(2001);
    // myYear(200);
    let result = myYear(100);
    if(result){
        console.log(`là năm nhuận`);
    } else {
        console.log(` không là năm nhuận`);
    }

}*/
//Biến toàn cục và biến cục bộ
/*{   
    var myAge = 20;
    var myName = (value) => {
        var myAge = 10;
        console.log(`${value} hiện nay ${myAge} tuổi`);
    }
    // alert(myAge);// Lỗi
    myName("Nguyễn Văn Hùng");
    alert('Tuổi của tôi'+ myAge);
}*/
// setTimeout và clearTimeout
/*{
    var show = setTimeout(function() {
        alert("Xin chào các bạn");
    }, 3000);
    var printMessage = setInterval(function() {
        console.log("Hihi");
        clearInterval(printMessage);
    }, 3000);
}*/
//----------------------------------------------------------------
//Bài 1: Kiểm tra số nguyên dương trong JavaScript
//Dùng hàm isInterger để kiểm tra số nhập vào có là số nguyên hay không.
/*{
    let laSoNguyenDuong = (value) =>{
        // Kiểm tra số nguyên
        var myNumber = Number.isInteger(value);
        if(myNumber && value > 0){
            console.log(`${value} là số nguyên dương`);
        } else {
            console.log(`${value} không phải là số nguyên dương`)
        }
    }

    laSoNguyenDuong(3.2);
    let soNguyenDuong = (value) => {
        if(typeof value === 'number'){
            if(value > 0 && value % 1 == 0){
                console.log(`${value} là số nguyên dương`);
            } else{
                console.log(`${value} không phải là số nguyên dương`)
            }
        } else {
            console.log(`${value} không phải là số nguyên dương`)
        }
    }
    soNguyenDuong(111)// sai do định dạng chuỗi
    //------------------------------
    let laSoNguyenAm = (value) =>{
        // Kiểm tra số nguyên
        var myNumber = Number.isInteger(value);
        if(myNumber && value < 0){
            console.log(`${value} là số nguyên âm`);
        } else {
            console.log(`${value} không phải là số nguyên âm`)
        }
    }

    laSoNguyenAm(-3.2);
    let soNguyenAm = (value) => {
        if(typeof value === 'number'){
            if(value < 0 && value % 1 == 0){
                console.log(`${value} là số nguyên âm`);
            } else{
                console.log(`${value} không phải là số nguyên âm`)
            }
        } else {
            console.log(`${value} không phải là số nguyên âm`)
        }
    }
    soNguyenAm(-111)// sai do định dạng chuỗi
}*/

//--------------------------------------------------------------------------------------------------------------------
//Tính tổng 2 số bằng JS
/*{   //Đơn giản
    // let sum = (a, b) => a + b;
    // console.log(sum(10, 2));
    //Kiểm tra 2 số trước khi tính tổng
    let btn = document.querySelector('.btn');
    btn.onclick = () => {
        let num1 = document.querySelector('.number_1').value;//Kết quả trả về là kiểu String
        let num2 = document.querySelector('.number_2').value;//Kết quả trả về là kiểu String
        if(num1 == '' || num2 == ''){
            alert('Vui lòng nhập giá trị')
            return;
        } else {
            if(isNaN(num1) || isNaN(num2)){
                alert("Vui lòng nhập lại giá trị")
            } else {
                // Ép kiểu giá trị
                num1 = Number(num1);
                num2 = Number(num2);
                let sum = num1 + num2;
                document.querySelector('.resultSum').innerHTML = `Kết quả ${sum}`
            }
        }
    }
}*/
//---------------------------------------------------------
/*{
    // Tính tổng các phần tử trong một mảng
    const arr_1 = [1, 2, 3, 6, 10, 12];
    // Dùng vòng lặp for:
    let sumWithFor = (array) => {
        let sumFor = 0;
        for(var i = 0; i < array.length; i++){
            sumFor = sumFor + array[i];
        }
        return sumFor;
    }
    console.log(sumWithFor(arr_1));
    // Dùng forEach của mảng:
    let sumForEach = (array) => {
        let sumForEach = 0;
        array.forEach(function(item){
            sumForEach = sumForEach + item
        })
        return sumForEach;
    }
    console.log(sumForEach(arr_1));
    // Dùng hàm map của mảng
    let sumMap = (array) => {
        let sumMap = 0;
        array.map(function(item) {
            return sumMap += item;
        })
        return sumMap;
    }
    console.log(sumMap(arr_1))
    // Dùng hàm reduce
    let sumReduce = (array) => {
        let sumReduce = array.reduce(function(total, currenValue){
            return total = total + currenValue;
        }, 0)
        return sumReduce;
    }
    console.log(sumReduce(arr_1));
}*/
//--------------------------------------------------------------------------------------
/*{
    //Giải phương trình bậc 1 bằng JavaScript: ax + b = 0
    let btnSubmit = document.querySelector('.btn');

    btnSubmit.onclick = () => {
        let aNumber = document.querySelector('.number_a').value;
        let bNumber = document.querySelector('.number_b').value;
        if(aNumber == ''||bNumber == ''){
            alert("Vui lòng nhập giá trị");
            return false;
        } else {
            if(isNaN(aNumber) || isNaN(bNumber)){
                alert("Giá trị nhập vào chưa đúng")
            } else {
                aNumber = Number(aNumber);
                bNumber = Number(bNumber);
                const result = (giaiptbac1(aNumber, bNumber))

                document.querySelector('.result').innerHTML = `
                    Phương trình bậc nhất:  ${aNumber}x + ${bNumber}  = 0 có kết quả là: ${result};
                    `;
            }
        }
    }
    const giaiptbac1 = (a, b) => {
        if(a === 0){
            if(b===0){
                return "Phương trình có vô số nghiệm";
            } else {
                return "Phương trình vô nghiệm";
            }
        } else {
            return -b/a;
        }
    }
    
}*/
//----------------------------------------------------------------
/*{
    //Kiểm tra một số nhập vào là số nguyên tố
    let btnSoNguyenTo = document.querySelector('.btn');
    btnSoNguyenTo.onclick = () => {
        let number = document.querySelector('.number').value;
        if(number == '') {
            alert("Vui lòng nhập một số");
        } else if(isNaN(number)) {
            alert("Giá trị nhập vào chưa chính xác!")
        } else {
            number = Number(number);
            const result = testValue(number);
            document.querySelector('.result').innerHTML = result;
        }
    }
    const testValue = (value) => {
        let test = Number.isInteger(value);
        if(!test) {
            return `${value} không phải là số nguyên tố`
        } else {
            if(value < 2) {
                return `${value} không phải là số nguyên tố`
            } else if(value == 2) {
                return `${value} là số nguyên tố`
            }else{
                for(var i=2; i< value; i++){
                    if(value % i == 0){
                        console.log(i);
                        return `${value} không phải là số nguyên tố`
                    } 
                }
                return `${value} là số nguyên tố`
            }
        }
    }
}*/
//------------------------------------------------------------------------------------------------------------
{
    //Bài tập vòng lặp for trong JavaScript
    /*{
        //Bài 1: In ra các số từ 1 đến giá trị ô input
        let btn_1 = document.querySelector('.btn_1');
        btn_1.onclick = () => {
            let value_1 = document.querySelector('.number_1').value;
            if(value_1 == ''){
                alert("Vui lòng nhập vào một số");
            } else if(isNaN(value_1)){
                alert("Giá trị nhập vào không hợp lệ");
            } else {
                const result_1 = handleValue_1(value_1);
                console.log(result_1)
                document.querySelector('.result_1').innerHTML = `Kết quả: ${result_1}`
            }
        }
        let handleValue_1 = (value) => {
            value = Number(value);
            if(value <1){
                return "Giá trị nhập vào không hợp lệ";
            } else {
                let str ='';
                for(var i = 1; i <= value; i++){
                    str += String(i) +' ' ;
                }
                return str;
            }
        }
    }*/

    /*{
        //Bài2: in ra các số nguyên tố từ 1 đến giá trị ô input
        let btn_2 = document.querySelector('.btn_2');
        btn_2.onclick = () => {
            let value_2 = document.querySelector('.number_2').value;
            if(value_2 == ''){
                alert("Vui lòng nhập vào một số");
            } else if(isNaN(value_2)){
                alert("Giá trị nhập vào không hợp lệ");
            } else {
                const result_2 = handleValue_2(value_2);
                document.querySelector('.result_2').innerHTML = `Kết quả: ${result_2}`
            }
        }
        let handleValue_2 = (value) => {
            value = Number(value);
            if(value <2){
                return "Giá trị nhập vào không hợp lệ";
            } else {
                let str ='';
                for(var i = 1; i <= value; i++){
                    let j = primeNumber(i);
                    str += String(j) +' ' ;
                }
                return str;
            }
        }
        let primeNumber = (value) => {
            if(value < 2) {
                return '';
            } else {
                for(var i = 2; i < value; i++) {
                    if(value % i == 0) {
                        return '';
                    }
                }
                return value;
            }
            
        }
        
    }*/

    /*{
        //Bài 3: Đổi màu thẻ div theo vị trí
        let btnElement = document.querySelector('.btn');
        btnElement.onclick = () => {
            let divsElement = document.querySelectorAll('.element');
            divsElement = Array.from(divsElement);
            divsElement.forEach(function(currenValue, index){
                if(index % 2 == 0){
                    currenValue.classList.add('even');
                } else {
                    currenValue.classList.add('odd');
                }
            })
        }
    }*/
}

//--------------------------------------------------------------------------------------
{
    //Vòng lặp while trong JS
    /*{
       let btnWhile = document.querySelector('.btn');
       btnWhile.onclick = () => {
        let valueInput = document.querySelector('.number_1').value;
        if(valueInput == ''){
            alert('Vui lòng nhập số bất kì')
        } else {
            if(isNaN(valueInput)){
                alert("Giá trị nhập vào không hợp lệ!")
            } else {
                valueInput = Number(valueInput);
                let sum = sumWithWhile(valueInput);
                document.querySelector('.result').innerHTML = `Kết quả: ${sum}`
            }
        }
       }

       const sumWithWhile = (value) => {
        let sum = 0;
        let i = 0;
        while(i <= value){
            if(i % 2 == 0){
                sum = sum + i;
            }
            i++;
        }
        return sum;
       }
    }*/

    /*{
        //Bài 2: Xóa div dùng while
        function deleteElement (){
            let divsElement = document.querySelectorAll('.box div');
            divsElement = Array.from(divsElement);
            let index = 0;
            while ( index < divsElement.length ){
                if(index % 2 == 0){
                    divsElement[index].remove();
                }
                index ++;
            }
        }
    }*/
}

//-----------------------------------------------------------------------------------------------
/*{
    let btnElement = document.querySelector('.btn');
    btnElement.onclick = () => {
        let value = document.querySelector('.num').value;
        if(value == ''){
            alert("Vui lòng nhập vào một số")
        } else {
            if(isNaN(value) || value == 0){
                alert("Giá trị nhập vào chưa chính xác")
            } else {
                value = Number(value)
                let result = resExpression(value);
                document.querySelector('.result').innerHTML = `Kết quả: ${result} `
            }
        }
    }
    let resExpression = (value) => {
        let sum  = 0;
        for(var i = 1; i <= value; i++) {
            sum += (i/value);
        }
        return sum;
    }
}*/
//------------------------------------------------------------------------------
{
    //Validate Email
}