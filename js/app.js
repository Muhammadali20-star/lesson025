// ====================================== 1-Masala =================================================

const btnEI = document.querySelector("button")
let offset = 0

btnEI.addEventListener("click", ()=>{
    offset++
    btnEI.innerHTML = `
    Sanoq: ${offset}
    `
    btnEI.addEventListener("dblclick", ()=>{
        offset = 0
        btnEI.innerHTML = `
        Sanoq: ${offset}
        `
    })
})

// ====================================== 1-Masala =================================================


// ====================================== 2-Masala =================================================

const wrapperEI = document.querySelector(".wrapper")
const btnEi  = document.querySelector(".btn")

btnEi.addEventListener("click",()=>{
    let p = document.createElement("p")
    p.innerHTML = `
    <p>John Doe 2001 amerika</p>
    `
    wrapperEI.appendChild(p)
})

// ====================================== 2-Masala =================================================


// ====================================== 3-Masala =================================================

const formEi = document.querySelector("form")
const inputFnameEi = document.querySelector(".fname")
const inputLnameEi = document.querySelector(".lname")
const tbodyEI = document.querySelector("tbody")


let index = 1
formEi.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(!inputFnameEi.value.trim()){
        return null
    } else if(!inputLnameEi.value.trim()){
        return null
    }
    let tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${index}</td>
    <td>${inputFnameEi.value}</td>
    <td>${inputLnameEi.value}</td>
    `
    tbodyEI.appendChild(tr)
    index++
    inputFnameEi.value = "";
    inputLnameEi.value = "";
    
})

// ====================================== 3-Masala =================================================



    







