const add = (a,b)=>{

return new Promise((resolve,reject)=>{

resolve(a+b)
})


}


const sum = async()=>{
const sum1 = await add(10,20)
const sum2 = await add(10,sum1)
const sum3 = await add(20,sum2)
return sum3
}

sum().then((res)=>{

console.log(res)
})




const book = async ()=>{

return 'jitendra'

}

book().then((res)=>{
console.log(res)
})

//console.log(book())