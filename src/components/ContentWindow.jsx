import styles from './contentWindow.module.css'
import DataImplementation from './DataImplementation'
import ItemInfo from './ItemInfo'

export default function ContentWindow() {
    return (
        <div className={styles.window}>
            <ItemInfo />
            <DataImplementation />
        </div>
    )
}