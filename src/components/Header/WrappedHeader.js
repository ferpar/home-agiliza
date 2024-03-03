import { headers } from 'next/headers'
import Header from './Header'
import styles from './Header.module.css'

// wrapping the header in a server component to get the url from request headers
export default async function WrappedHeader({ ...delegated }) {
    const headerList = headers()
    const path = headerList.get('x-invoke-path') || headerList.get('x-matched-path') || null
    return (
        <header className={styles["site-header"]}>
            <Header path={path} {...delegated}/>
        </header>
    )
}