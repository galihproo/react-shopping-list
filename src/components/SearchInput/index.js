import PropTypes from 'prop-types'

import styles from './SearchInput.module.css'

const SearchInput = (props) => {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
            <input 
            onChange={props.onChange}
            value={props.value}
            className={styles.input} 
            type="text" 
            placeholder="List" />
            <button className={styles.addButton} type="submit">add</button>
        </form>
    )
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default SearchInput;