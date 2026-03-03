document.addEventListener("DOMContentLoaded", () =>{

    let btnSideBar = document.getElementById("sidebar-btn");
    btnSideBar.addEventListener("click",toggleSidebar);
    let sideBar = document.getElementById("sidebar");


    function toggleSidebar(){
        if(sideBar){
            sideBar.classList.toggle("open");
        }
    }

    document.querySelectorAll(".close-navbar").forEach(link => {
        link.addEventListener("click", () => {
        sideBar.classList.remove("open");
    });
    });








    const textAnimations = document.querySelectorAll(".text-anima");
    const observador = new IntersectionObserver((entries,obs) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add("animacion-entry");
                obs.unobserve(entry.target);
            }
        });
    });


    textAnimations.forEach(el => observador.observe(el));

});