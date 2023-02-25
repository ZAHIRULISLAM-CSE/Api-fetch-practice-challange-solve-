const loadData=(value)=>{
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    fetch(url)
    .then(response => response.json())
    .then(data =>  displayData(data[0]))
    .catch(error=>{
        document.getElementById("container").innerHTML="No data Found";
    })
}

const displayData=(data)=>{
    console.log(data);
    const {word}=data;
    const partsOfSpeech=data.meanings[0].partOfSpeech;
    const meaning1=data.meanings[0].definitions[0].definition;
    // const synonyms=data.meanings[0].synonyms[0];
    // console.log(synonyms)
    let audio;
    if(data.phonetics[0].audio != ""){
         audio=data.phonetics[0].audio;
    }
    else if(data.phonetics[1].audio != ""){
        audio=data.phonetics[1].audio;
    }
    else{
        audio=data.phonetics[2].audio;
    }
    // let synonyms=data.meanings[2].synonyms[0];
    let synonyms="";
    if(data.meanings[0].synonyms.length !=0){
        synonyms=data.meanings[0].synonyms[0];
        console.log(synonyms,1);
    }
    else if(typeof(data.meanings[1])=="undefined"){
        synonyms="no synonym found";
    }
    else if( data.meanings[1].synonyms.length !=0){
        synonyms=data.meanings[1].synonyms[0];
        console.log(synonyms,2);
    }
    else if( typeof  (data.meanings[2])=="undefined"){
        synonyms="no synonym found";
    }
    else if(data.meanings[2].synonyms.length !=0){
        synonyms=data.meanings[2].synonyms[0];
        console.log(synonyms,3);
    }
    else if( typeof  (data.meanings[3])=="undefined"){
        synonyms="no synonym found";
    }
    else if(data.meanings[3].synonyms.length !=0){
        synonyms=data.meanings[3].synonyms[0];
        console.log(synonyms,4);
    }
    else{
        synonyms="no synonym found";
    }
    console.log(synonyms)
    //showing these data 
    document.getElementById("container").innerHTML="";
    const parent=document.getElementById("container");
    const div=document.createElement("div");
    div.innerHTML=`
    <h1 class="text-4xl">${word}</h1>
    <h1 class="text-2xl">${partsOfSpeech}</h1>
    <h1 class="text-2xl">Meaning:${meaning1}</h1>
    <h1 class="text-2xl">Synonym:${synonyms}</h1>
    <audio controls>
    <source src="${audio}" type="audio/mpeg">
    </audio
    `
    parent.appendChild(div);


 }

document.getElementById("input-btn").addEventListener("click",function(){
     const value =document.getElementById("search-box").value;
     loadData(value);
})