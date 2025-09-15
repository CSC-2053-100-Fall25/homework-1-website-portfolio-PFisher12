const toggleButton = document.getElementById('toggle-photo');
const photoContainer = document.getElementById('photo-container');

if (toggleButton && photoContainer) {
  toggleButton.addEventListener('click', () => {
    if (photoContainer.style.display === 'none') {
      photoContainer.style.display = 'block';
      toggleButton.textContent = 'Hide Photo';
    } else {
      photoContainer.style.display = 'none';
      toggleButton.textContent = 'Show Photo';
    }
  });
}

// Dynamic Artists
const addArtistButton = document.getElementById('add-artist');
if (addArtistButton) {
  addArtistButton.addEventListener('click', () => {
    const artist = prompt("Enter one of your favorite artists:");
    if (artist && artist.trim() !== '') {
      const artistElement = document.createElement('p');
      artistElement.textContent = '• ' + artist;
      artistElement.style.backgroundColor = '#f0f8ff';
      artistElement.style.padding = '5px';
      artistElement.style.margin = '5px 0';
      artistElement.style.borderRadius = '3px';
      document.getElementById('artists-container').appendChild(artistElement);
    }
  });
}
