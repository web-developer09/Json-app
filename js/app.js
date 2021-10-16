"use strict";
const uzs=document.querySelector("#uzs");
const usd=document.querySelector("#usd");
const eur=document.querySelector("#eur");
const rub=document.querySelector("#rub");

 uzs.addEventListener('input',()=>{
    const request=new XMLHttpRequest();
    request.open('GET','js/current.json');
    request.setRequestHeader('Content-type','app/json');
    request.send();


    request.addEventListener('load',()=>{
        // const inFo=request.response;
        // console.log(inFo);

        if(request.readyState===4 && request.status===200){
      const reuz=JSON.parse(request.response)
         usd.value=+(uzs.value/reuz.current.usd).toFixed(2);
         eur.value=+(uzs.value/reuz.current.eur).toFixed(2);
         rub.value=+(uzs.value/reuz.current.rub).toFixed(2);
        }else{
            uzs.value="error";
    }


    } );





})
