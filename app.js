let url = "https://catfact.ninja/fact?max_length=140"
let btn = document.querySelector("button")

btn.addEventListener("click", async()=>{
    console.log("button was clicked")
    let fact = await getFacts()
    console.log(fact)
    let p = document.querySelector('#result')
    p.innerText = fact;
})


async function getFacts() {
    try{
        let res = await axios.get(url)
        // console.log(res.data.fact)
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e)
        return "No fact found"
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random"

let btn2 = document.querySelector("#dogs")

btn2.addEventListener("click", async()=>{
    console.log("Button two was clicked")
    let res = await getFacts2()
    
    let img = document.querySelector('#dogImg')
    img.src = res
})

async function getFacts2() {
    try{
        let res = await axios.get(url2)
        return res.data.message;
    }
    catch{
        console.log("Error-", e)
        return "No fact found"
    }
}