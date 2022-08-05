//Example fetch using pokemonapi.com
<<<<<<< HEAD
// Language: javascript
=======
>>>>>>> 3a681b24034ac82646ea7149020de442c17fadbe

document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click', data.name)

let name = document.querySelector('.name')

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.name + '' + data.weight)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

