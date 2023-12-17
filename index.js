//Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(){
cats.push("Ralph")
return (cats);
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    return (cats);
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
    return(cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
    return(cats);
}
function appendCat(Rose){
    return([...cats, Rose]);

}
function prependCat(Nelly){
    return([Nelly ,...cats]);
}
function removeLastCat(){
    var numberOfCats = cats.slice(0, cats.length-1);
    return (numberOfCats);
}
function removeFirstCat(){
     var latestCats = cats.slice(1);
     return(latestCats);
}
 



    