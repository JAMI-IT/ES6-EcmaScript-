//------------Creating the new map vaiable---------------------------

console.log("---------------------------------------------------------------");
const person=new Map(
    [
        ["Jami",21],
        ["Humayu",22],
        ["Shahjahan",28]
    ]
)
console.log(person);


//----------------Map() Operation By using the set Operator================

console.log("---------------------------------------------------------------");
const fruit=new Map();

fruit.set("Apple",300);
fruit.set("Orange",900);
fruit.set("Mango",600);
fruit.set("BAnana",700);
let v=fruit.get("Mango");
console.log(v);

//-----------We can use set method to change the map value=================
fruit.set("Orange",100);
console.log(fruit);

console.log("---------------------------------------------------------------");
console.log(fruit.size);

//--------------------------has Operator to check if the value is exist in the map=------------\
console.log("---------------------------------------------------------------");
fruit.delete("BAnana");
console.log(fruit.has("BAnana"));


//--------------------------For Each Operator is used to Display the Map Data-------------------

console.log("---------------------------------------------------------------");
fruit.forEach(function(value,key)
{
    console.log(key+" = "+value);
})
console.log("---------------------------------------------------------------");

let sum=0;
fruit.forEach(function(value)
{
sum=sum+value;
})
console.log(sum);

console.log("---------------------------------------------------------------");

let text="";
for (const x of fruit.entries() ){
    text +=x;
}
console.log(text);


