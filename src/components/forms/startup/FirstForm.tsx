/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef } from "react"
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { TimePicker } from "~/components/ui/TimePicker";
type inputsType ={
  title:string , 
  Description:string,
  ObjectifSduProjet:string,
  exigencEdeHautNiveau:string,
  exigenceApprobationDeProjet:string , 
  Budget:string , 

  chefProjetName:string , 
  chefProjetEmail:string , 
  chefProjetPhone:string
  
}

//see the docs 
//https://trpc.io/docs/useMutation

export const FirstForm = () => {

  const router = useRouter()

  const titleRef = useRef<HTMLInputElement>(null)
  const DescriptionRef = useRef<HTMLTextAreaElement>(null)
  const ObjectifSduProjet = useRef<HTMLTextAreaElement>(null)
  const exigencEdeHautNiveauRef = useRef<HTMLTextAreaElement>(null)
  const  exigenceApprobationDeProjetRef = useRef<HTMLTextAreaElement>(null)
  const Budget = useRef<HTMLInputElement>(null)
  const chefProjetNameRef = useRef<HTMLInputElement>(null)
  const chefProjetEmailRef = useRef<HTMLInputElement>(null)
  const chefProjetPhoneRef = useRef<HTMLInputElement>(null)

  //trpc hook 
   // This can either be a tuple ['login'] or string 'login'
   const mutation = api.startup.firstForm.useMutation()
  
  const HandleSubmit =  (e : FormEvent) => {
    e.preventDefault()
   if(!titleRef.current?.value || !DescriptionRef.current?.value || !ObjectifSduProjet.current?.value || !exigencEdeHautNiveauRef.current?.value || !exigenceApprobationDeProjetRef.current?.value || !Budget.current?.value || !chefProjetNameRef.current?.value){
    console.log("please enter the required data ...")
    return
   }
   const data : inputsType = {
    title: titleRef.current?.value   ,
    Description: DescriptionRef.current?.value ,
    ObjectifSduProjet: ObjectifSduProjet.current?.value , 
    exigencEdeHautNiveau: exigencEdeHautNiveauRef.current?.value , 
    exigenceApprobationDeProjet: exigenceApprobationDeProjetRef.current?.value , 
    Budget : Budget.current?.value  , 
    chefProjetName: chefProjetNameRef.current?.value , 
    chefProjetEmail: chefProjetEmailRef.current?.value as string , 
    chefProjetPhone: chefProjetPhoneRef.current?.value as string ,
  }
   mutation.mutate({
    title:data.title,
    Description:data.Description,
    ObjectifSduProjet:data.ObjectifSduProjet,
    exigencEdeHautNiveau:data.exigencEdeHautNiveau,
    exigenceApprobationDeProjet:data.exigenceApprobationDeProjet,
    Budget:Number(data.Budget) ,
    chefProjetName:data.chefProjetName,
    chefProjetEmail:data.chefProjetEmail,
    chefProjetPhone:data.chefProjetPhone
  })
 

  }
 






  return (
   <div className='ml-[16rem] custom-width min-h-screen h-fit flex flex-col items-center pt-8'>
   <div className="w-full h-[50px] flex items-center justify-start p-4 my-4">
   <h1 className="text-2xl font-bold text-start text-gray-900">remplir les informations nécessaires du projet</h1>
   </div>
     <form className='bg-white mb-8 w-[95%] md:w-[70%] xl:w-[50%] '  onSubmit={(e) => HandleSubmit(e)}>
    <div className="overflow-hidden shadow  sm:rounded-md">
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
         

        <div className="col-span-6 ">
            <label htmlFor="titre" className="block text-sm font-medium leading-6 text-gray-900">
            titre
            </label>
            <input
             ref={titleRef}
              type="text"
              name="titre"
              id="titre"
              autoComplete="titre"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        
        <div className="col-span-6">
        <label htmlFor="titre" className="block text-sm font-medium leading-6 text-gray-900">
            date
        </label>
            <TimePicker />
        </div>


          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          
            Besoin de l'organisation / objectifs du projet
            </label>
            <textarea
                        ref={ DescriptionRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
            Exigences  du projet
            </label>
            <textarea
                        ref={ObjectifSduProjet}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
            Description du produit / des livrables
            </label>
            <textarea
                      
                        ref={exigencEdeHautNiveauRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
             {/* eslint-disable-next-line react/no-unescaped-entities */}
            Le projet n'inclut pas 
            </label>
            <textarea
                        ref={exigenceApprobationDeProjetRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>


        

          <div className="col-span-6">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
            Ressources preapprouvees
            </label>
            <textarea
                        ref={exigenceApprobationDeProjetRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6">
            <h3 className="block text-xl font-medium leading-6 text-gray-900">
            chef de projet
            </h3>
           
          </div>
          
        

        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          onClick={() => router.push("/app/startup/documents") as unknown}
          className="inline-flex justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
         enregistrer & continuer
        </button>
      </div>
    </div>
  </form>
   </div>
  )
}

