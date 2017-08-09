let a = 1
console.log(a+1);
function baby(something) {
    console.log("I'm a baby",something);
}

function letdeferennce(){   // let 功能字段和 var的区别  
    let x = 1; 
    if (true){
        let  x = 2;
        console.log(x);     //x=2 
    }
    console.log(x);  // x=1
}                          //  总结   var  还是要牛逼一些  let一点都不懂


baby("无fuck说");
console.log("waka waka ","wola wola");
letdeferennce();