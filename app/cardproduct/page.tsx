import styles from '@/app/ui/home.module.css';

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div>
            <h1> card product page </h1>
            <button className={styles.buttonAdd} type='button'> Выбрать дату </button>
        </div>
    </main>)
}