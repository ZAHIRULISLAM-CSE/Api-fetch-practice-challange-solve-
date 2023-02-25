const getData=(value)=>{
    const url=`https://restcountries.com/v3.1/capital/${value}`
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data[0]))
}

const setData=(data)=>{
    document.getElementById("country").innerText="";
   const city=data.name.common;
   const parent=document.getElementById("country");
   const p=document.createElement("p");
   p.innerHTML=`
   ${city}
     `
  parent.appendChild(p);
}

document.getElementById("btn-input").addEventListener("click",function(){
   const value= document.getElementById("input-text").value;
   getData(value);
   
})