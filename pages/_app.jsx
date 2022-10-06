import "../styles/globals.css";
//import Card from "../components/Card/Card";
import Head from "next/head";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
//import Layout from "../components/layout/Layout";
import Listing from "../components/Listing/Listing";
import Layout from "../components/layout/Layout";
import Image from "next/image";

function MyApp() {
    return (
        <>
          <Head>
                <title>Sociality</title>
            </Head>
            <div className="flex flex-row bg-generalbg">
                <div>
                <div className="w-[365px] h-[67px] bg-logo flex justify-center items-center">
<Image src="/images/socialitylogo.png" alt="logo" width={190} height={37} />
                </div>
            <div className="flex flex-row">
<Sidebar />
<Menu />
</div>
</div>
<div className="flex flex-col">
<Layout />
<Listing />
</div>
</div>
        </>
    );
}

export default MyApp;