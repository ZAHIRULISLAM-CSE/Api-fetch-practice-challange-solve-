const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  const foundPerson=person.message;
  person.result.forEach( n=>{
    //    console.log(n.name.common);
        const perentDiv=document.getElementById("container");
        const name=n.name.common;
        const age=n.age;
        const street=n.address.street;
        const house=n.address.house;
        const div=document.createElement("div");
        div.innerHTML=`
        <div class="card mb-10 w-96 bg-primary text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">Person Name:${name}</h2>
                  <p>age:${age}</p>
                  <p>Street:${street},House No:${house} </p>
                  <div class="card-actions justify-end">
                  </div>
                </div>
        </div> 
       `
       perentDiv.appendChild(div);
  })
