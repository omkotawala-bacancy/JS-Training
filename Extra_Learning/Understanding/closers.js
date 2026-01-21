//Simple closers : Closers are the function that are binded with their lexical scope

// function z() {
//     var b = 900
//     function x(){
//         var a = 7
//         function y() {
//             console.log(a, b);
            
//         }
//         y();
//     }
//     x();
// }
// z();

function x(){
    var i = 10
    setTimeout(function(){
        console.log(i)
    }, 3000)
    var i = 100
    console.log("HEllo Om");
    
}

x();