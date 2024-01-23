'use client';

import { Button } from "@/components/ui/button";
import { FcNext } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { Counter } from "@/components/Counter";
import toast from 'react-hot-toast';

export default function Home() {
  const initNum = 1001;
  const max = 4;
  const [ticketQueue, setTicketQueue] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [latest, setLatest] = useState(0);

  function handleTakeNumber() {
    const newTicket = generateTicket();
    console.log("New:"+newTicket)
    setTicketQueue((prevQueue) => {
      if (prevQueue.length === 4) {
        prevQueue[currentIndex] = newTicket; 
        setCurrentIndex((currentIndex + 1) % max);
        return [...prevQueue];
      } else {
        return [...prevQueue, newTicket];
      }
    });
    
    toast("Your number is " + newTicket);
    console.log("QUEUE:" + ticketQueue);
  }

  const generateTicket = () => {
    let newTicket;

    if (ticketQueue.length === 0) {
      newTicket = initNum;
    } else {
      newTicket = ticketQueue[latest] + 1;
      setLatest((prevLatest) => (prevLatest + 1) % max);
    }

    return newTicket;
  };

  return (
    <>
      <header className="flex justify-between m-5">
        <h1 className="text-4xl font-extrabold">Customer View</h1>
        <Button variant="ghost"><Link className="flex" href={`/manager?ticketQueue=${encodeURIComponent(JSON.stringify(ticketQueue))}`}>Manager view<FcNext style={{marginTop: "3.4px", marginLeft: "2px"}}/></Link></Button>
      </header>

      <div className="container mx-auto m-16">
        <div className="flex items-center flex-col rounded border-2 border-sky-600 py-12 tracking-widest">
          <div className="space-y-4">
            <div className="text-3xl font-extrabold">Now serving: {ticketQueue.length > 1 ? ticketQueue[(currentIndex - 1 + max) % max] : "None"}</div>
            <div className="text-3xl font-extrabold">Last number: {ticketQueue.length > 0 ? ticketQueue[currentIndex] : "None"}</div>
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




