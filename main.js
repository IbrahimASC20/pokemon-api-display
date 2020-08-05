// Add your code here!
myButton = document.querySelector("button") 
myButton.addEventListener('click',onClick)

function onClick(event) {
    event.preventDefault()
    let user_input = document.querySelector("#pokemon_input")
    let url = ("https://pokeapi.co/api/v2/pokemon/"+user_input.value)
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(myJson) {
            console.log(myJson)
            let name = ("- "+myJson.name)
            let img = myJson.sprites["front_default"]
            let data1 = document.createElement("img")
            let data2 = document.createElement("p")
            data1.src = img
            data2.innerText = name
            let imgport = document.querySelector("#pokemon_image")
            imgport.appendChild(data1)
            let pport = document.querySelector("#pokemon_name")
            pport.appendChild(data2)
    })
    user_input.value=""
}








