import { useState } from 'react'
import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MovieCard movie={{ title: "Backrooms", year: 2026, poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Backrooms_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" }} />
      </div>
    </>
  )
}

export default App
