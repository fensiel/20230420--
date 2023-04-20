// testFnc();

// function testFnc(){
//     document.write("hello" ,"<br>");
// }

// let count = 0;

// myFnc();
// function myFnc(){
//     count ++;
//     document.write("hello" + count + "<br>");
// }

// myFnc();
// myFnc();
// myFnc();
// myFnc();


// let theFnc = function(){
//     count ++;
//     document.write("bye" + count, "<br>");
// }

// theFnc();

// function myFnc(name,area) {
//     document.write("안녕하세요" + name + "입니다" , "<br>");
//     document.write("사는 곳은" + area + "입니다." ,"<br><br>");
// }

// myFnc("홍당무","서울");

// myFnc("깍두기","부산");

// let rightid = "korea"
// let rightpw = "1234"

// function login(id,pw){
//     if(id==rightid){
//         if( pw==rightpw){
//             document.write(id + "님 방문을 환영합니다");
//         }else{
//             alert("잘못된 비밀번호입니다.");}
//         }else{
//             alert("존재하지 않는 아이디입니다.");
//         }
// }

// let userid = prompt("아이디를 입력하세요","")
// let userpw = prompt("패스워드를 입력하세요","")

// login(userid,userpw);

function sum(){
    let sum = arguments[0] + arguments[1] + arguments[2];
    document.write(sum);
}

sum(10,20,30);

// 매개변수를 생략한 함수 호출문에서 3개의 숫자형 데이터를 전달하는 예
// 숫자형 데이터는 배열에 저장되고 arguments 변수로 참조할수 있다.
// arguments의 인덱스를 이용해 배열에 저장된 값을 불러와 합을 구하여 결괏값(60)을 화면에 출력한다.

// 참조하다:참고로 비교하고 대조하여 보다
// 대조하다: 둘 이상인 대상의 내용을 맞대어 같고 다름을 비교하다

// -------------------


function sum(){
    let sum =0;
    for(let i =0; i<arguments.length; i++){
        sum += arguments[i];}
        document.write(sum);
}
sum(10,20,30);

// 매개변수 없이 함수 호출문에 전달된 값들은 배열로 저장된다.✔✔
// 따라서 다음과 같이 for문으로 전달받은 데이터의 개수만큼 반복하여 sum에 값을 더한다.
// 이때 arguments를 사용하면 함수 호출문에서 유일하게 값을 전달할수 있다.


// function 함수명 (){
//     자바스크립트 코드1;
//     return 데이터(값);

//     자바스크립트 코드2;
// }

// let 변수 =함수명();






// function add () {
//     return 2 + 2
// }

// add()
// //4


// console.log("2+2")

// function testAvg(arrData){
//     let sum = 0;
//     for(let i =0; i<arrData.length; i++){
//         sum += Number(prompt(arrData[i] + "점수는?","0"));
//     }

//     let avg = sum / arrData.length;
//     return avg;
// }

// let arrSubject = ["국어","수학"];
// let result = testAvg(arrSubject);

// document.write("평균 점수는" + result + "점입니다");

// function myFnc(){
//     자바스크립트 코드;
//     myFnc();
// }
// myFnc();

// let num = 0;
// function testFnc(){
//     num++;
//     document.write(num, "<br>");
//     if(num == 10) return;

//     testFnc();
// }
// testFnc();

// let 변수명;

// function 함수명(){
//     let 변수명;
// }

// function 함수명1(){
//     자바스크립트 코드;
// }
// 전역함수

// function 함수명2(){
//     function 함수명3(){
//         자바스크립트 코드;
//     }
// }
// 지역함수

// (function(){
//     let num= 100;   // 지역 변수

//     function menu(){  // 지역 함수
//         num += 100;
//         alert(num);
//     }
//     menu();

// }());

// (function(){
//     let num = 100;
//     function menu(){
//         alert(num);
//     }
// }());

let num = 100;
function menu(){
    num += 100;
    alert(num);
}
menu();

function menu(){
    alert(num);

}

