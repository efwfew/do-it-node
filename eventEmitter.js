process.on('tick', function(count){ 
    console.log('tick runs: %s', count)
})

console.log('tick event is sent after 3 sec')

setTimeout(function(){
    process.emit('tick', '3');
}, 3000);

