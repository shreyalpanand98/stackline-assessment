import styles from './dataImplementation.module.css';
import RetailSalesGraph from './RetailSalesGraph'
import RetailSalesTable from './RetailSalesTable';
export default function DataImplementation() {
    return <div className={styles.container}>
        <RetailSalesGraph />
        <RetailSalesTable />
    </div>
}