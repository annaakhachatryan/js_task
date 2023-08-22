///////////////  tpel true ete nshvac popoxakany number e hakarak depqum false   /////////////////////////////

// let number = 5
// if(typeof number === 'number'){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let string = '5'
// if(typeof string === 'string'){
//     console.log(true);
// }else{
//     console.log(false);
// }


//////////////////////  ete popoxakany zuyg e tpel true ete kent e false  //////////////////

// let number = 7
// if(number%2 === 0){
//     console.log(true);
// }else{
//     console.log(false);
// }


///////////////// ete popoxakani verji tivy 1, 2, 3, 4, 5  e tvel true ete che false /////////////

// let number = 1565
// if(number%10 === 5){
//     console.log(true);
// }else{
//     console.log(false);
// }


////////////////// ete tivy bajanvum e 5 u 0 tpel true ///////////
// let number = 25
// if(number%5 === 0){
//     console.log(true);
// }else{
//     console.log(false);
// }



//////////////////// ete tivy bajanvum e 3 i kam 4 

// let number = 15
// if(number%3 === 0 || number%4 === 0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let number1 = 5
// if(number1%3 === 0 && number1%4 === 0){
//     console.log(true);
// }else{
//     console.log(false);
// }


/////////////////// stugel tarin nahanj e veradarcne true///////////////////

// let year = 2021 
// let result = (year%4 === 0 && year%100 !== 0) || year%400 ===0 
// console.log(result); 

// let str = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += '*';
//     }
//     str += "\n";
// }
// console.log(str);



/////////////// gumarel for lopi amen andamy  /////////////////
// let sum = 0
// for(let i = 1; i < 10; i++){
//     sum += i
// }
// console.log(sum);



////////////// tpel tvyal tv bajanararnery ////////////

// let number = 12
// for (let i = 1; i < 100; i++) {
//     if(i%number === 0){
//         console.log(i);
//     }
// }


// let number = 100
// for(let i = 1; i <= 100; i++){
//     number % i || console.log(i);
// }


/////////////////// stugel ete tivy parz e tpel true ///////////////

// let number = 7
// let prime = true
// for (let i = 2; i < number; i++) {
//     if(number%i === 0){
//         prime = false
//         break
//     }
// }
// console.log(prime);


// for(let n = 2; n <= 20; n++){
//     let prime = true
//     for(let i = 2; i < n; i++){
//         if(n%i === 0){
//             prime = false
//             break
//         }
//     }
//     prime && console.log(n);
// }



// prime:
// for(let n = 2; n <= 20; n++){
//     for (let i = 2; i < n; i++) {
//         if(n%i === 0){
//             continue prime
//         }
//     }
//     console.log(n);
// }



/////////////// hashvel bolor tveri bajanararnery /////////////

// let number = 24
// let count = 0
// for(let i = 1; i <= 24; i++){
//     number % i  || count++
// }
// console.log(count);


// let i = 1
// let number = 24
// let count = 0

// while(i <= number){
//     number%i || count++
//     i++
// }
// console.log(count);




/////////// tpel 0-20 mijakayqi zuyg tvery //////////////////

// for (let i = 0; i < 20; i++) {
//     i % 2 || console.log(i);
// }


/////////// tpel 0-20 mijakayqi kent tvery //////////////////

// for(let i = 1; i <= 20; i++){
//     i % 2 && console.log(i);
// }



/////////////// hashvel 5 tvi mijin tvabanakany ////////////////////

// let number = 5
// let sum = 0

// for(let i = 1; i <= number; i++){
//     sum += i
// }

// let min = sum / number
// console.log(min);




//////////////////// hashvel tvi factorialy //////////////////

// let n = 5
// let factorial = 1
// for(let i = 1; i <= n; i++){
//     factorial *= i
// }

// console.log(factorial);








///////////////// 5 - 10 mijakayqi random tver //////////////////

// let random = Math.ceil(Math.random() * 5 + 5)
// console.log(random);


////////////////// tpel 5 - 25 mijakayqi 5hat tiv /////////////////

// for (let i = 0; i < 5; i++) {
//     let random = Math.ceil(Math.random() * 25)
//     console.log(random);
// }


/////////////////// fibonachi oranq //////////////////////

// let previous = 0
// let next = 1

// for (let i = 1; i < 50; i++) {
//     console.log(i);
//     i = previous + next
//     previous = next
//     next = i
// }


// let previous = 0
// let next = 1
// let result = 1

// function fibonachi(number) {
//     if(result >= number){
//         return
//     }
//     result = previous + next
//     previous = next
//     next = result
//     console.log(result);

//     fibonachi(number)
// }

// fibonachi(100)


///////////////// factorial

// function f(num){
//     if(num === 0){
//         return 1
//     }

//     return f(num - 1) * num
// }

// console.log(f(5));



////////////// grel function vory kveradarcni argumenti krknapatiky

// function f(num){
//     return num * num
// }

// console.log(f(5));



///////////// grel function vor kveradarcni true ete argumenty drakan e , hakarak depqum bazmapatki -1


// function f(num){
//     if(num > 0){
//         return true
//     }else{
//         return num *= -1
//     }
// }

// console.log(f(5));




//////////////// grel rekursia vory aynqan angam tivy kbajani 2i minchev kstana kent tiv ev kveradarcni

// function f(num) {
//     if (num % 2 !== 0) {
//         return num;
//     } else {
//         return num = num / 2;
//     }
//     f(num)
// }

// console.log(f(26));



///////////////// argumenty yndunum e eranish tiv verjin tvanshany berel skizb

// function f(){
//     let number = 563
//     let last = number % 10
//     let num = (number - last) / 10
//     console.log('' + last + num);
// }
// f()




///////////////// tpel mijakayqi parz tvery 

// function f(n, m){
//     prime: for (let i = n; i < m; i++) {
//         for (let j = 2; j < i; j++) {
//             if(i % j === 0){
//                 continue prime
//             }
//         }
//         console.log(i);
//     }
// }
// f(1, 10)


//////////// hashvel qani or e mnacel cnundin 

// let date = new Date()
// let birthday = new Date('4 dec 2023')
// let m = 1000 * 60 * 60 * 24
// let days = birthday - date
// console.log(days/m);




//////////////////////////  star 
// uxankyun
// let star = ''
// for (let i = 1; i < 6; i++) {
//     star += '*'    
//     console.log(star);
// }

// hakarak uxankyun
// let star = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < 5 - i; j++) {
//         star +=  ' '
//     }
//     for (let k = 0; k < i; k++) {
//         star += '*'
//     }
//     star += '\n'
// }
// console.log(star);

// burg
// let star = '*'
// let space 
// for (let i = 1; i < 6; i++) {
//     space = ''
//     for (let j = 6; j > i; j--) {
//         space += ' '
//     }
//     console.log(space + star);
//     star += '**'
// }


// qarakusi
// let n = 4
// let star = ''
// for (let i = 1; i < n; i++) {
//     for (let j = 1; j < n; j++) {
//         star += '*'
//     }
//     star += '\n'
// }
// console.log(star);

// qarakusi mejy datark
// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1) {
//             string += "*";
//         }
//         else {
//             if (j === 0 || j === n - 1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//     string += "\n";
// }
// console.log(string);



// erankyun
//  debugger
// let star = ''
// for (let i = 1; i < 6; i++) {
//     for (let j = 1; j < 6 - i; j++) {
//         star += ' '
//     }
//     for (let k = 1; k < i; k++) {
//         star += '*'
//     }
//     star += "\n";
// }
// console.log(star);



// const str = 'my name is AnnaMaria';
// const words = str.split(' ');
// let maxLength = 0;

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWords = [words[i]];
//     }
// }

// console.log(longestWords.join(' '));



// const str = 'my name is AnnaMaria';
// let a = str.split(' ')
// let longWord = ''
// a.forEach(element => {
//     if(element.length > longWord.length){
//         longWord = element
//     }
// });
// console.log(longWord);

///////////////////////////////////////////////////////////////////////
// cgkrknvoxner
// let num = [1, 5, 9, 8, 8, 8, 8, 6, 3, 3, 7, 3, 5];
// let s = num.sort();
// for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i + 1]) {
//         num.splice(i, 1);
//         i--;
//     }
// }
// console.log(num);



// let num = [1, 5, 9, 8, 8, 8, 8, 8, 6, 3, 3, 7, 3, 5];
// let count = {};
// let mostFrequentNum;
// let maxCount = 0;
// for (let i = 0; i < num.length; i++) {
//     const currentNum = num[i];
//     // count[currentNum] = (count[currentNum] || 0) + 1;
//     count[currentNum] = count[currentNum] ? count[currentNum] + 1 : 1;
//     if (count[currentNum] > maxCount) {
//         mostFrequentNum = currentNum;
//         maxCount = count[currentNum];
//     }
// }
// console.log(mostFrequentNum);
// console.log(count);
// console.log(maxCount);


// tpel amenashat krknvox tive
// let num = [1, 5, 9, 8, 8, 8, 8, 6, 3, 3, 7, 3, 5]
// let mostFrequentNum
// let maxCount = 0
// for (let i = 0; i < num.length; i++) {
//     let currentCount = 1
//     for (let j = i; j < num.length; j++) {
//         if (num[j] === num[i]) {
//             currentCount++
//         }
//     }
//     if (currentCount > maxCount) {
//         mostFrequentNum = num[i]
//         maxCount = currentCount
//     }
// }
// console.log(mostFrequentNum)

// amenashat krknvor tive jnjel
// let num = [1, 5, 9, 8, 8, 8, 8, 6, 3, 3, 7, 3, 5];
// num.sort();
// for (let i = 0; i < num.length; i++) {
//     if (num[i] === num[i + 1]) {
//         num.splice(i, 1);
//         i--;
//     }
// }
// console.log(num);


// let num = [1, 5, 9, 8, 8, 8, 8, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 3, 5];
// let count = {};
// let mostFrequentNum;
// let maxCount = 0;
// num.forEach((n) => {
//     count[n] = (count[n] || 0) + 1;
//     if (count[n] > maxCount) {
//         mostFrequentNum = n;
//         maxCount = count[n];
//     }
// });
// console.log(mostFrequentNum);
// console.log(count);
// console.log(maxCount);



///////////////////////// tpel krknvox tarery
// let num = [1, 5, 9, 8, 8, 8, 8, 6, 3, 3, 3, 3, 7, 3, 5];
// let result = {};
// num.forEach(e => {
//   result[e] ? result[e]++ : (result[e] = 1);
// });
// for (let key in result) {
//   if (result[key] > 1) {
//     console.log(key);
//   }
// }
// console.log(result);


// let num = [1, 5, 9, 8, 8, 8, 8, 6, 3, 3, 3, 3, 7, 3, 5];
// let result = {};
// num.forEach(e => {
//   result[e] ? result[e]++ : (result[e] = 1);
// });
// let n = Object.entries(result).filter(([key, count]) => count > 1).map(([key]) => parseInt(key));
// console.log(n);

// let m = Object.entries(result)
// console.log(m);







// Առաջադրանք
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել գլխավոր և երկրորդային անկյունագծերի միջին թվաբանականը։
// debugger
// var arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// var num1 = 0
// var num2 = 0
// var count = 0
// for(var i = 0; i < arr.length; i++){
//     num1 += arr[i][i]
//     num2 += arr[i][arr.length-1-i]
//     count += 2
// }
// console.log(num1);
// console.log(num2);
// console.log(count);
// var sum = num1 + num2
// console.log(sum / count)



// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// Գտնել զանգվածի բոլոր զույգ թվերի գումարը։

// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// var sum=0
// for (var i=0;i<arr.length; i++){
//     for(var a = 0; a < arr.length; a++){
//         if(arr[i]%2 === 0){
//             sum += [i][a]
//         }
//     }
// }
// console.log(sum)


// Գտնել և տպել գլխավոր անկյունագծի ներքևի թվերը։

// var arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for( var i = 0; i <= arr.length; i++){
//     for(var j = 0; j < i; j++){
//         console.log(arr[i][j])    
//     }
// }


// Առաջադրանք
// Գտնել և տպել գլխավոր անկյունագծի վերևի թվերը։
// var arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(var i = 0; i < arr.length; i++){
// 	for(var j = arr.length - 1; j > i; j--){
// 		console.log(arr[i][j]);
// 	}
// }