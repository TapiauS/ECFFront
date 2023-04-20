const gamedropdown=document.querySelector("#gamedropdown");
const borrowstart=document.querySelector("#start");
const borrowend=document.querySelector("#return");
const valid=document.querySelector("#validation");
const selectalert=document.querySelector("#selectalert");
const datealert=document.querySelector('#timealert')
const startdefaultstyle=borrowstart.style;
const enddefaultstyle=borrowend.style;
const gamedropdowndefaultstyle=gamedropdown.style;

fetch('https://api.npoint.io/00f2a23cb6d801c23643').
        then(result=>result.json()).
        then(json=>json.games.forEach(jeu => {
            gamedropdown.insertAdjacentHTML( 'beforeend',`<option value=${jeu.title}'>${jeu.title}</option>`);
        })
        )
        .catch(err=>alert("le lien de greg est cassé"));

valid.addEventListener("click",click=>{
    click.preventDefault();
    let success=true;
    const startddate=new Date(borrowstart.value);
    const enddate=new Date(borrowend.value);
    console.log(Date.parse(startddate));
    console.log(Date.parse(enddate));
    datevalide=(Date.parse(startddate)-Date.parse(enddate)<0)
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
    if(success){
        alert("Jeu loué avec succés");
        borrowstart.style=startdefaultstyle;
        borrowend.style=enddefaultstyle;
        gamedropdown.style=gamedropdowndefaultstyle;
        selectalert.style.display="none";
        datealert.style.display="none";
    }
})
