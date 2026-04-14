document.addEventListener("DOMContentLoaded", () => {

    let btnSideBar = document.getElementById("sidebar-btn");
    btnSideBar.addEventListener("click", toggleSidebar);
    let sideBar = document.getElementById("sidebar");


    function toggleSidebar() {
        if (sideBar) {
            sideBar.classList.toggle("open");
        }
    }

    document.querySelectorAll(".close-navbar").forEach(link => {
        link.addEventListener("click", () => {
            sideBar.classList.remove("open");
        });
    });








    const textAnimations = document.querySelectorAll(".text-anima");
    const observador = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animacion-entry");
                obs.unobserve(entry.target);
            }
        });
    });


    textAnimations.forEach(el => observador.observe(el));


    /* botton seleccionado */
    const btnActive = document.querySelectorAll(".btn-effect");

    function  toggleActive(){
        btnActive.forEach(boton => {
            boton.addEventListener("click" , () =>{
            btnActive.forEach (button => button.classList.remove("active"));
            
            boton.classList.add("active")
        });
    });
    }

    toggleActive();


    const listChanger = document.getElementById("btn-select-1");

        listChanger.addEventListener("click", () =>{
            
            const fixlanding = document.getElementById("fixlanding");
            fixlanding.classList.add("openfixlanding");
        });
});