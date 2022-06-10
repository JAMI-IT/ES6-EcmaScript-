// var arr=[1,3,2,1,3,4,5,1,1];
// const narr=[];
// narr.push(arr);

// console.log("jhekei");
// narr.forEach(element => {
//     console.log(narr[element]);
// });

// for (let i = 0; i < array.length; i++) {
// }

var first = [];
var second = [4, 5,4,23,5,23,5,2,3,4,2,23];
console.log(second.filter((value,index)=>second.indexOf(value)==index));
console.log([...new Set(second)])
 
// for (var i of second) {
//     first.push(i);
// }
// for (const a of second) {
//     if(second[a]==first[])
// }
/* 
for (let i = 0; i < second.length; i++) {
    first.push(second[i])
    first.forEach(element => {
        
        if (first[element]==second[i]) {
           first[element]=Math.random();
        }
    });
}

console.log(first); */