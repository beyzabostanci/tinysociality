import "../styles/globals.css";
//import Card from "../components/Card/Card";
import Head from "next/head";
import Menu from "../components/Menu";
//import Sidebar from "../components/Sidebar";

function MyApp() {
    return (
        <>
          <Head>
                <title>Sociality</title>

            </Head>
            <div className="flex flex-row">
<Menu />
{/*<Sidebar />*/}
</div>
{/*<Card />*/}
        </>
    );
}

export default MyApp;