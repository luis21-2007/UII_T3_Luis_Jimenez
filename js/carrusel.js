let indice = 0;
let imagenes = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"]
document.getElementById("siguiente").addEventListener("click", () =>{
    if (indice < 4){
        indice ++;

    }
    document.getElementById("imagen").setAttribute("src",imagenes[indice]);
});
document.getElementById("anterior").addEventListener("click", () => {
    if (indice >0) {
        indice--;

    }
    document.getElementById("imagen").setAttribute("src", imagenes[indice]);
});