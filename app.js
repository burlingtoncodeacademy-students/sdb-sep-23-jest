const res = {
    name: "Paul",
    age: 27,
    career: "comedian"
}

const teamCaptain = ["Captain America", "Bucky", "Hawkeye"]

const sampleError = () => {
    throw new SyntaxError("Sample random error")
}

async function getData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    return await res.json()
}

const promiseSample = function() {
    const flag = true
    return new Promise((resolve, reject) => {
        flag ? resolve("Promise resolved yo") : reject("Promise rejected fool!")
    })
}

module.exports = {res, teamCaptain, sampleError, getData, promiseSample}