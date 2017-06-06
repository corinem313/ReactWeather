function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('only numbers for this function');
        }
    });
}

addPromise(3, 2).then(function(sum){
    console.log('promise success:', sum);
}, function(err){
    console.log('promise error:', err);
});