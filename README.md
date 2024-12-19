##  🎵🎶 Playlist Creator 🎵🎶
_This project was created for ICSpark 2025_

In this project, you'll create a Spotify-like music player using JavaScript arrays and objects. The HTML and CSS are already set up for you - you just need to make it work by completing the JavaScript code!

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Step-by-Step Guide](#step-by-step-guide)
  - [1. Create the Song Constructor](#1-create-the-song-constructor)
  - [2. Complete the addSong Function](#2-complete-the-addsong-function)
  - [3. Complete the displayPlaylist Function](#3-complete-the-displayplaylist-function)
- [Testing](#testing)
- [Bonus](#bonus)
- [Tips](#tips)

## Introduction

In this tutorial, you'll learn how to create a simple website with an HTML structure, styled with CSS, and interactivity added using JavaScript. By the end of this guide, you will have a basic understanding of how these three technologies work together to create a functional webpage.

Start by cloning this repository.

## Step-by-Step Guide

### 1. Create the Song Constructor

Find the ```Song``` constructor function in script.js and:

1. Add three parameters: ```title```, ```artist```. and ```duration```
2. Inside the function, create three properties using ```this```:
   - ```this.title = title```
   - ```this.artist = artist```
   - ```this.duration = duration```
  
Test:

Type ```let testSong = newSong("Test", "Artist", "3:00")``` into your console. This should create an object with those properties. 

### 2. Complete the addSong Function

Find the ```addSong``` function and complete these steps:

1. Get the values that the user types in
   - Use ```document.getElementById()``` to get each input field
   - Get ```value``` from each input
   - Store them in variables called ```title```, ```artist```, and ```duration```
2. Check if the inputs are valid
   - Make sure none of the fields are empty
   - Show an alert is any field is missing
   - Use ```return``` to stop the function if there's an error
3. Create a new song
   - Use the ```Song``` constructor from Steo 1
   - Pass in the title, artist, and duration values
   - Store the new song in a variable
4. Add to playlist
   - Add your new song to the ```playlist``` array
   - HINT: arrays have a ```push()``` method
5. Update the display
   - Call the ```displayPlaylist()``` function
6. Clear the form
   - Set each input's value back to an empty string
   - Test by checking if the form clears after adding a song

### 3. Complete the displayPlaylist Function

Find the ```displayPlaylist``` function and complete these steps: 

1. Get the playlist element
   - Find the HTML element with id ```playlist```
   - Store it in a variable
3. Clear the current display
   - Remove all current songs from the view
   - HINT: Setting innerHTML to "" will clear an element
3. Loop through the ```playlist``` array
   - For each song, creat a new div element
   - Add the class "song-card" to the div
   - Look at the HTML comment for the correct structure
   - HINT: arrays have a forEach method or you can use a loop
5. For each song, display:
   - The song number (index + 1)
   - The song title from your object
   - The artist from your object
   - The duration from your object
7. Add each song card to the playlist
   - Use appendChild to add each card
   - Test by checking if songs appear in the list

## Testing:
1. Add a song of your choice
3. Song should appear in the list
4. Add another song
5. Number should increment

## BONUS:
If you finish early (or want extra practice):

☑ Add a Delete Button to each song card, and remove the song from the array when clicked

☑ Add a Play icon to each song, and change the song card's color when "playing"

## Tips:
- Check the TODO comments in script.js
- Use console.log() to __debug__:
  - console.log(song) after creating a new song
  - console.log(playlist) after adding a song
- Ask your mentor for help! :)
