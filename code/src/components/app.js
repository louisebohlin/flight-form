import React from "react"
import "./app.scss"

class App extends React.Component {

  render() {
    return (
      <div>
      <div className="header">
      <img src="./logo.svg" />
      </div>
        <div className="hero">
          <img src="./hero.jpg" alt="airplane" />
          <div className="container">
            <div className="search-div">
              <div className="searchfield">
                <h4>Flyg från</h4>
                  <form>
                  <div className="input-field">
                  <label>
                    <input type="text" placeholder="Var flyger du ifrån?"/>
                  </label>
                  </div>
                </form>
                <p>Stockholm-Arlanda?</p>
              </div>
              <div className="searchfield">
                <h4>Flyg till</h4>
                  <form>
                  <div className="input-field">
                  <label>
                    <input type="text" placeholder="Vart vill du resa?"/>
                  </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="bottom-div">
              <div className="button">
                <button><p>Sök och beställ</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App
