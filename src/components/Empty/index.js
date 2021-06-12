import styles from './Empty.module.css'
import emptyIcon from '../../assets/empty-icon.svg'

const Empty = () => {
    return (
        <div className={styles.empty}>
            <img src={emptyIcon} alt="empty icon" />
            Waduh, List kamu kosong nih!
        </div>
    )
}

export default Empty;