function charRemove (value, target ){
if(typeof value != "string" || typeof target != "string"){
    console.error("wrong datatype") 
    return
}
return target.replace(value,"");

}

