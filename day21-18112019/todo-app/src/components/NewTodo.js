import React from 'react';
import styles from './NewTodo.module.css'

class NewTodo extends React.Component {

    render = () => {
        const {onAdd, onValue, value} = this.props

        return (
            <div className={styles.Root}>

                <input
                    className={styles.Input}
                    placeholder="add to do list"
                    value={value}
                    onChange={onValue}
                />

                <button
                    className={styles.Button}
                    onClick={onAdd}
                >add</button>

            </div>
        )
    }
}

export default NewTodo