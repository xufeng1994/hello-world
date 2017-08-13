function issingle(human){
    if (human == "man"){
        console.log("男厕所")
    }
    else if(human == "woman"){
        console.log("女厕所")
    }
    else if (human =! "man"||"woman"){
         console.log("不男不女厕所")
        }
}
var a = "man";
var b = "woman";
var c = "kid";
issingle(c);
issingle(a);
issingle(b);