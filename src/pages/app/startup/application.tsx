import { Button } from "@mui/material";
import { type NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "~/components/ui/Sidebar";
import { api } from "~/utils/api";


const Page: NextPage = () => {

  const mutation = api.pdf.createPdfFiles.useMutation()

  const status = api.status.pdfStatus.useQuery()

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
      <main className=" min-h-screen flex w-full bg-gray-50 ">
       <Sidebar />
     <div className='ml-[16rem] custom-width min-h-screen h-fit flex flex-col items-center pt-8'>
        <div className="w-full h-[200px] flex justify-center gap-x-8 pt-8">
                <div className="w-[400px] h-[400px] flex flex-col items-start justify-center ">
                        <h1 className="text-xl font-bold my-4 text-start "> ✔️ the project details</h1>
                        <h1 className="text-xl font-bold my-4 text-start ">✔️ stakeholders related to the project</h1>
                        <h1 className="text-xl font-bold my-4 text-start ">✔️ the project concidurations</h1>
                        <h1 className="text-xl font-bold my-4 text-start ">❌ the project malestones</h1>
                </div>
                <div className="w-[400px] h-[400px] flex flex-col items-center justify-center bg-white rounded-lg shadow-lg ">
                  {status.data ? 
                  
                <button >
                  view pdf 
                </button>
                : 
                <Button
                onClick={() => mutation.mutate()}
                 className="inline-flex justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  {mutation.isLoading ? "loading ..." : "   generate pdf" }
                </Button>
                }
                    
                    <h1>{mutation.error && mutation.error.message}</h1>
                 </div>
        </div>
     </div>
      </main>
    </>
  );
};

export default Page;