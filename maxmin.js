var arr=[12,32,43,22,1,45,42]
//==-============To Find Min value From The array======
arr.sort(function(a,b){return a-b})
console.log("Minimum Value :: "+arr[0]);

//==========To Find the MAx Value From The Array===========
arr.sort(function(a,b){return b-a})
console.log("MAximum Value :: "+arr[0]);


function max(arr){
    return Math.max.apply(null,arr);
}
let d=max(arr)
console.log(d);


function min(arr)
{
    return Math.min.apply(null,arr);
}
let m=min(arr);
console.log(m);

