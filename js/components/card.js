export default function Card(props) {
    const offcanva=document.querySelector('#gameinfo');

    const fillOffCanvas=()=>{
        offcanva.innerHTML=                
        `<div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">${props.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="row">
                <div class="col-12 col-md-6">
                    <p> Date de sortie :<br> ${props.year}</p>
                </div>
                <div class="col-12 col-md-6">
                    <p> Genre :<br> ${props.genre}</p>
                </div>
                <div class="col-12 col-md-6">
                    <p> Auteur :<br> ${props.designer}</p>
                </div>
                <div class="col-12 col-md-6">
                    <p> Nombre de joueur :<br> ${props.players}</p>
                </div>
                <div class="col-12">
                    <img src="${props.image}" alt="...">
                </div>
                <div class="col-12">
                    <p>${props.info}</p>
                </div>
            </div>
        </div>`
    };


    return             <div class="col-6 col-md-3 mt-5">
    <div class="card" style="width: 18rem" id={props.title}>
        <img src={props.image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text"></p>
            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#gameinfo" role="button" onClick={fillOffCanvas}>
                Plus d'info
            </a>
        </div>
    </div>
</div>
};
