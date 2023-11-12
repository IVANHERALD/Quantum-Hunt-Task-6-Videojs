document.addEventListener('DOMContentLoaded', function () {
    // Initialize Video.js
    var player = videojs('mergedVideo');
  
    // Variable to track whether the second video has been played
    var secondVideoPlayed = false;
  
    // Listen for the 'ended' event on the first video
    player.on('ended', function () {
      // Check if the second video has been played
      if (!secondVideoPlayed) {
        // Load and play the second video when the first one ends
        player.src([
          { src: 'https://cdn.pixabay.com/vimeo/165457856/snail-3012.mp4?width=640&hash=a31db9b948419c7113cbbc18ff25dadd79d81335', type: 'video/mp4' }
        ]);
        player.play();
        // Set the flag to true to indicate the second video has been played
        secondVideoPlayed = true;
      } else {
        // If the second video has been played, reset the flag and rewind to the start of the first video
        secondVideoPlayed = false;
        player.src([
          { src: 'https://cdn.pixabay.com/vimeo/269541539/fishes-16166.mp4?width=640&hash=7ca4f3ace2d907ed2fd6458606fd815bf8337a50', type: 'video/mp4' }
        ]);
        player.play();
      }
    });
  
    var replayButton = document.getElementById('replayButton');
    replayButton.addEventListener('click', function () {
      // Rewind to the start of the first video and play
      // Reset the secondVideoPlayed flag
      secondVideoPlayed = false;
      player.src([
        { src: 'https://cdn.pixabay.com/vimeo/269541539/fishes-16166.mp4?width=640&hash=7ca4f3ace2d907ed2fd6458606fd815bf8337a50', type: 'video/mp4' }
      ]);
      player.play();
    });
  });
  