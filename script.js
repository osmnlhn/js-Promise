const box =document.querySelector(".box");

/* setTimeout(()=>{

    box.classList.add("bigger")

    setTimeout(()=>{
        box.classList.add("circle");
    
        setTimeout(()=> {
            box.classList.add("move")

            setTimeout(()=>{
                box.classList.add("colored")

                setTimeout(()=>{
                    box.classList.remove("colored")

                    setTimeout(()=>{
                        box.classList.remove("move")

                        setTimeout(()=>{
                            box.classList.remove("circle")
                        },500)
                    },500)
                },500)

            },500)

        },500)
    
    },500)

},500)
*/


/*
new Promise ((resolve,reject)=>{
    // if processs is correct,

    resolve({
        name:"osman",
        surname:"ilhan",
     })

    reject ("Fail")

    .then(data=>{

       data.web="google.com" ;
       return data;
    })

    .then(data=>console.log(data))
    
    .catch(data=>{console.log(data)})

})
.finally(()=>console.log("Finally Done"))
*/

const wait=ms=> new Promise(resolve=>setTimeout(resolve,ms))

wait(500)
.then (()=>{
    console.log("Start")
})
.then (()=>{
    box.classList.add("bigger")
    return wait(500);
})

.then (()=>{
    box.classList.add("circle")
    return wait(500)
})

.then(()=>{
    box.classList.add("move")
    return wait(500);
})

.then(()=>{

    box.classList.add("colored")
    return wait(500)
})

.then (()=>{
    box.classList.remove("colored")
    return wait(500)
})

.then (()=>{
    box.classList.remove("move")
    return wait(500)
})

.then(()=>{
    box.classList.remove("circle")
    return wait(500)
})

.then(()=>{
    box.classList.remove("bigger")
    return wait(500)
})

.finally (()=> console.log("Done"))


