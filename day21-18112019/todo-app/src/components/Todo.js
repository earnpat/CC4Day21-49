import React from 'react';
import styles from './Todo.module.css'

class Todo extends React.Component {

    render = () => {
        const {ticked, onTick, onDelete} = this.props

        // console.log(this.props.data)
        const allList = this.props.data.map((value, index) => {
            return (
                <div className={styles.Root}>
                    <div
                        className={styles.Tick}
                        style={{backgroundColor: ticked ? '#a8d097' : undefined}}
                        onClick={onTick}
                    ></div>
                    <div className={styles.Text}>{value}</div>
                    <div
                        className={styles.Delete}
                        onClick={onDelete}
                    >&times;</div>
                </div>
            )
        })
        
        return (
            <div>{allList}</div>
            
        )
    }
}

export default Todo