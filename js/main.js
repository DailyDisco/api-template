//Example fetch using pokemonapi.co

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

