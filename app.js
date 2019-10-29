document.getElementById('getJokesButton').addEventListener('click', getJokes);

function getJokes(e) {
  const numberOfJokes = document.getElementById('numberOfJokes').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output = `<li>Something went wrong!</li>`;
      }

      document.getElementById('jokes').innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}