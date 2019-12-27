import React from 'react';
import './App.css';
import ProCat from './proCatList';
import ProItem from './proItem'

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-3">
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
          </ul>
          </div>
          <div class="col-6">
            <div class="card" style={{width:'18rem'}}>
              <img src="https://uppicimg.com/file/gjFh1NXv.jpg" class="card-img-top"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-3">
            One of three columns
          </div>
        </div>
      </div>
    )
  }
}

export default App;