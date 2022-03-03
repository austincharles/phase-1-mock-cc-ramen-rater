// write your code here
const URL = 'http://localhost:3000/ramens'
const ramenMenu = document.getElementById('ramen-menu')

fetch('URL')
    .then(resp => resp.json())
    .then(renderRamenPhotos)

function renderRamenPhotos(json) {
    const ramenPhotos = json.message
    ramenPhotos.forEach(renderRamenPhoto)
}

function renderRamenPhoto(photoUrl) {
    const photo = document.createElement('img')
    photo.src = photoUrl
    ramenMenu.append(photo)
}