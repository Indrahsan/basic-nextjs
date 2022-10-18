import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from './Layout.module.css'
import Head from 'next/head'

interface LayoutProps{
    children: ReactNode;
    pageTittle: String;
}
export default function Layout(props: LayoutProps) {
    const {children, pageTittle} = props;
    return(
        <>
    <Head>
      <title>NextJS Basic | {pageTittle}</title>
      <meta name="description" content="Website NextJS Basic" />
    </Head>
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </div>
        </>
    )
}