// create map
const map = L.map('mapid').setView([-27.213541,-49.6447389], 15);

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

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?d=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')


// create and add marker
L
.marker([-27.213541,-49.6447389], { icon })
.addTo(map)
.bindPopup(popup)
