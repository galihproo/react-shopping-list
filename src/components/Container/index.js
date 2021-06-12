import PropTypes from 'prop-types'

import styles from './Container.module.css'

const Container = (props) => {

    return (
        <section className={styles.container}>
        {props.children}
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;