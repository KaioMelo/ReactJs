import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <p>React JS</p>
      </header>
      <main>
        <section className="box-titulo">
          <p>React JS</p>
          <p> Biblioteca Javascript para ctiar SPAs</p>

          <a href="" target="_blank">Site Oficial</a>
        </section>
        <section className="box-requisitos">
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React Js:</p>
        
          <div className="box-cards">
            <div className="card">
              <h3>HTML</h3>
              <p>Aprender a estruturar os elementos da página com HTML</p>
            </div>
            <div className="card">
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            <div className="card">
              <h3>JavaScript</h3>
              <p>Aprender a lingua utilizada pelo React JS, o JavaScript</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="autor">Curso de introdução ao React</p>
      </footer>
    </div>
  )
}

export default App
