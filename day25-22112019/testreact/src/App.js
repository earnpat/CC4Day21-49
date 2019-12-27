import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    abc: ['a','b','c','d','e','f','g'],
    table: [
      { name: 'Gourge', last: 'Longman', age: 13 },
      { name: 'Zofia', last: 'Olson', age: 20 },
      { name: 'Elif', last: 'Salt', age: 30 },
      { name: 'Kyal', last: 'Hogan', age: 12 }
    ],
    pic: [
      { firstName: "Gourge", lastName: "Longman", text: 'Some text 1', image: 'https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg' },
      { firstName: "Zofia", lastName: "Olson", text: 'Some text 2', image: 'https://image.freepik.com/free-photo/tiger-looking-straight-ahead_1286-73.jpg?1' },
      { firstName: "Elif", lastName: "Salt", text: 'Some text 3', image: 'https://image.freepik.com/free-photo/3d-landscape-with-herd-elephants_1048-7804.jpg' },
      { firstName: "Kyal", lastName: "Hogan", text: 'Some text 4', image: 'https://image.freepik.com/free-photo/cute-pug-with-santa-hat-gift-laying_23-2148348108.jpg' }
    ]
  }

  render() {
    const list = this.state.abc.map(x => {
      return (
      <li>{x}</li>
      )
    })
    const fullname = this.state.table.map(x => {
      return (
        <tr>
          <td>{x.name}</td>
          <td>{x.last}</td>
          <td>{x.age}</td>
        </tr>
      )
    })
    const picName = this.state.pic.map(x => {
      return (
        <div>
          <img src={x.image}></img><br/>
          <div>{x.firstName} {x.lastName}</div>
          <div>{x.text}</div><br/>
        </div>
      )
    })
    return (
      <div>
        <div>
          <h1>Render List</h1>
          <ul>
            {list}
          </ul>
        </div>
        <div>
          <h1>Render Table</h1>
          <table>
            {fullname}
          </table>
        </div>
        <div>
          <h1>Render Posts</h1>
          <table>
            {picName}
          </table>
        </div>
      </div>
    )
  }
}

export default App;