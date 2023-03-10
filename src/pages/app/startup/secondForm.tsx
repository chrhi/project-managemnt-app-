import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";

import { SecondForm } from "~/components/forms/startup/SecondForm";
import { Sidebar } from "~/components/ui/Sidebar";


const Page: NextPage = () => {

  return (
    <>
      <Head>
      <title>Sonatrach</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <Sidebar />
      <SecondForm />
      </main>
    </>
  );
};

export default Page;