function receivesAFunction(callback){
    const work = "Did I do this right?"
    callback(work)
}

function returnsANamedFunction(){
    let fn;
    fn = returnsANamedFunction
    return fn
}

function returnsAnAnonymousFunction() {
   return returnsAnAnonymousFunction => console.log('I dont think this is right')
}


