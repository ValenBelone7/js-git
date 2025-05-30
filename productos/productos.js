let productos = JSON.parse(localStorage.getItem(`productos`)) || []

const agregarProducto = () => {
    const nombre = document.getElementById("nombre").value.trim()
    const categoria = document.getElementById("categoria").value.trim()
    const precio = parseFloat(document.getElementById("precio").value)

    if (nombre === "" || categoria === "" || isNaN(precio)) {
        alert("Todos los campos son obligatorios")
        return
    }

    const nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio
    }

    productos.push(nuevoProducto)

    localStorage.setItem(`productos`, JSON.stringify(productos))

    limpiarFormulario()
    mostrarProductos()
}

const mostrarProductos = () => {
    const tabla = document.getElementById("tablaProductos")
    tabla.innerHTML = ""
    let total = 0

    productos.forEach((producto, index) => {
        const fila = document.createElement("tr")

        const celdaNumero = document.createElement("td")
        celdaNumero.innerText = index + 1

        const celdaNombre = document.createElement("td")
        celdaNombre.innerText = producto.nombre

        const celdaCategoria = document.createElement("td")
        celdaCategoria.innerText = producto.categoria

        const celdaPrecio = document.createElement("td")
        celdaPrecio.innerText = `$${producto.precio.toFixed(2)}`
        total += producto.precio

        const celdaAccion = document.createElement("td")
        const btnEliminar = document.createElement("button")
        btnEliminar.innerText = "Eliminar"
        btnEliminar.onclick = () => eliminarProducto(index)
        celdaAccion.appendChild(btnEliminar)

        fila.appendChild(celdaNumero)
        fila.appendChild(celdaNombre)
        fila.appendChild(celdaCategoria)
        fila.appendChild(celdaPrecio)
        fila.appendChild(celdaAccion)

        tabla.appendChild(fila)
    })

    document.getElementById("total").innerText = `Total acumulado: $${total.toFixed(2)}`
}

const eliminarProducto = (indice) => {
    productos.splice(indice, 1)
    mostrarProductos()
}

const limpiarFormulario = () => {
    document.getElementById("nombre").value = ""
    document.getElementById("categoria").value = ""
    document.getElementById("precio").value = ""
}

document.addEventListener(`DOMContentLoaded`, () => {
    mostrarProductos()
})