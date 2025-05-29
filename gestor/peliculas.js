let peliculas = []

const agregarPelicula = () => {
    const nuevaPelicula = document.getElementById("nuevaPelicula").value.trim()

    if (nuevaPelicula === "") {
        alert("No se puede agregar una película vacía")
        return
    }

    if (peliculas.includes(nuevaPelicula)) {
        alert("Esa película ya está en la lista")
        return
    }

    peliculas.push(nuevaPelicula)
    alert(`Película agregada: ${nuevaPelicula}`)
    document.getElementById("nuevaPelicula").value = ""
    mostrarPeliculas()
}

const mostrarPeliculas = () => {
    const listaPeliculas = document.getElementById("listaPeliculas")
    listaPeliculas.innerHTML = ''
    peliculas.forEach(pelicula => {
        const li = document.createElement('li')
        li.innerText = pelicula
        listaPeliculas.appendChild(li)
    })
    const contador = document.getElementById("contadorPeliculas")
    contador.innerText = "Total de películas: " + peliculas.length
}

const eliminarPelicula = () => {
    const indice = document.getElementById("indiceEliminar").value
    const posicion = parseInt(indice) - 1

    if (isNaN(posicion) || posicion < 0 || posicion >= peliculas.length) {
        alert("Índice inválido")
        return
    }

    peliculas.splice(posicion, 1)
    alert("Película eliminada")
    mostrarPeliculas()
}

const verNumeradas = () => {
    const listaNumerada = peliculas.map((pelicula, i) => `${i + 1}. ${pelicula}`)
    alert("Películas numeradas:\n" + listaNumerada.join('\n'))
}

const ordenarPeliculas = () => {
    peliculas.sort()
    alert("Películas ordenadas alfabéticamente")
    mostrarPeliculas()
}

const editarPelicula = () => {
    const indice = document.getElementById("indiceEditar").value
    const nuevoNombre = document.getElementById("nuevoNombre").value.trim()
    const posicion = parseInt(indice) - 1

    if (nuevoNombre === "") {
        alert("El nuevo nombre no puede estar vacío")
        return
    }

    if (isNaN(posicion) || posicion < 0 || posicion >= peliculas.length) {
        alert("Índice inválido")
        return
    }

    peliculas[posicion] = nuevoNombre
    alert("Película editada correctamente")
    mostrarPeliculas()
}