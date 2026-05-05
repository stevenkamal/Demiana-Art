function openModal(imgSrc, title, desc, artist, date) {
    document.getElementById('artModal').style.display = "block";
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalArtist').innerText = artist;
    document.getElementById('modalDate').innerText = date;
}

function closeModal() {
    document.getElementById('artModal').style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById('artModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}