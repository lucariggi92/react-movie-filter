import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]



function App() {

  const [filmFiltred, setFilmFiltred] = useState("")
  const [filteredArray, setFilteredArray] = useState(films)


  useEffect(() => {
    const newArray = films.filter((film) => 
      film.title.toLowerCase().includes(filmFiltred.toLowerCase()));
     setFilteredArray(newArray);
  }, [filmFiltred])

  return (
    <>
      <div className='container p-5'>
        <h1>La Nostra Lista Film </h1>


        <section>
          <label>Cerca film</label>
          <input
            type="search"
            value={filmFiltred}
            placeholder='Inserisci Titolo'
            onChange={(event) =>
              setFilmFiltred(event.target.value)
            } />

        </section>
        <div>
          <ul>
            {filteredArray.map((Curfilm, index) => (
              <li key={index}>{Curfilm.title}</li>
            ))}
          </ul>
        </div>

     



      </div >





    </>


  )
}

export default App
