import styles from '@/app/ui/home.module.css';

export default function Page() {
    return (
    <main>
        <div>
            <h1> card catalog page </h1>
            <button className={styles.buttonAdd} type='button'> Add </button>
        </div>
    </main>)
}