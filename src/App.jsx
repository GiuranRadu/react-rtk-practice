import './App.css'
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
    </div>
  )
}

export default App
