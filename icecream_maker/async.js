
let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["choclate","peanuts"]
}

let is_shop_open = true;
/* 
let order = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve()
        }
        else{
            reject()
        }
    })
}


order()
.then()
.then()
.then()
.catch()
.finally()
 */


async function order (){ 
    try{
        await abc;
    }
    catch(error){
        console.log("abc doesnt exist ",error);
    }
    finally{
        console.log("runs code anyways");
    }
}

order().then(()=>{
    console.log("ha ha ha");
})