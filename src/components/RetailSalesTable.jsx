import DataTable from './DataTable';
import styles from './retailSalesTable.module.css';

export default function RetailSalesTable() {

    return <div className={styles.container}>
        <div className={styles.tableInfo}>
            <DataTable />
        </div>
    </div>
}