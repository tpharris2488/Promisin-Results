// const promise = slowMath.add(6, 2)
//     .then(a => {
//     console.log(a);   //8
//     return slowMath.multiply(a, 2);
//     })
//     .then(b => {
//         console.log(b);   //16
//         return slowMath.divide(b, 4)
//     })
//     .then(c => {
//         console.log(c)
//         return slowMath.subtract(c, 3)
//     })
//     .then(d => {
//         console.log(d)        //1
//         return slowMath.add(d, 98)
//     })
//     .then(e => {
//         console.log(e);       //99
//         return slowMath.remainder(e, 2)
//     })
//     .then(f => {
//         console.log(f);
//        return slowMath.multiply(f, 50)
//     })
//     .then(g => {
//         console.log(g);
//         return slowMath.remainder(g, 40)
//     })
//     .then(h => {
//         console.log(h);
//         return slowMath.add(h, 32)
//     })
//     .then(i => {
//         console.log(`The final result is ${i}`)
//     })

//     promise.catch((error) => {
//         console.error(error)
//     })

async function doMath(){
    try{ let result = await slowMath.add(6, 2)
    console.log(result)

    let result2 = await slowMath.multiply(result, 2)
    console.log(result2)

    let result3 = await slowMath.divide(result2, 4)
    console.log(result3)

    let result4 = await slowMath.subtract(result3, 3)
    console.log(result4)

    let result5 = await slowMath.add(result4, 98)
    console.log(result5)

    let result6 = await slowMath.remainder(result5, 2)
    console.log(result6)

    let result7 = await slowMath.multiply(result6, 50)
    console.log(result7)

    let result8 = await slowMath.remainder(result7, 40)
    console.log(result8)

    let result9 = await slowMath.add(result8, 32)

    console.log(`The final result is ${result9}`)
    } catch(err) {
        console.error(err)
    }
}

doMath();
