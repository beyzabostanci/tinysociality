import "../styles/globals.css";
import Head from "next/head";
import AccordionMenu from "../components/Menu";
import Company from "../components/Company";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Posts from "../components/Posts/Posts";
//import Cards from "../components/Card/Cards";
import Fallback from "../components/Fallback/Fallback";

function MyApp() {
    return (
        <>
          <Head>
                <title>Sociality</title>
                <link rel="icon" href="/images/socialitytablogo.png"></link>
            </Head>
            <div className="flex flex-row bg-generalbg">
                <div>
                <div className="w-[365px] h-[67px] bg-logo flex justify-center items-center">
<Image src="/images/socialitylogo.png" alt="logo" width={190} height={37} />
                </div>
            <div className="flex flex-row">
<Company />
<AccordionMenu />
</div>
</div>
<div className="flex flex-col">
<Navbar />
<Posts />
</div>
</div>
        </>
    );
}

export default MyApp;