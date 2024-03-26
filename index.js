let cats =["Milo","Otis","Garfield",]
function destructivelyAppendCat(name){
     cats.push("Ralph")
}
function destructivelyPrependCat(name){
      cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
     cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(name){
     return cats.shift("Milo")
}
function appendCat (name) {
    return [...cats, name];
  }
  
  function prependCat (name) {
    return [name, ...cats];
  }
  
  function removeFirstCat () {
    return cats.slice(1);
  }
  
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }