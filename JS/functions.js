const input_height = document.querySelector('#height')
const input_weight = document.querySelector('#weight')

const result_output = document.querySelector('output')
const button = document.querySelector('button')

button.addEventListener('click',() => {
    const height = input_height.value
    const weight = input_weight.value
    //console.log(height)
    //console.log(weight)
    if (height >= 1 && height <=2.5) {
        if (weight >= 10 && weight <=300) {
            const result = weight/ (height * height)
            result_output.innerHTML = result.toFixed(1)    
        } else {
            alert("Painon pitää olla välilllä 10-300")
        }
    } else {
        alert("Pituuden pitää olla välillä 1-2.5")
    }
})
