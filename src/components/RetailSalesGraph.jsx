import DataGraph from './DataGraph'
import styles from './retailSalesGraph.module.css'

export default function RetailSalesGraph() {

    return <div className={styles.container}>
        <div className={styles.graphInfo}>
            <DataGraph className={styles.graph}/>
        </div>
    </div>
}