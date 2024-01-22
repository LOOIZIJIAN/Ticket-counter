export function Counter({ queue }: { queue: number[] } ){

  const servingStatus = (counterNumber: number, index: number) => {
    if(queue.length > 0 && queue[index]!= null && queue[index] === counterNumber){
      return "bg-red-500";
    }else{
      return "bg-green-400";
    }
    
  };

  return(
    <div className="flex my-16 justify-between">     
      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className={`h-2 w-2 rounded-full ${servingStatus(queue[0], 0)}`}/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 1</div>
          <div>{queue[0]}</div>              
        </div>         
      </div> 

      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className={`h-2 w-2 rounded-full ${servingStatus(queue[1], 1)}`}/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 2</div>
          <div>{queue[1]}</div>              
        </div>         
      </div>   

      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className={`h-2 w-2 rounded-full ${servingStatus(queue[2], 2)}`}/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 3</div>
          <div>{queue[2]}</div>              
        </div>         
      </div>           

      <div className="border border-sky-900 p-1">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className={`h-2 w-2 rounded-full ${servingStatus(queue[3], 3)}`}/>
            </div>                                   
          </div>              
        </div>
        <div className="flex flex-col px-5 pb-5 items-center space-y-2" >             
          <div className="text-2xl font-bold">Counter 4</div>
          <div>{queue[3]}</div>              
        </div>         
      </div>                   

    </div>
  );
}