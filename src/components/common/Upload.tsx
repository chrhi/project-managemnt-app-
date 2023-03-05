import React, {type FormEvent, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'




const inputFile = (ref:React.RefObject<HTMLInputElement>) =>(
    <div  className='py-1 px-2 flex items-center bg-[#9147ff] hover:bg-[#7927f6] text-white rounded-lg cursor-pointer font-bold'>
    <label htmlFor="dropzone-file" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
     <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
   </svg>
   
    <input ref={ref} id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
)

export default function Create() {
  
  
  const inputTagRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

    const [isOpen, setIsOpen] = useState(false)
   

    
    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }

   





  return (
    <>
   
        <button 
         onClick={openModal}
         className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
       upload documant 
       
        </button>


    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" max-w-md w-[600px] h-[350px] transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl my-4 font-medium leading-6 text-gray-900"
                  >
                   upload a new documant
                  </Dialog.Title>
                  <div className="w-full h-full mt-1 ">
                    <form className='w-full flex flex-col '>
                    <label htmlFor="titre" className="block text-md font-medium leading-6 text-gray-900">
                     file tag
                     </label>
                     <input 
                     ref={inputTagRef}
                     className="mt-2 block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     placeholder='add a tag to your file '  />
                      <label htmlFor="titre" className="block text-md font-medium leading-6 text-gray-900">
                    file type
                     </label>
                     <select
                      className="mt-2 block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     >
                    <option >project</option>
                    <option >stakeholder</option>
                     </select>
                    <div className='w-full flex justify-end p-4 my-4 gap-x-4 '>
                    {inputFile(fileRef)}
                   

                    <button 
                   
                  className='py-2 px-4 flex items-center bg-[#9147ff] hover:bg-[#7927f6] text-white rounded-lg cursor-pointer font-bold'>
                     confirme 
                   </button>

                    </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      </>
  )
}
