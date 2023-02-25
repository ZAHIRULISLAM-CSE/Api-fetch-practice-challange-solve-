// const getCountry=()=>{
//     fetch("https://restcountries.com/v3.1/all")
//     .then(response => response.json())
//     .then(data => display(data));
// }

// getCountry();

// const display=(data)=>{
//     data.forEach(singleData=>{
//         const region=singleData.region;
//         getRegion(region);
//     })
// }

const getRegion=(region)=>{
    url=`https://restcountries.com/v3.1/region/${region}`
    fetch(url)
    .then(response => response.json())
    .then(data => regionCountry(data))
}

const regionCountry=(regionData)=>{
    document.getElementById("container").innerHTML="";
    regionData.forEach(singleData=>{
        // console.log(singleData.name.common);
        const name=singleData.name.common;
        const parent=document.getElementById("container");
        const li=document.createElement("li");
        li.innerHTML=`
        ${name};
        `
        parent.appendChild(li);
    })
}

//returning name of the region

function getRegionName(id){
    document.getElementById(id).addEventListener("click",function(){
        const value=document.getElementById(id).innerText;
        getRegion(value);
    })
}

getRegionName("asia");
getRegionName("europe");
getRegionName("africa");
getRegionName("americas");
getRegionName("oceania");

