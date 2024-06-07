import styles from './itemInfo.module.css'
import data from '../data/stackline_frontend_assessment_data_2021.json'

export default function ItemInfo() {
    const tags = data[0].tags;
    const imageSrc = data[0].image;
    const title = data[0].title;
    const subtitle = data[0].subtitle;
    const details = data[0].details;
    return <div className={styles.container}>
        <div className={styles.itemInfo}>
                <div className={styles.itemImage}>
                    <img src={imageSrc} />
                </div>
                <div className={styles.itemAbout}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div className={styles.itemTags}>
                    {tags.map((tag) => (
                        <p key={tag} className={styles.tags}> {tag} </p>
                    ))}
                </div>
                <div className={styles.details}>
                    <h3>About</h3>
                    <p>{details}</p>
                </div>
            </div>
            
    </div>
}