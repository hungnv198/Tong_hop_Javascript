const $ = document.querySelector.bind(document);
const $S = document.querySelectorAll.bind(document);
/*{
    //Bài tập tìm min max
    let btnCollect = document.querySelector('.btnCollect');
    let btnClear = document.querySelector('.btnClear');
    let arrResult = [];
    let show = (array, maxNum, minNum) => {
        document.querySelector('.result').innerHTML = `
            <span> Dãy số đã nhập: ${array} </span>
            <br>
            <span>Giá trị lớn nhất: ${maxNum}</span>
            <br>
            <span>Giá trị nhỏ nhất: ${minNum}</span>
        `;
    }
    let findMin = (array) => {
        let minNum = array[0];
        for(var i = 1; i < array.length; i++) {
            if(array[i] < minNum){
                minNum = array[i];
            }
        }
        return minNum;
    };
    let finMax = (array) => {
        let maxNum = array[0];
        for(var i = 0; i < array.length; i++) {
            if(array[i] > maxNum){
                maxNum = array[i];
            }
        }
        return maxNum;
    };
    btnCollect.onclick = () => {
        let myNumber = document.querySelector('.num');
        if(myNumber.value == ''){
            alert("Vui lòng nhập vào một số");
        } else {
            let num = myNumber.value.trim();
            num = Number(num);
            if(isNaN(num)){
                alert("Giá trị nhập vào không chính xác!");
            } else {
                arrResult.push(num);
                var minNum = findMin(arrResult);
                var maxNum = finMax(arrResult);
                myNumber.value = '';
            }
        }
        show(arrResult, maxNum, minNum );
    }
    btnClear.onclick = () => {
        arrResult = [];
        show('', '', '');
    }
}*/
/*{
    // Giải phương trình bậc nhất
    let btn = $('.btn');
    btn.onclick = () => {
        let valueA = $('.number_a');
        let valueB = $('.number_b');
        if(valueA.value == '' ||valueB.value == '') {
            alert("Vui lòng nhập giá trị");
        } else {
            numA = Number(valueA.value);
            numB = Number(valueB.value);
            if(isNaN(numA)||isNaN(numB)){
                alert("Giá trị nhập vào không chính xác!");
            } else {
                let result = calcPtbn(numA, numB);
                valueA.value = '';
                valueB.value = '';
                $('.result').innerHTML = result;
            }
        }
    }
    let calcPtbn = (a, b) => {
        if(a == 0) {
            if(b == 0) {
                return "Phương trình có vô số nghiệm"
            } else {
                return "Phương trình vô nghiệm"
            }
        } else {
            let result = (-b/a).toFixed(2);
            return `Phương trình:  ${a}x + ${b} = 0  có nghiệm là ${result}  `
        }
    }
}*/
/*{
    let btn = $('.btn');
    btn.onclick = () => {
        let num = $('.number_a');
        if(num.value == ''){
            alert("Vui lòng nhập một số")
        } else {
            let numberTest = Number(num.value);
            if(isNaN(numberTest)){
                alert("Giá trị nhập vào không chính xác!")
            } else {
                let result = test(numberTest);
                $('.result').innerHTML = result;
            }
        }
    }
    let test = (value) => {
        let result = Math.sqrt(value);
        if(Number.isInteger(result)){
            return `
                Số ${value} là số chính phương
            `;
        } else {
            return `
                Số ${value} không phải là số chính phương
            `;
        }
    }
}*/
/*{
    // Thêm vào thẻ HTML bằng JavaScript
    let element = $('.test');
    element.insertAdjacentHTML('beforebegin',`<div>Đây là nội dung: beforebegin</div>`) 
    element.insertAdjacentHTML('afterbegin',`<div>Đây là nội dung: afterbegin</div>`) 
    element.insertAdjacentHTML('beforeend',`<div>Đây là nội dung: beforeend</div>`) 
    element.insertAdjacentHTML('afterend',`<div>Đây là nội dung: afterend</div>`) 
}*/
/*{
    let str = "Xin chào các bạn mình là \"Nguyễn Văn Hùng\"";
    let str2 = "Tôi 24 tuổi"
    // let sliceElement = str.slice(0,11);
    // console.log(sliceElement);
    // let subStringElement = str.substring(0, 8);
    // console.log(subStringElement);
    // let subStrElement = str.substr(0, 8);
    // console.log(subStrElement);
    // let replaceString = str.replace("bạn", "chúng mày");
    // console.log(replaceString);
    // let lowerString = str.toLowerCase();
    // console.log(lowerString);
    // let upperString = str.toUpperCase();
    // console.log(upperString);
    // let newString_1 = str + str2;
    // console.log(newString_1);
    // let newString_2 = str.concat(str2);
    // console.log(newString_2);
    // let value = str.charAt(5);
    // console.log(value);
    // let AsciiString = str.charCodeAt(5);
    // console.log(AsciiString);
    let arr2 = str2.split('');
    console.log(arr2)
    for(var i = 0; i < arr2.length; i++){
        console.log(arr2[i]);
    }
}*/
/*{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arr2 = ["name", "age"]
    // console.log(arr.join());
    arr.push(10);
    console.log(arr);
    arr.pop();
    console.log(arr);
    arr.shift();
    console.log(arr);
    arr.unshift(0, 1);
    console.log(arr);
    // arr.splice(3, 5, "Name", "Age");
    // console.log(arr);
    arr.sort();
    console.log(arr);
    arr.reverse();
    console.log(arr);
    let newArr = arr.concat(arr2);
    console.log(newArr);
    let newArr_2 = arr.slice(3, 9);
    console.log(newArr_2);
}*/
/*{
    //Khai báo mảng 2 chiều
    /*{
        let num = [
            [1,2],
            [2,5],
            [3,6]
        ]
        console.log(num[0][1])
    
        //thêm vào cuối mảng:
        num.push([3,4,5]);
        console.log(num);
        // thêm vào đầu mảng:
        num.unshift([7, 8, 1, 10]);
        console.log(num);
    }*/
    /*{
        //Duyệt mảng 2 chiều:
        //Tạo random mảng 2 chiều
        let arr_2 = [];
        for(var i = 0; i < 4; i++){
            //vị trí thứ i trong mảng tạo một mảng rỗng
            arr_2[i] = [];
            for(var j = 0; j < 5; j++){
                //random số đưa vào mảng
                arr_2[i][j] = Math.floor(Math.random()*9);
            }
        }
        console.log(arr_2);
        // in ra các phần tử trong mảng 2 chiều
        for(var i = 0; i< arr_2.length; i++){
            for(var j = 0; j < arr_2[i].length; j++){
                console.log(arr_2[i][j]);
            }
        }
    }
}*/
{
    //Number
    // let number = 10;
    // console.log(number.toString(2));
    // console.log(number.toString(8));
    // console.log(number.toString(10));
    // console.log(number.toString(16));
    // console.log(Number(true))
    
}
{
    //Date
    // let date_1 = new Date()
    // console.log(date_1);//Thu Apr 20 2023 19:45:22 GMT+0700 (Giờ Đông Dương)
    // let date_2 = new Date(1222)
    // console.log(date_2);
    // let date_3 = new Date('12/2/2022')
    // console.log(date_3);
    // let date_4 = new Date(2022, 12, 3);
    // console.log(date_4);
    // Dạng ISO DATE
    // let date_5 = new Date("2022-2-22");
    // console.log(date_5);
    // Dạng Long DATE
    // let date_6 = new Date("2022 Mar 31");
    // console.log(date_6);
    // Dạng Short DATE
    // let date_7 = new Date("03-21-2010");
    // console.log(date_7);
    //Nếu nhập vào là dạng dd/mm/yyyy
    // let dateElement = (dateString) => {
    //     let dateArray = dateString.split("/")
    //     // Khi trả về kết quả là tháng cần trừ đi 1
    //     return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
    // }
    // let result = dateElement("20/10/2022");
    // console.log(result);
    /*{
        //Hàm xử lý Date
        let d = new Date();
        console.log(d.getDate());
        console.log(d.getDay() + 1);// Khi lấy giá trị Day cần tăng thêm 1
        console.log(d.getFullYear());
        console.log(d.getYear());//Hiện nay không còn được sử dụng
        console.log(d.getHours());
        console.log(d.getMilliseconds());
        console.log(d.getMinutes());
        console.log(d.getMonth() + 1);//Khi lấy giá trị tháng cần tăng thêm 1
        console.log(d.getSeconds())
        console.log(d.getTime());

    }*/
    /*{
        let d = new Date();
        d.setDate(11);
        d.setFullYear(2011);
        // d.setYear(99)//Set năm 19xx
        d.setHours(2);
        d.setMilliseconds(333);
        d.setMinutes(17);
        d.setMonth(0);
        d.setSeconds(10);
        d.setTime(1);//Lấy mốc tgian từ năm 1970
        console.log(d)
    }*/
}
{
    let setTime = (value) => {
        let result;
        if(value < 10){
            result = '0'+ value.toString();
        } else {
            result = value.toString();
        }
        return result;
    }
    // Build Clock current Client
    let getTime = () => {
        let myClock = new Date();
        let myHours = myClock.getHours();
        let myMinutes = myClock.getMinutes();
        let mySeconds = myClock.getSeconds();
        // Check time
        myHours = setTime(myHours);
        myMinutes = setTime(myMinutes);
        mySeconds = setTime(mySeconds);
        //Hien thi
        showTime(myHours, myMinutes, mySeconds);
    }
    //
    let showTime = (hour, minute, second) => {
        document.querySelector('.clock').innerHTML = `
        ${hour} : ${minute} : ${second}
        `
    }
    setInterval(getTime, 1000);
}