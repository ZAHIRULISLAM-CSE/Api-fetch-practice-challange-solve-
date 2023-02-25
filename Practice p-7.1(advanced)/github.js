const getData=()=>{
    url=`https://api.github.com/users?per_page=10`
    fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
}
getData();

const showData=(datas,url)=>{
    datas.forEach(data => {
        const {login,avatar_url,followers_url,html_url}=data;
        console.log(login)
         getFollowersData(followers_url);
        const parent=document.getElementById("container");
        const div=document.createElement("div");
         div.innerHTML=`
         User Name:${login} <br>
         Github Photo:
         <img class= h-[200px] w-[200px] src="${avatar_url}">
         Github Link:${html_url}
         `
         parent.appendChild(div);
    })
}

const getFollowersData=(url)=>{
    fetch(url)
    .then(response => response.json())
    .then(data => showFollowerData(data))
}
const  showFollowerData=(data)=>{
    data= data.slice(0,2);
     data.forEach(singleData => {
        const  url=singleData.avatar_url;
          console.log(url);
     })
}