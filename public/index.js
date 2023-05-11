const newBtn = document.getElementById('new-btn');
const formContainer = document.getElementsByClassName('form-container')[0];
const form = document.getElementById('add-game-form');
const addGameBtn = document.getElementById('add-game-btn');

const moreInfoButtons = document.querySelectorAll('.more-info-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const modal = document.getElementById('game-modal');
const modalTitle = document.getElementById('game-modal-title');
const modalReleaseDate = document.getElementById('game-modal-release-date');
const modalDeveloper = document.getElementById('game-modal-developer');
const modalPublisher = document.getElementById('game-modal-publisher');
const modalGenre = document.getElementById('game-modal-genre');

newBtn.addEventListener(
  'click',
  () => (form.style.display = form.style.display === 'flex' ? 'none' : 'flex')
);

addGameBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('desc').value || 'No description';
  const releaseDate = document.getElementById('release-date').value || null;
  const developer =
    document.getElementById('developer').value || 'Unknown developer';
  const publisher =
    document.getElementById('publisher').value || 'Unknown publisher';
  const genre = document.getElementById('genre').value;

  //Post request to add a new game
  fetch('/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      game_desc: description,
      release_date: releaseDate,
      developer: developer,
      publisher: publisher,
      genre: genre,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

deleteButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const gameId = button.getAttribute('data-game-id');
    fetch(`/games/${gameId}`, { method: 'DELETE' })
      .then((response) => {
        if (response.ok) {
          console.log(`Deleted game with id ${gameId}`);
          location.reload();
        } else {
          console.log(`Failed to delete game with id ${gameId}`);
        }
      })
      .catch((err) => console.log(err));
  });
});

moreInfoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const gameId = button.getAttribute('data-game-id');
    fetch(`/games/${gameId}`)
      .then((res) => res.json())
      .then((game) => {
        modalTitle.innerText = game[0].title;
        modalReleaseDate.innerText = game[0].release_date;
        modalDeveloper.innerText = game[0].developer;
        modalPublisher.innerText = game[0].publisher;
        modalGenre.innerText = game[0].genre;
        modal.style.display = 'block';
      });
  });
});

// Close the modal when the user clicks the close button
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
