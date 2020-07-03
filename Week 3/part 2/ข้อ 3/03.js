let setTimeoutAndLog = function(input){
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            console.log(input)
            resolve(input)
        }, 1000);
    })
}
let all_setTimeout = async ()=>{
    await setTimeoutAndLog("a")
    await setTimeoutAndLog("b")
    await setTimeoutAndLog("c")
    await setTimeoutAndLog("d")
}
all_setTimeout()
