const getAdvice=()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => displayAdvice(data));
}

getAdvice();

const displayAdvice=(data)=>{
    const randomAdvice=data.slip.advice;
    const parent=document.getElementById("container");
    const p=document.createElement("p");
    p.innerHTML=`
    ${randomAdvice};
    `
    parent.appendChild(p);
}

//advice by id

const getAdviceById=(value)=>{
    fetch(`https://api.adviceslip.com/advice/${value}`)
    .then(response => response.json())
    .then(data => displayAdviceById(data));
}

const displayAdviceById=(data)=>{
    document.getElementById("id-container").innerHTML="";
    const randomAdvice=data.slip.advice;
    const parent=document.getElementById("id-container");
    const p=document.createElement("p");
    p.innerHTML=`
    ${randomAdvice};
    `
    parent.appendChild(p);
}

//inout field value
document.getElementById("input-btn").addEventListener("click",function(){
    const value=document.getElementById("id").value;
    getAdviceById(value);
})