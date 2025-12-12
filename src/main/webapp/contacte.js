// Aquest missatge apareixerà a la consola del navegador per confirmar que el fitxer s'ha carregat
console.log("El mòdul de contacte s'ha carregat correctament.");

// Funció simple per simular l'enviament del formulari
function enviarDades() {
    // Agafem el valor del camp nom (si existeix)
    let nom = document.getElementsByName("nom")[0].value;
    
    // Mostrem una alerta visual
    if (nom) {
        alert("Gràcies " + nom + "! Hem rebut el teu missatge.");
    } else {
        alert("Missatge enviat correctament!");
    }
}

// Afegim un event al botó d'enviar (opcional, per si vols que faci clic)
document.addEventListener("DOMContentLoaded", function() {
    let boto = document.querySelector("button");
    if(boto) {
        boto.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que la pàgina es recarregui
            enviarDades();
        });
    }
});