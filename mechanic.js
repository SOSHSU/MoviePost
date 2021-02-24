var moviesImage = ["https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362","https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg","https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on","https://images.moviepostershop.com/dora-and-the-lost-city-of-gold-movie-poster-1000779403.jpg","https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"]
var moviesNames = ["Black Pather", "After", "Aladdin", "Joker", "Dora", "The Nightingale"]

const display1 = document.querySelector(".movie1")
var poster1 = moviesImage[0]
display1.innerHTML = `<img class = "img" src = ${poster1}>`
const name1 = document.querySelector("#name1")
var title1 = moviesNames[0]
name1.innerHTML = title1


const display2 = document.querySelector(".movie2")
var poster2 = moviesImage[1]
display2.innerHTML = `<img class = "img" src = ${poster2}>`
const name2 = document.querySelector("#name2")
var title2 = moviesNames[1]
name2.innerHTML = title2


const display3 = document.querySelector(".movie3")
var poster3 = moviesImage[2]
display3.innerHTML = `<img class = "img" src = ${poster3}>`
const name3 = document.querySelector("#name3")
var title3 = moviesNames[2]
name3.innerHTML = title3


const display4 = document.querySelector(".movie4")
var poster4 = moviesImage[3]
display4.innerHTML = `<img class = "img" src = ${poster4}>`
const name4 = document.querySelector("#name4")
var title4 = moviesNames[3]
name4.innerHTML = title4


const display5 = document.querySelector(".movie5")
var poster5 = moviesImage[4]
display5.innerHTML = `<img class = "img" src = ${poster5}>`
const name5 = document.querySelector("#name5")
var title5 = moviesNames[4]
name5.innerHTML = title5


const display6 = document.querySelector(".movie6")
var poster6 = moviesImage[5]
display6.innerHTML = `<img class = "img" src = ${poster6}>`
const name6 = document.querySelector("#name6")
var title6 = moviesNames[5]
name6.innerHTML = title6

function addNewMovie()
{
    var newAddress = document.querySelector("#imgAddress").value
    var newName = document.querySelector("#movieName").value
    moviesImage.pop()
    moviesNames.pop()
    moviesImage.unshift(newAddress)
    moviesNames.unshift(newName)
}