////////////// gtnel amenaerkar bary texstic

// let text = 'Tell me wonderful thing'
// let arr = text.split(' ')
// let longestWord = ''

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i].length > longestWord){
//         longestWord = arr[i].length
//         word = arr[i]
//     }    
// }
// console.log(word)


///////////////// gtnel ev ktrel amenaerker bary
// let text = 'Tell me wonderful thing';
// let arr = text.split(' ');
// let longestWord = '';
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longestWord.length) {
//         longestWord = arr[i];
//     }
// }
// const index = arr.indexOf(longestWord);
// if (index !== -1) {
//     arr.splice(index, 1);
// }
// console.log(longestWord);
// console.log(arr.join(' '));

////////////////////////////////////////////////////////////////////
// let text = 'Tell me wonderful thing'
// let arr = text.split(' ')
// let longestWord = ''
// arr.forEach(el => {
//     if(el.length > longestWord.length){
//         longestWord = el
//     }
// })
// console.log(longestWord);







/////////////// gtnel krknvor tvery ev jnjel
// let num = [1, 5, 9, 8, 8, 8, 8, 6, 3, 3, 7, 3, 5];
// let number = num.sort()

// for (let i = 0; i < number.length; i++) {
//     if(number[i] === number[i + 1]){
//         num.splice(i, 1)
//         i--
//     }
// }
// console.log(num);



// let star = '*'
// let space
// for (let i = 0; i < 5; i++) {
//     space = ''
//     for (let j = 5; j > i; j--) {
//         space += ' '
//     }
//     console.log(space + star);
//     star += '**'
// }


// let star = ''
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < 5 - i; j++) {
//         star +=  ' '
//     }
//     for (let k = 0; k < i; k++) {
//         star += '*'
//     }
//     star += '\n'
// }
// console.log(star)



// 1,2,3,4,6,7,8,11,12,16
// let array = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]
// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         console.log(array[i][j]);
//     }
// }


// 16, 12, 11, 8, 7, 6, 4, 3, 2, 1
// let array = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];

// for (let i = array.length - 1; i >= 0; i--) {
//     for (let j = array.length - 1; j >= i; j--) {
//         console.log(array[i][j]);
//     }
// }



// 1, 5, 6, 11, 13, 14, 15, 16
// let array = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         if (array[i][j] === 1 || array[i][j] === 5 || array[i][j] === 6 || array[i][j] === 11 ||  array[i][j] > 12) {
//             console.log(array[i][j]);
//         }
//     }
// }



// debugger
// let array = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];
// let snakeArr = [];

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//         for (let j = 0; j < array[i].length; j++) {
//             snakeArr.push(array[i][j]);
//         }
//     } else {
//         for (let j = array[i].length - 1; j >= 0; j--) {
//             snakeArr.push(array[i][j]);
//         }
//     }
// }
// console.log(snakeArr);

// var str = "Hello";
// // console.log(str.charCodeAt(0)); 
// // console.log((72).toString(2)); // erku akan hamakarg
// console.log(0b1001000); // tasakan hamakarg

// var binaryNumber = "1001000";
// var decimalNumber = parseInt(binaryNumber, 2);
// console.log(decimalNumber);  // Output: 72


// var binaryNumber = "1001000";
// var decimalNumber = Number(`0b${binaryNumber}`);
// console.log(decimalNumber);  // Output: 72



// let arr = [1,2,3,4,5,6,7,8,9]
// 1,2, 4,5,6,7, 7,8,9
// let newArr = arr.copyWithin(2, 3, 5)
// console.log(newArr);


// let str = 'My name iS Anna'
// for (let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase() && str[i] !== ' '){
//         console.log(str[i]);
//     }
// }



// let str = 'My name iS Anna 5468'
// for (let i = 0; i < str.length; i++) {
//     if(str[i] == +str[i] && str[i] !== ' '){
//         console.log(str[i]);
//     }
// }


// let str = 'my name iS Anna'
// for (let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase() && str[i] !== ' '){
//         console.log(str[i]);
//         break
//     }
// }


// let str = 'My name iS Anna'
// for (let i = str.length - 1; i > 0; i--) {
//     if(str[i] === str[i].toUpperCase() && str[i] !== ' '){
//         console.log(str[i]);
//         break
//     }
// }


// let str = 'my name iS Anna'
// let firstWord = str.indexOf(' ')
// console.log(str.slice(0, firstWord));

// let str = 'my name iS Anna'
// let firstWord = str.lastIndexOf(' ')
// console.log(str.slice(firstWord + 1));



// let str = 'my name iS  Anna '
// let count = 0
// for (let i = 0; i < str.length; i++) {
//         if(str[i] === ' '){
//             count++
//         }
// }
// console.log(count);



// let str = 'my ."""" 155. name iS Anna .,. fd'
// for (let i = 0; i < str.length; i++) {
//     if(str[i].toUpperCase() === str[i].toLowerCase() && str[i] !== ' ' && str[i] != +str[i]){
//         str = str.replaceAll(str[i], '')
//     }
// }
// console.log(str);


// let array = [8, 87, 8, 9, 65, 8, 2, 4, 89]
// let max = array[0]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > max){
//         max = array[i]
//     }    
// }
// console.log(max);

// let array = [8, 87, 8, 9, 65, -4, 8, 2, 4, 89]
// let min = array[0]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] < min){
//         min = array[i]
//     }    
// }
// console.log(min);

// let array = [8, 87, 8, 9, 65, 8, 2, 4, 89, 65]
// let last = array.at(-1)
// console.log(last);

// for (let i = 0; i < array.length; i++) {
//     if(array.length-1 === i){
//         console.log(array[i]);
//     }    
// }

// let array = [8, 87, 8, 9, 9,  65, 8, 2, 4, 89, 65]
// array.sort()
// for (let i = 0; i < array.length; i++) {
//     if(array[i] === array[i + 1]){
//         console.log(array[i]);
//     }    
// }


// let array = [8, 87, 8, 9, 9,  65, 8, 2, 4, 89, 65]
// console.log(array.fill(0, 0));
// for (let i = 0; i < array.length; i++) {
//     array[i] = 0
//     console.log(array[i]);    
// }

// let array = [8, 87, 8, 9, 9,  65, 8, 2, 4, 89, 65]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 5){
//         console.log(array[i]);
//     }    
// }


// let array = [8, 87, 8, 9, 9, 65, 8, 2, 4, 89, 65]
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2 !== 0){
//         array.splice(i, 1)
//         i--
//     }
// }
// console.log(array);


// let array = [8, 87, 8, 9, 9, 65, 8, 2, 4, 89, 65]
// console.log(array.sort((a, b) => a - b));
// debugger
// let temp
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if(array[i] > array[j]){
//             temp = array[i]
//             array[i] = array[j]
//             array[j] = temp
//         }
//     }    
// }
// console.log(array);

// let array = [8, 87, 8, 9, 9, 65, 8, 2, 4, 89, 65];
// let temp;

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }

// console.log(array);


// let array = [8, 87, 8, 9, 9, 65, 8, 2, 4, 89, 65];
// let temp;
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       [array[i], array[j]] = [array[j], array[i]]
//     }
//   }
// }

// console.log(array);



// let arr = [];
// for (let i = 0; arr.length < 5; i++) {
//   let n = Math.round(Math.random() * 15 + 5);
//   if (arr.indexOf(n) === -1) {
//     arr.push(n);
//   }
// }
// console.log(arr);


// let arr = [8, 87, 8, 2, 4, 89, 56];
// let num = arr.length;
// for (let i = 0; i < num; i++) {
//     let n = Math.round(Math.random() * num);
//     [arr[i], arr[n]] = [arr[n], arr[i]];
//     num--;
// }
// console.log(arr);



// let arr = [8, 87, 8, 2, 4, 89, 56, 54];
// let result = []
// for(let i = 0; i < arr.length; i+=2){
//     result.push(arr[i] + arr[i + 1])
// }
// console.log(result);


// let arr = [8, 87, 8, 2, 4, 89, 56, 54];
// let sum = arr.reduce((num, curr) => {
//     if(curr > 10){
//         // return num += Math.pow(curr, 2)
//         return num + curr ** 2;
//     }
//     return num
// }, 0)
// console.log(sum);

// let arr = [8, 87, 8, 2, 4, 89, 56, 54];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     sum += Math.pow(arr[i], 2);
//   }
// }
// console.log(sum);



// let arr = [3, 2, 25, 68, 3, 4, 12];
// let artadryal  = arr.reduce((artadr, artadrich) => {
//     if(artadrich < 5){
//         return artadr *= artadrich
//     }
//     return artadr
// })
// console.log(artadryal);


// let arr = [3, 2, 25, 68, 3, 4, 12];
// let sum = 1
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 5){
//         sum *= arr[i]
//     }
// }
// console.log(sum);


// let arr = [3, 2, 25, 68, 3, 4, 12];
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     // if(arr[i] > max){
//     //     max = arr[i]
//     // }    

//     arr[i] > max && (max = arr[i])
// }
// console.log(max);

// arr.forEach(e => {
//     e > max && (e = max)
// })
// console.log(max);


// let array = [1,5,2,3,6,4,7,9,8]
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if(array[i] + array[j] === 10 && i !== j){
//             console.log(array[i], array[j]);
//             array.splice(i, 1)
//         }
//     }
// }


// array.forEach(elm => {
//     array.forEach(el => {
//         if(elm + el === 10){
//             console.log(elm, el);
//         }
//     })
// })

// debugger
// let array = [65,98,2,56,45,58]
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

// let array = [65, 98, 2, 56, 45, 58]
// let l = array.length - 1
// for (let i = 0; i < array.length / 2; i++) {
//     [array[i], array[l]] = [array[l], array[i]]
//     l--
// }
// console.log(array)

// debugger
// let matrix = []
// let n = 0
// for (let i = 0; i < 3; i++) {
//     matrix[i] = []
//     for (let j = 0; j < 3; j++) {
//         matrix[i][j] = ++n
//     }    
// }
// console.log(matrix);