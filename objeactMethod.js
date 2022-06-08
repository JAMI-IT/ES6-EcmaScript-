const person={

    F_Name : "Abdul Rehman",
    L_NAme : "Jami",
    Age:21,

    FullName :function (){
        console.log(("Full Name :: "+this.F_Name+"  "+this.L_NAme+"  AGE :: ").toUpperCase()+this.Age);
    }
};

person.FullName();

//----------Display the Object -----------------------
console.log(person);

//---------We Can Convert the object into array by using the obejct.value Operator ---------------

const myarray=Object.values(person);
console.log(myarray);

const string=JSON.stringify(person);
console.log(string);

// const vari=JSON.parse(person);
// console.log(vari);

const person1={

    F_Name : "Abdul Rehman",
    L_NAme : "Jami",
    Age:"",
    set ag(a){
        return this.Age=a;
    }
   
};

person1.ag=23;

console.log(person1.Age);

