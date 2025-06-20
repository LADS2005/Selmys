document.getElementById("boton2").addEventListener("click", function() {
    this.classList.add("active");
    setTimeout(() => {
        window.location.href = "pagina3.html";
    }, 300);
    });