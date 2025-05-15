const input = document.getElementById("participante-nuevo");
const boton = document.getElementById("btn-agregar");
const error = document.getElementById("error-message");
const lista = document.getElementById("participantes");

boton.addEventListener("click", () => {
    const nombre = input.value.trim();

    if (nombre === "") {
        error.innerText = "Ingreso inválido";
        return;
    } else {
        error.innerText = "";
    }

    // Crear elementos
    const li = document.createElement("li");
    const spanNombre = document.createElement("span");
    spanNombre.textContent = nombre;

    const btnPresente = document.createElement("button");
    btnPresente.textContent = "Presente";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnPresente.addEventListener("click", () => {
        spanNombre.classList.toggle("presente");
    });

    btnEliminar.addEventListener("click", () => {
        lista.removeChild(li);
    });

    li.appendChild(spanNombre);
    li.appendChild(btnPresente);
    li.appendChild(btnEliminar);

    lista.appendChild(li);
    input.value = "";
});
