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
      
        <h1 className="display-4 ml-4 mt-4 mb-3">Auctions Now</h1>
      
      <CardsContainer />
    </div>
  );
}
