import Head from 'next/head';
import NavBar from './Navigation/NavBar';

function Header() {

    return (
        <>
            <Head>
                <title>Loading - Adam Drumm.com</title>
            </Head>
            <header>
                <NavBar />
            </header>
        </>
    );
}
export default Header;