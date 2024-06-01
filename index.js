var p = new Promise(function(resolved){
    setTimeout(function(){
        resolved("foo")
    },10000)
})

function callbacks(){
    console.log(p)
}

p.then(callbacks)