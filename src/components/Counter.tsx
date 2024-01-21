export function Counter(){
  return(
    <div className="flex my-16 justify-between">     
      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-2 w-2 rounded-full bg-green-400"/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 1</div>
          <div></div>              
        </div>         
      </div> 

      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-2 w-2 rounded-full bg-green-400"/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 2</div>
          <div></div>              
        </div>         
      </div>   

      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-2 w-2 rounded-full bg-green-400"/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 3</div>
          <div></div>              
        </div>         
      </div>           

      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-2 w-2 rounded-full bg-green-400"/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 4</div>
          <div></div>              
        </div>         
      </div>                   

    </div>
  );
}