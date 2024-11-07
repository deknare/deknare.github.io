// Change song function to switch audio source
function changeSong(song) {
    const audioPlayer = document.getElementById('music-player');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = 'uploads/' + song; // Update the audio source
    audioPlayer.load(); // Reload the new song
    audioPlayer.play(); // Play the new song
}

// Refresh the playlist function
function refreshPlaylist() {
    const playlist = document.getElementById('playlist');
    playlist.innerHTML = ''; // Clear existing playlist

    // Fetch the files again from the server
    fetch('upload.php') // Call the PHP script to get the file list
        .then(response => response.text())
        .then(data => {
            playlist.innerHTML = data; // Update the playlist with the new content
        });
}

// Call refreshPlaylist on page load to display the latest uploads
window.onload = function() {
    refreshPlaylist(); // Refresh the playlist on page load
};

// Add event listener to the upload form submission
document.getElementById('upload-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(this); // Create FormData object

    // Perform the fetch request to upload the file
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Optional: log the response
        refreshPlaylist(); // Refresh the playlist after upload
    })
    .catch(error => console.error('Error uploading file:', error));
};
