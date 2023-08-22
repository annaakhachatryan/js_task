const imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
let i = 0
function changeSlide(value) {
    value ? i-- : i++
    i === imgArr.length && (i = 0)
    i < 0 && (i = imgArr.length - 1)
    hover(i)
}
imgArr.forEach((img, i) => {
    items.innerHTML += `<img src='./img/${img}' onclick='hover(${i})'/>`
    dots.innerHTML += `<li onclick='hover(${i})'></li>`
})
function hover(index) {
    orderBox.innerText = `${i + 1} / ${imgArr.length}`

    let images = document.querySelectorAll('img')
    images.forEach(element => { element.classList.remove('imgActive') });
    images[index].classList.add('imgActive')

    let li = document.querySelectorAll('li')
    li.forEach(element => { element.classList.remove('liActive') });
    li[index].classList.add('liActive')

    section.style.backgroundImage = `url(./img/${imgArr[index]})`
    bg.style.backgroundImage = `url(./img/${imgArr[index]})`
    
    i = index

    document.querySelectorAll('img')[i].classList.add('imgActive')
    document.querySelectorAll('li')[i].classList.add('liActive')
}
hover(i)

setInterval(changeSlide, 3000)
