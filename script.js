// This is where we'll store all our songs
let playlist = [];

// TASK 1: Complete the Song constructor function
function Song(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
}

// TASK 2: Complete the addSong function
function addSong() {
    // Step 1: Get the input values from the form
    let title = document.getElementById('songTitle').value;
    let artist = document.getElementById('artist').value;
    let duration = document.getElementById('duration').value;

    // Step 2: Check if all inputs have values
    if (title === '' || artist === '' || duration === '') {
        alert('Please fill in all fields!');
        return;
    }

    // Step 3: Create a new Song object using the values
    let newSong = new Song(title, artist, duration);

    // Step 4: Add the new song to the playlist array
    playlist.push(newSong);

    // Step 5: Update the display
    displayPlaylist();

    // Step 6: Clear the input fields
    document.getElementById('songTitle').value = '';
    document.getElementById('artist').value = '';
    document.getElementById('duration').value = '';
}

// TASK 3: Complete the displayPlaylist function
function displayPlaylist() {
    // Step 1: Get the playlist div element
    let playlistDiv = document.getElementById('playlist');
    
    // Step 2: Clear its current contents
    playlistDiv.innerHTML = '';
    
    // Step 3: Loop through the playlist array
    playlist.forEach((song, index) => {
        // Create a new song card element
        let songCard = document.createElement('div');
        songCard.className = 'song-card';
        
        // Add the HTML structure for this song
        songCard.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="duration">${song.duration}</div>
        `;
        
        // Step 4: Add each song card to the playlistDiv
        playlistDiv.appendChild(songCard);
    });
}