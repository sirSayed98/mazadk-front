import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import CardsContainer from "../components/CardsContainer/CardsContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MAZADK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

    
      <CardsContainer />
     
    </div>
  );
}
