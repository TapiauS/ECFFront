const gamedropdown=document.querySelector("#gamedropdown");
const borrowstart=document.querySelector("#start");
const borrowend=document.querySelector("#return");
const valid=document.querySelector("#validation");
const selectalert=document.querySelector("#selectalert");
const datealert=document.querySelector('#timealert');
const toofaralert=document.querySelector('#toofaralert');
const startdefaultstyle=borrowstart.style;
const enddefaultstyle=borrowend.style;
const gamedropdowndefaultstyle=gamedropdown.style;

fetch('https://api.npoint.io/33fe536f3a3bc2f018fb').
        then(result=>result.json()).
        then(json=>json.games.forEach(jeu => {
            gamedropdown.insertAdjacentHTML( 'beforeend',`<option value=${jeu.title}'>${jeu.title}</option>`);
        })
        )
        .catch(err=>alert("le lien de greg est cassé"));

valid.addEventListener("click",click=>{
    click.preventDefault();
    const ONE_YEAR_IN_MILLISECONDS = 31536000000;
    let success=true;
    const startddate=new Date(borrowstart.value);
    const enddate=new Date(borrowend.value);
    datevalide=(Date.parse(startddate)-Date.parse(enddate)<0);
    toofar=enddate-startddate<ONE_YEAR_IN_MILLISECONDS;
    if(gamedropdown.value===""){
        success=false;
        selectalert.style.display="block";
        gamedropdown.style.border="1px solid red";
    }
    if(!datevalide){
        success=false;
        borrowstart.style.border="1px solid red";
        borrowend.style.border="1px solid red";
        datealert.style.display="block";
    }
    else{
        success=true;
        borrowstart.style.border=startdefaultstyle;
        borrowend.style.border=enddefaultstyle;
        datealert.style.display="none";
    }
    if(!toofar){
        success=false;
        borrowstart.style.border="1px solid red";
        borrowend.style.border="1px solid red";
        toofaralert.style.display="block";
    }
    if(success){
        alert("Jeu loué avec succés");
        borrowstart.style=startdefaultstyle;
        borrowend.style=enddefaultstyle;
        gamedropdown.style=gamedropdowndefaultstyle;
        selectalert.style.display="none";
        datealert.style.display="none";
        toofaralert.style.display="none";
    }
});
