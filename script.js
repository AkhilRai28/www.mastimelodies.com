document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.track');

  tracks.forEach(track => {
    track.addEventListener('click', () => {
      alert('Playing: ' + track.textContent.trim());
    });
  });
});
