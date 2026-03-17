import './App.css'
import Cars from './Components/Cars'
import Counter from './Components/Counter'

function App() {
  return (
    <div className="app-shell stack-lg">
      <header className="stack">
        <h1>Salut</h1>
        <p>Un mic demo cu Redux Counter.</p>
      </header>

      <section className="surface">
        <Counter />
      </section>

      <section>
        <Cars />
      </section>
    </div>
  )
}

export default App