import React from 'react';
import './proItem.css';

class ProItem extends React.Component {
    state = {
        book: [
            {   img: 'https://uppicimg.com/file/gjFh1NXv.jpg',
                name: 'Harry Potter and the Sorcerer\'s Stone',
                price: 100,
                id: 1,
                catId: 1
            },
            {   img: 'https://uppicimg.com/file/OMEwBoQp.jpg',
                name: 'Harry Potter and the Chamber of Secrets',
                price: 200,
                id: 2,
                catId: 1
            },
            {   img: 'https://uppicimg.com/file/QvAu5C9p.jpg',
                name: 'Harry Potter and the Prisoner of Azkaban',
                price: 300,
                id: 3,
                catId: 1
            }
        ]
    }
  render() {
      const itemBook = this.state.book.map(x => {
          return (
              <div className="eachItem">
                  <img src={x.img}></img><br/>
                  <div>{x.name}</div>
                  <div>price : {x.price}</div>
              </div>
          )
      })
    return (
      <div>
        <div>
          <div>Product Items</div>
          <div>
            <div>
                {itemBook}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProItem;