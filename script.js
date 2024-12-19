// This is where we'll store all our songs
let playlist = [];

// TASK 1: Complete the Song constructor function
function Song(title, artist, duration) {
    // Add code here to create a song object
    // Hint: use 'this' keyword to set properties
}

// TASK 2: Complete the addSong function
function addSong() {
    // Step 1: Get the input values from the form
    // Hint: use document.getElementById to get each input field's value

    // Step 2: Check if all inputs have values
    // If any are empty, show an alert and return

    // Step 3: Create a new Song object using the values

    // Step 4: Add the new song to the playlist array

    // Step 5: Update the display

    // Step 6: Clear the input fields
}

// TASK 3: Complete the displayPlaylist function
function displayPlaylist() {
    // Step 1: Get the playlist div element
    let playlistDiv = document.getElementById('playlist');
    
    // Step 2: Clear its current contents
    playlistDiv.innerHTML = '';
    
    // Step 3: Loop through the playlist array
    // For each song, create a new song card using this structure:
    /*
        <div class="song-card">
            <div class="song-number">${number}</div>
            <div class="song-info">
                <div class="song-title">${title}</div>
                <div class="song-artist">${artist}</div>
            </div>
            <div class="duration">${duration}</div>
        </div>
    */
    
    // Step 4: Add each song card to the playlistDiv
}