const options = {
    dragging: false,
    touchZoon: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false, 
}

// create map
const map = L.map('mapid', options).setView([-27.213541,-49.6447389], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconArchor: [29, 68],
    popupArchor: [170, 2],
})


// create and add marker
L
.marker([-27.213541,-49.6447389], { icon })
.addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .atvive
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeactiveclass)

    function removeactiveclass(button) {
        button.classList.remove("active")
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // add a classe .ative para este botão
    button.classList.add("active")
}