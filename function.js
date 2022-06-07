


const person ={
    disply: function (email,age) {
        console.log("NAME ::"+this.Fname+"  "+this.lastname+" E-Mail :: "+email+"  Age ::  "+age);
    
    }
}


const person1={
    
    Fname:"Abdul Rehman",
    lastname:"JAMI",
}

person.disply.apply(person1,["abdulrehman jami73@gmail.com",21])
