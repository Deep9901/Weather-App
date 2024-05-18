const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apiID = "5cc200712e5455a0101ab7704b09dd4b"

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const getData = async (city) => {
    const response = await fetch(apiURL + city + `&appid=${apiID}`)
    var data = await response.json()
    console.log(apiURL + city + `&appid=${apiID}`)
    document.querySelector(".city").innerHTML =   data.name 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmph"
}

searchBtn.addEventListener('click', () => {
    getData(searchBox.value)
})


