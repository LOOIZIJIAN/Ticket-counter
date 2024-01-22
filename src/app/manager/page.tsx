import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcNext } from "react-icons/fc";

export default function Page(){
  
  return <>
    <header className="flex justify-between m-5">
      <h1 className="text-4xl font-extrabold">Manager View</h1>
      <Button variant="ghost"><Link className="flex" href={'/'}>Customer View<FcNext style={{marginTop: "3.4px", marginLeft: "2px"}}/></Link></Button>
    </header>

    <div className="border-2 rounded-lg border-sky-900 m-16">
      <div className="py-8 px-40">
        <ul role="list" className="divide-y divide-gray-700">   

        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="flex-auto">
                <p className="text-lg font-semibold leading-6 text-gray-100">Counter 1</p>
                <div className="mt-1 truncate text-xs leading-5 text-gray-">Status                  
                  <div className="sm:flex sm:flex-col sm:items-end mt-[-17.5px]">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"/>
                      </div>                                                                   
                  </div>                 
                </div>
              </div>
            </div>
            <div className="flex items-center ps-4 gap-2">
              <label htmlFor="">Offline</label>
              <input type="checkbox" name="offline2" id="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            </div>
          </li>

          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="flex-auto">
                <p className="text-lg font-semibold leading-6 text-gray-100">Counter 1</p>
                <div className="mt-1 truncate text-xs leading-5 text-gray-">Status                  
                  <div className="sm:flex sm:flex-col sm:items-end mt-[-17.5px]">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"/>
                      </div>                                                                   
                  </div>                 
                </div>
              </div>
            </div>
            <div className="flex items-center ps-4 gap-2">
              <label htmlFor="">Offline</label>
              <input type="checkbox" name="offline2" id="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            </div>
          </li>

          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="flex-auto">
                <p className="text-lg font-semibold leading-6 text-gray-100">Counter 1</p>
                <div className="mt-1 truncate text-xs leading-5 text-gray-">Status                  
                  <div className="sm:flex sm:flex-col sm:items-end mt-[-17.5px]">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"/>
                      </div>                                                                   
                  </div>                 
                </div>
              </div>
            </div>
            <div className="flex items-center ps-4 gap-2">
              <label htmlFor="">Offline</label>
              <input type="checkbox" name="offline2" id="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            </div>
          </li>

          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="flex-auto">
                <p className="text-lg font-semibold leading-6 text-gray-100">Counter 1</p>
                <div className="mt-1 truncate text-xs leading-5 text-gray-">Status                  
                  <div className="sm:flex sm:flex-col sm:items-end mt-[-17.5px]">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"/>
                      </div>                                                                   
                  </div>                 
                </div>
              </div>
            </div>
            <div className="flex items-center ps-4 gap-2">
              <label htmlFor="">Offline</label>
              <input type="checkbox" name="offline2" id="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            </div>
          </li>

        </ul>
      </div>
    </div>
  </>
}

        