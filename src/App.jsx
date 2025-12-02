import { useState } from 'react'
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

function FilmList() {
  return (

    <div>
      <ul>
        {films.map((Curfilm, index) => (
          <li key={index}>{Curfilm.title}</li>
        ))}
      </ul>
    </div>

  )

}


function App() {

  const [filmFiltred, setFilmFiltred] = useState ("")

  return (
    <>
      <div className='container p-5'>
        <h1>La Nostra Lista Film </h1>


        <section>


          <input
            type="text"
            value={filmFiltred}
            onChange={(event) => 
              setFilmFiltred(event.target.value)
            } />
        </section>

        <section>
          <FilmList />
        </section>

     

    </div >




    
    </>


  )
}

export default App
