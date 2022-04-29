import type { NextPage } from "next";
import Head from "next/head";
import Logout from "../components/logout";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const styles = {
  pageWrapper: "h-screen w-screen bg-gray-900 text-gray-300 flex",
  mainContainer: "flex flex-col items-center flex-grow",
  contentContainer: "flex flex-col justify-center items-center flex-grow",
};

const Home: NextPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Whisps - Home</title>
      </Head>

      <Sidebar />

      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.contentContainer}>
          <p className="text-xl font-bold">Welcome to Whisps</p>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Home;
