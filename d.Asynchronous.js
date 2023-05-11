function checkMoneyBuyCar (money){
    return new Promise((resolve, reject)=>{
        if(money<100){
            reject(`Not Enough Money...`)
        } else {
            resolve(`You Can Buy Car which you choose...`)
        }
    })
}
let moneyBuyCar = 99;
checkMoneyBuyCar(moneyBuyCar).then(
    result => {
        console.log(result)
    }
).catch(
    err =>{
        console.log(err)
    }
)
