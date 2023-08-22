// form1.oninput = () => {
//     border.style.borderRadius = `${tl.value}px ${tr.value}px ${bl.value}px ${br.value}px`
//     border.style.backgroundColor = `${colorBox.value}`
//     border.style.boxShadow = `${tl2.value}px ${tr2.value}px ${bl2.value}px ${br2.value}px  ${color.value}`
//     text.innerText = 'border-radius:' + border.style.borderRadius + ';'
//     text2.innerText = 'box-shadow:' + border.style.boxShadow + ';'
//     colorText.innerText = 'background-color:' + border.style.backgroundColor + ';'
// }


let t = document.createElement('table');
main.append(t);
let tr = document.createElement('tr');
t.append(tr);
t.oninput = (event) => {
    let target = event.target;
    let form1 = target.closest('.d');
    let border = form1.nextElementSibling;
    let tl = form1.querySelector('input[name="tl"]');
    let trInput = form1.querySelector('input[name="tr"]');
    let bl = form1.querySelector('input[name="bl"]');
    let br = form1.querySelector('input[name="br"]');
    let colorBox = form1.querySelector('input[name="colorBox"]');
    let tl2 = form1.querySelector('input[name="tl2"]');
    let tr2 = form1.querySelector('input[name="tr2"]');
    let bl2 = form1.querySelector('input[name="bl2"]');
    let br2 = form1.querySelector('input[name="br2"]');
    let color = form1.querySelector('input[name="color"]');
    let text = form1.querySelector('#text');
    let text2 = form1.querySelector('#text2');
    let colorText = form1.querySelector('#colorText');

    border.style.borderRadius = `${tl.value}px ${trInput.value}px ${bl.value}px ${br.value}px`;
    border.style.backgroundColor = colorBox.value;
    border.style.boxShadow = `${tl2.value}px ${tr2.value}px ${bl2.value}px ${br2.value}px ${color.value}`;
    text.innerText = 'border-radius:' + border.style.borderRadius + ';';
    text2.innerText = 'box-shadow:' + border.style.boxShadow + ';';
    colorText.innerText = 'background-color:' + border.style.backgroundColor + ';';
}

for (let i = 0; i < 10; i++) {
    let th = document.createElement('th');
    let td = document.createElement('td');
    tr.appendChild(th);
    td.style.cssText = `
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid;
    `;
    main.style.cssText =`overflow-x: scroll;`
    td.innerHTML = `
      <div id="form1-${i}" class="d">
          <h3>Border radius</h3>
          <input type="range" name="tl" value="0" min="0" max="200">
          <input type="range" name="tr" value="0" min="0" max="200">
          <input type="range" name="bl" value="0" min="0" max="200">
          <input type="range" name="br" value="0" min="0" max="200">
          <input type="color" name="colorBox">
          <h3>Box shadow</h3>
          <input type="range" name="tl2" value="0" min="-50" max="50">
          <input type="range" name="tr2" value="0" min="-50" max="50">
          <input type="range" name="bl2" value="0" min="-50" max="50">
          <input type="range" name="br2" value="0" min="-50" max="50">
          <input type="color" name="color">
          <p id="text"></p>
          <p id="text2"></p>
          <p id="colorText"></p>
      </div>
      <div id="border"></div>
  `;
    tr.append(td);
}




















//////////////////////////////////////////////////////////////////////////////////
// const tl = document.getElementById("tl");
// const tr = document.getElementById("tr");
// const br = document.getElementById("br");
// const bl = document.getElementById("bl");
// const color = document.getElementById("color");
// const border = document.getElementById("border");
// const text = document.getElementById("text");

// tl.addEventListener("input", () => {
//     border.style.borderTopLeftRadius = `${tl.value}px`;
//     updateText();
// });

// tr.addEventListener("input", () => {
//     border.style.borderTopRightRadius = `${tr.value}px`;
//     updateText();
// });

// br.addEventListener("input", () => {
//     border.style.borderBottomRightRadius = `${br.value}px`;
//     updateText();
// });

// bl.addEventListener("input", () => {
//     border.style.borderBottomLeftRadius = `${bl.value}px`;
//     updateText();
// });

// color.addEventListener("input", () => {
//     border.style.backgroundColor = color.value;
//     updateText();
// });

// function updateText() {
//     const values = [];
//     if (tl.value !== "0") values.push(`border-radius: ${tl.value}px`);
//     if (tr.value !== "0") values.push(` ${tr.value}px`);
//     if (br.value !== "0") values.push(` ${br.value}px`);
//     if (bl.value !== "0") values.push(` ${bl.value}px`);
//     if (color.value !== "0") values.push(`; background-color: ${color.value}`);
//     text.innerText = values.join(" ");
// }



////////////////////////////////////////////////////////////////////////////////////////////////

// const tl = document.getElementById("tl");
// const tr = document.getElementById("tr");
// const br = document.getElementById("br");
// const bl = document.getElementById("bl");
// const color = document.getElementById("color");
// const border = document.getElementById("border");
// const text = document.getElementById("text");

// tl.addEventListener("input", updateText);
// tr.addEventListener("input", updateText);
// br.addEventListener("input", updateText);
// bl.addEventListener("input", updateText);
// color.addEventListener("input", updateText);

// function updateText() {
//     border.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`;
//     border.style.backgroundColor = color.value;

//     const values = [];
//     if (tl.value !== "0") values.push(`tl: ${tl.value}px`);
//     if (tr.value !== "0") values.push(`tr: ${tr.value}px`);
//     if (br.value !== "0") values.push(`br: ${br.value}px`);
//     if (bl.value !== "0") values.push(`bl: ${bl.value}px`);
//     if (color.value !== "0") values.push(`color: ${color.value}px`);

//     if (values.length > 0) {
//         text.innerText = values.join(", ");
//     } else {
//         text.innerText = "";
//     }
// }



///////////////////////////////////////////////////////////////////////////////////////////////
// const tl2 = document.getElementById("tl2");
// const tr2 = document.getElementById("tr2");
// const br2 = document.getElementById("br2");
// const bl2 = document.getElementById("bl2");
// const color2 = document.getElementById("color2");
// const border2 = document.getElementById("border2");
// const text2 = document.getElementById("text2");

// tl2.addEventListener("input", updateText);
// tr2.addEventListener("input", updateText);
// br2.addEventListener("input", updateText);
// bl2.addEventListener("input", updateText);
// color2.addEventListener("input", updateText);

// function updateText() {
//     border2.style.boxShadow = `${tl2.value}px ${tr2.value}px ${br2.value}px ${bl2.value}px`;
//     border2.style.backgroundColor = color2.value;

//     const values = [];
//     if (tl2.value !== "0") values.push(`tl2: ${tl2.value}px`);
//     if (tr2.value !== "0") values.push(`tr2: ${tr2.value}px`);
//     if (br2.value !== "0") values.push(`br2: ${br2.value}px`);
//     if (bl2.value !== "0") values.push(`bl2: ${bl2.value}px`);
//     if (color2.value !== "0") values.push(`color: ${color2.value}`);

//     if (values.length > 0) {
//         text2.innerText = values.join(", ");
//     } else {
//         text2.innerText = "";
//     }
// }














// const tl = document.getElementById("tl");
// const tr = document.getElementById("tr");
// const br = document.getElementById("br");
// const bl = document.getElementById("bl");
// const color = document.getElementById("color");
// const border = document.getElementById("border");
// const text = document.getElementById("text");

// tl.addEventListener("input", updateText);
// tr.addEventListener("input", updateText);
// br.addEventListener("input", updateText);
// bl.addEventListener("input", updateText);
// color.addEventListener("input", updateText);

// const tl2 = document.getElementById("tl2");
// const tr2 = document.getElementById("tr2");
// const br2 = document.getElementById("br2");
// const bl2 = document.getElementById("bl2");
// const color2 = document.getElementById("color2");
// const border2 = document.getElementById("border2");
// const text2 = document.getElementById("text2");

// tl2.addEventListener("input", updateText);
// tr2.addEventListener("input", updateText);
// br2.addEventListener("input", updateText);
// bl2.addEventListener("input", updateText);
// color2.addEventListener("input", updateText);

// function updateText() {
//     if (tl.value !== "0" || tr.value !== "0" || br.value !== "0" || bl.value !== "0") {
//         border.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`;
//         const values = [];
//         if (tl.value !== "0") values.push(`tl: ${tl.value}px`);
//         if (tr.value !== "0") values.push(`tr: ${tr.value}px`);
//         if (br.value !== "0") values.push(`br: ${br.value}px`);
//         if (bl.value !== "0") values.push(`bl: ${bl.value}px`);
//         if (color.value !== "0") values.push(`color: ${color.value}`);
//         text.innerText = values.join(", ");
//     } else {
//         border.style.borderRadius = "0";
//         text.innerText = "";
//     }

//     if (tl2.value !== "0" || tr2.value !== "0" || br2.value !== "0" || bl2.value !== "0") {
//         border2.style.boxShadow = `${tl2.value}px ${tr2.value}px ${br2.value}px ${bl2.value}px`;
//         const values2 = [];
//         if (tl2.value !== "0") values2.push(`tl2: ${tl2.value}px`);
//         if (tr2.value !== "0") values2.push(`tr2: ${tr2.value}px`);
//         if (br2.value !== "0") values2.push(`br2: ${br2.value}px`);
//         if (bl2.value !== "0") values2.push(`bl2: ${bl2.value}px`);
//         if (color2.value !== "0") values2.push(`color: ${color2.value}`);
//         text2.innerText = values2.join(", ");
//     } else {
//         border2.style.boxShadow = "none";
//         text2.innerText = "";
//     }

//     border.style.backgroundColor = color.value;
//     border2.style.backgroundColor = color2.value;
// }
