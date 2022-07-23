
let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["choclate","peanuts"]
}

let is_shop_open = true;

let order = (time,work) => {
    return new Promise( (resolve,reject) => {
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
            
        }
        else{
            reject(console.log("our shop is closed"))
        }
    } )
}


//promise chaining

order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(0000, () => console.log("production has started "))
})
.then(()=>{
    return order(2000, ()=> console.log("the food was chopped"))
})
.then(()=>{
    return order(1000,()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})
.then(()=>{
    return order(1000,()=> console.log("start the machine"))
})

.then(()=>{
    return order(2000,()=> console.log(` ice cream placed on${stocks.holder[0]}`))
})

.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings[0]} was selected`)
    })
})

.then(()=>{
    return order(1000,()=>{
        console.log(`ice cram was served`)
    })
})

.catch(()=>{
    console.log("customer left");
})

.finally(()=>{
    console.log("our shop is closed");
})

/*

let order = (Fruit_name,call_production) => {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    },2000)
    
}


let prodcution = () =>{
    setTimeout(()=>{
        console.log("production has started");

        setTimeout(()=>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
            setTimeout(()=>{
                console.log(`the machine was started`);

                setTimeout(()=>{
                    console.log(`ice cream was placed on${stocks.holder[0]} `);

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was added as toppings`);

                        setTimeout(()=>{
                            console.log("serve ice cream");
                        },2000)
                    },3000)
                },2000)
            },1000)
        },1000)
        },2000)
    },0000)
    
};

order(0,prodcution)  */