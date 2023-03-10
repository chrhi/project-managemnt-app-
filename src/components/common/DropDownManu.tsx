import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { logout } from '~/server/util/auth/provider';
import { useRouter } from 'next/router'

// icons 
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneIcon from '@mui/icons-material/Tune';





export default function DropDowsMenu() {
  //initializes hooks
   const router = useRouter()

   const logoutHanlder = async () => {
    await logout() 
    window?.location.reload()
   }

  return (
    <div className="fixed text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[60px] w-[50px] flex justify-center items-center'>
      <Menu.Button >
      <SettingsIcon className="!text-gray-700 hover:text-black " />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-[100]  right-0 mt-2 w-[280px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1  z-[100] ">
           <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => router.push("/app/user/settings") as unknown }
                  className={`${
                    active ? ' bg-gray-50 text-gray-900' : 'text-gray-900'
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <TuneIcon  className ="text-gray-600" />
                  settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={ async () => await logoutHanlder() }
                  className={`${
                    active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'
                  } group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <LogoutIcon  className ="text-gray-600"  />
                 log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
                }