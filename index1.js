//////////////// tpel teqsti bolor mecatarery

// let str = 'My name iS Anna'

// for (let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase() && str[i] != " "){
//         console.log(str[i]);
//     }
// }

//////////////// tpel teqsti bolor dzaynavornery

// let str = 'My name iS Anna'

// for (let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toLowerCase() && str[i] != " "){
//         console.log(str[i]);
//     }
// }

//////////////// tpel teqsti bolor tvery

// let str = 'My name iS Anna 5468'
// for (let i = 0; i < str.length; i++) {
//     if(str[i] == +str[i] && str[i] !== " "){
//         console.log(str[i]);
//     }
// }

//////////////// tpel teqsti arajin mecatarery

// let str = 'my name iS Anna'

// for (let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase() && str[i] !== " "){
//         console.log(str[i]);
//         break
//     }
// }

//////////////// tpel teqsti verjin mecatarery

// let str = 'my name iS Anna'

// for (let i = str.length - 1; i > 0; i--) {
//     if(str[i] === str[i].toUpperCase() && str[i] !== " "){
//         console.log(str[i]);
//         break
//     }
// }


//////////////// tpel teqsti arajin bary

// let str = 'my name iS Anna'
// let a = str.split(' ')
// console.log(a[0]);

// let str = 'my name iS Anna'
// let spaceIndex = str.indexOf(" ")
// console.log(spaceIndex);
// console.log(str.slice(0, spaceIndex));

//////////////// tpel teqsti verjin bary

// let str = 'my name iS Anna'
// let spaceIndex = str.lastIndexOf(" ")
// console.log(str.slice(spaceIndex + 1));

//////////////// tpel teqsti bacatneri qanaky

// let str = 'my name iS   Anna '
// let count = 0

// for (let i = 0; i < str.length; i++) {
//     if(str[i] === ' '){
//         count += 1
//     }
// }
// console.log(count);

//////////////// jnjel ketadrakan nshannery

// let str = 'my .""""155. name iS Anna .,.'
// for (let i = 0; i < str.length; i++) {
//     if(str[i].toUpperCase() === str[i].toLowerCase() && str[i] !== ' ' && str[i] != +str[i]){
//         str = str.replaceAll(str[i], '')
//     }
// }
// console.log(str);




//////////////////////////////////////// gtnel amenamec tivy arrayi

// let array = [8, 87, 8, 9, 65, 8, 2, 4, 89]
// let max = array[0]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > max){
//         max = array[i]
//     }
// }
// console.log(max);


/////////////////// amenapoqr tivy

// let array = [8, 87, 8, 9, 65, 8, 2, -5, 4, 89]
// let min = array[0]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] < min){
//         min = array[i]
//     }
// }
// console.log(min);



////////////////////// gtnel zangvaci verjin tary 

// let array = [8, 87, 8, 9, 65, 8, 2, 4, 89, 56]
// console.log(array.at(-1));

// for (let i = 0; i < array.length; i++) {
//     if(i === array.length - 1){
//         console.log(array[i]);
//     }
// }


////////////////////// gtnel zangvaci krknvox tary 

// let array = [8, 87, 8, 8, 9, 9, 9, 2, 2, 2, 4, 89, 56]
// array.sort()

// for (let i = 0; i < array.length; i++) {
//     if(array[i] === array[i + 1]){
//         console.log(array[i]);
//     }
// }

////////////////////// zangvaci tarery poxarinel 0-nerrov

// let array = [8, 87, 8, 8, 9, 9, 9, 2, 2, 2, 4, 89, 56]
// console.log(array.fill(0, 0));

// for (let i = 0; i < array.length; i++) {
//     array[i] = 0
//     console.log(array[i]);
// }

////////////////////// zangvaci 5-ic mec tarery tepl

// let array = [8, 87, 8, 8, 2, 2, 4, 89, 56]

// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 5){
//         console.log(array[i]);
//     }
// }

////////////////////// jnjel zangvaci kent tarery
// debugger
// let array = [8, 87, 8, 8, 2, 2, 4, 89, 56]

// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2 !== 0){
//         array.splice(i, 1)
//         i--
//     }
// }
// console.log(array);


////////////////////// dasavorel zangvaci tarery achman kargov

// let array = [8, 87, 8, 8, 2, 2, 4, 89, 56]
// console.log(array.sort((a, b) => a - b));

////////////////////// dasavorel zangvaci tarery achman kargov aranc sorti

// let array = [8, 87, 32, 2, 4, 89, 56, 6];
// let sortedNum 

// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if (array[j] < array[i]) {
//             sortedNum = array[i];
//             array[i] = array[j];
//             array[j] = sortedNum;
//         }
//     }
// }
// console.log(array);

////////////////////////////////////////////////////////////////

// let arr = [8, 87, 8, 2, 4, 89, 56];
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++){
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         let temp = arr[minIndex]
//         arr[minIndex] = arr[i]
//         arr[i] = temp
//     }
//     return arr
// }
// console.log(selectionSort(arr))

/////////////////////////////////////////////////////////////////////

// let array = [8, 87, 8, 2, 4, 89, 56];
// let sortedNum

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[j] > array[j + 1]) {
//             sortedNum = array[j];
//             array[j] = array[j+1];
//             array[j+1] = sortedNum;
//         }
//     }    
// }
// console.log(array);

////////////////////////////////////////////////////////

// let array = [8, 87, 8, 2, 4, 89, 56];
// let sortedNum

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[j] > array[j +1]) {
//             [array[j], array[j+1]] = [array[j+1], array[j]]
//         }
//     }    
// }
// console.log(array);



////////////////////////////////////////////////////////
// zangvaci mej lcnel patahakan 5 hat chkrknvor tiv

// let arr = []
// for (let i = 0; i < 5; i++) {
//     let num = Math.floor(Math.random() * 15 + 5)
//     if(arr.indexOf(num) == -1){
//         arr.push(num)
//     }
// }
// console.log(arr)



////// darcnel patahakan indexnery
// let arr = [8, 87, 8, 2, 4, 89, 56]
// let eachIndex = arr.length
// for (let i = 0; i < eachIndex; i++) {
//     let num = Math.floor(Math.random() * eachIndex)
//     [arr[i], arr[num]] = [arr[num], arr[i]]
//     eachIndex--
// }
// console.log(arr)



//////////////////////////// zangvaci tarery zuyg zuyg gumarel ev lcnel nor zangvaci mej

// let arr = [8, 87, 8, 2, 4, 5, 3, 2];
// let result = [];
// for (let i = 0; i < arr.length; i+=2) {
//     result.push(arr[i] + arr[i + 1]);
// }
// console.log(result);

/////////////////////////// tpel zangvaci 10ic poqr qarakusineri gumary
// debugger
// let arr = [8, 87, 8, 2, 4, 23, 12, 20, 5, 3, 2];
// let sum = arr.reduce((acc, curr) => {
//     if (curr < 10) {
//         // return acc + curr ** 2;
//         return acc + Math.pow(curr, 2);
//     }
//     return acc;
// }, 0);
// console.log(sum);

// let arr = [8, 87, 8, 2, 4, 23, 12, 20, 5, 3, 2];
// sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 10){
//         sum += Math.pow(arr[i], 2)
//     }
// }
// console.log(sum);


/////////////////////////// tpel zangvaci 5ic poqr tveri artadryaly

// let arr = [3, 2, 25, 68, 3, 4, 12,2]
// sum = 1
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 5){
//         sum *= arr[i]
//     }
// }
// console.log(sum)

/////////////////////////// tpel zangvaci mecaguyn arjeqy aranc math methodi
// let array = [3, 2, 25, 68, 3, 89, 4, 12];
// let max = array[0]
// for (let i = 0; i < array.length; i++) {
//     // if(array[i] > max){
//     //     max = array[i]
//     // }

//     array[i] > max && (max = array[i])
// }
// console.log(max);

// let array = [3, 2, 25, 68, 3, 89, 4, 12];
// let max = array[0]
// array.map(e => {
//     max < e && (max = e)
// })
// console.log(max);

/////////////////////////// tpel zangvaci poqraguyn arjeqy aranc math methodi
// let array = [3, 2, -6,  25, 68, 3,89, 4, 12];
// let min = array[0]

// for (let i = 0; i < array.length; i++) {
//     if(array[i] < min){
//         min = array[i]
//     }

//     // array[i] < min && (min = array[i])
// }
// console.log(min);


// let array = [1,5,2,3,6,4,7,9,8]
// array.forEach(element => {
//     array.forEach(el => {
//         if(element + el === 10 && element !== el){
//             console.log(element, el);
//             array.splice(element, 1)
//         }
//     })
// });

// let array = [1,5,2,3,6,4,7,9,8]
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if(array[i] + array[j] === 10 && i !== j){
//             console.log(array[i], array[j]);
//             array.splice(i, 1)
//         }
//     }
// }


/////////////////// dasavorel hakarak uxutyamb 
// let array = [1, 5, 2, 3, 6, 4, 7, 9, 8]
// let l = array.length - 1
// for (let i = 0; i < array.length / 2; i++) {
//     [array[i], array[l]] = [array[l], array[i]]
//     l--
// }
// console.log(array);


///////////////////////////// matrix stexcel
// let array = []
// let n = 0
// for (let i = 0; i < 3; i++) {
//     array[i] = []
//     for (let j = 0; j < 3; j++) {
//         array[i][j] = ++n
//     }
// }
// console.log(array)

// let arr = ['html', 'js', 'react.js', 'php']
// arr.forEach((element, i) => {
//     // console.log(element.endsWith('js'));
//     element.endsWith('js') && arr.splice(i, 1)
// })
// console.log(arr)


// let arr = ['html', 'js', 'react.js', 'php'];
// let jsEndingWords = [];

// arr.forEach((element, i) => {
//     if (element.endsWith('js')) {
//         jsEndingWords.push(element);
//     }
// });
// console.log(jsEndingWords);


// let arr = ['html', 'js', 'react.js', 'php'];
// arr = arr.filter(element => element.endsWith('js'));
// console.log(arr);


// let arr = ['html', 'js', 'react.js', 'php'];
// let filteredArr = [];
// arr.forEach((element) => {
//     if (!element.endsWith('js')) {
//         filteredArr.push(element);
//     }
// });
// console.log(filteredArr);


//////////////////////////
// dasavorel poqric mec 

// let obj = {
//     a: 5, 
//     b: 2,
//     c: 4
// }

// let result = Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]))
// console.log(result);



// srjel keyeri u valuneri texery

// let obj = {
//     a: 5, 
//     b: 2,
//     c: 4
// }

// let result = Object.fromEntries(Object.entries(obj).map(e => e.reverse()))
// console.log(result);


// Գրեք JavaScript ծրագիր՝ JavaScript օբյեկտի երկարությունը ստանալու համար:

// Object.obj = function (MyObj) {
//     let size = 0
//     for (let key in MyObj) {
//         if (MyObj.hasOwnProperty(key)) size++;
//     }
//     return size;
// };
// let student = {
//     name: "David Rayy",
//     age: 12,
//     street: 'qaraqer',
// };
// let obj = Object.obj(student);
// console.log('object size : ' + obj);




// function f(obj) {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     let keys = [];
//     for (let key in obj) 
//         if (_.has(obj, key)) keys.push(key);
//     return keys;
// } 
// function isObject(obj) {
//     let type = typeof obj;
//     return type === 'function' || type === 'object' && obj;
// }
// console.log(f({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));




// Գրեք JavaScript ծրագիր՝ ցուցադրելու հետևյալ գրքերի ընթերցանության կարգավիճակը (այսինքն՝ ցուցադրել գրքի անունը, 
// հեղինակի անունը և կարդալու կարգավիճակը):


// let library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// for (let i = 0; i < library.length; i++) {
//     let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//         console.log("Already read " + book);
//     } else {
//         console.log("You still need to read " + book);
//     }
// }



// Գրեք JavaScript ֆունկցիա՝ ստուգելու համար, թե արդյոք օբյեկտը պարունակում է տվյալ հատկություն։
// function f (obj, key) {
//     return obj != null && hasOwnProperty.call(obj, key);
// }
// console.log(f({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));


// hashvel s = v * t | t = s/v
// const fiz = {
//     s: null,
//     v: null,
//     t: null,
//     calculateDistance: function () {
//         if (typeof this.v !== 'number' || typeof this.s !== 'number') {
//             return 'Invalid input. Velocity and time should be numbers.';
//         }

//         this.t = this.s / this.v;
//         return this.t;
//     }
// };

// fiz.s = 6;
// fiz.v = 2;
// console.log(fiz.calculateDistance());
// console.log(fiz.t); 

// const fiz1 = Object.create(fiz);
// fiz1.s = 35;
// fiz1.v = 5;
// console.log(fiz1.calculateDistance()); 
// console.log(fiz1.t); 



// const fiz = {
//     s: null,
//     v: null,
//     t: null,
//     calculateDistance: function () {
//         if (typeof this.v !== 'number' || typeof this.t !== 'number') {
//             return 'Invalid input. Velocity and time should be numbers.';
//         }

//         this.s = this.v * this.t;
//         return this.s;
//     }
// };

// fiz.v = 6;
// fiz.t = 2;
// console.log(fiz.calculateDistance());
// console.log(fiz.s);  

// const fiz1 = Object.create(fiz);
// fiz1.v = 35;
// fiz1.t = 5;
// console.log(fiz1.calculateDistance()); 
// console.log(fiz1.s); 




///////////////////////// stexcel tabele mejy tr u td
// let main = document.querySelector('.main');
// let table = document.createElement('table');
// main.appendChild(table);
// let tr = document.createElement('tr');
//     table.appendChild(tr);
// for (let i = 0; i < 10; i++) {
//     let th = document.createElement('th');
//     let td = document.createElement('td');
//     th.innerText = 'Table ' + i;
//     tr.appendChild(th);
//     td.style.cssText = `
//         color: red;
//         margin: auto;
//         padding: 20px;
//         text-align: center;
//     `
//     th.append(td)
//     td.innerText = Math.round(Math.random() *100)
// }


// let main = document.querySelector('.main');
// let table = document.createElement('table');
// main.appendChild(table);
// let tr = document.createElement('tr');
// table.appendChild(tr);
// let usedNumbers = new Set();
// for (let i = 0; i < 10; i++) {
//     let th = document.createElement('th');
//     let td = document.createElement('td');
//     th.innerText = 'Table ' + i;
//     tr.appendChild(th);
//     td.style.cssText = `
//         color: red;
//         margin: auto;
//         padding: 20px;
//         text-align: center;
//     `;
//     let randomNumber;
//     do {
//         randomNumber = Math.round(Math.random() * 100);
//     } while (usedNumbers.has(randomNumber));
//     usedNumbers.add(randomNumber);
//     td.innerText = randomNumber;
//     th.appendChild(td);
// }

