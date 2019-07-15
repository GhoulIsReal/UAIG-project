const menuDrop = () => {
    document.getElementById("collapse").classList.toggle("show");
}

window.onclick = function() {
    if(!event.target.matches(".navbar-menu-dropdwn-button")){
        const dropdowns = document.getElementById("collapse");
        if(dropdowns.classList.contains("show")){
            dropdowns.classList.remove("show");
        }
    }
}

