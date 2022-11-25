import Head from 'next/head';
import NavBar from './Navigation/NavBar';

function Header() {

    return (
        <>
            <Head>
                <title>Loading - My Site.com</title>
            </Head>
            <header>
                <NavBar />
            </header>
        </>
    );
}
export default Header;