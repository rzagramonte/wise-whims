//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.adviceslip.com/advice/search/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('p').innerText = data.slips[0].advice;
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}