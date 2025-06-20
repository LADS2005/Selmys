document.getElementById("boton").addEventListener("click", function() {
    this.classList.add("active");
    setTimeout(() => {
        window.location.href = "pagina2.html";
    }, 300);
});