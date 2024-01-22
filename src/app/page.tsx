'use client';
import { Button } from "@/components/ui/button";
import { FcNext } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { Counter } from "@/components/Counter";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const initNum = 1001;

  const [ticketQueue, setTicketQueue] = useState<number[]>([]);

  function handleTakeNumber() {
    const newTicket = generateTicket();
    setTicketQueue((prevQueue) => {
      if (prevQueue.length === 4) {
        const updatedQueue = prevQueue.slice(1);
        return [...updatedQueue, newTicket];
      } else {
        return [...prevQueue, newTicket];
      }
    });
  
    toast("Your number is " + newTicket);
  }

  const generateTicket = () => {
    if (ticketQueue.length === 0) {
      return initNum;
    } else {
      return ticketQueue[ticketQueue.length - 1] + 1;
    }
  };

  return (
    <>
      <Toaster/>
      <header className="flex justify-between m-5">
        <h1 className="text-4xl font-extrabold">Customer View</h1>
        <Button variant="ghost"><Link className="flex" href='/manager'>Manager view<FcNext style={{marginTop: "3.4px", marginLeft: "2px"}}/></Link></Button>
      </header>

      <div className="container mx-auto">
        <div className="flex items-center flex-col rounded border-2 border-sky-600 py-12 tracking-widest">
          <div className="space-y-4">
            <div className="text-3xl font-extrabold">Now serving: {ticketQueue[ticketQueue.length-1] || "None"}</div>
            <div className="text-3xl font-extrabold">Last Number: {ticketQueue[0] || "None"}</div>
          </div>
          <div className="mt-16">
            <Button size="lg" variant="default" onClick={handleTakeNumber}>
              Take a number
            </Button>
          </div>
        </div>
        <Counter queue={ticketQueue}/>
      </div>
    </>
  );
}





