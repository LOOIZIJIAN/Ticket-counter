'use client';
import { Button } from "@/components/ui/button";
import { FcNext } from "react-icons/fc";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { Counter } from "@/components/Counter";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const initNum = 1001;

const [ticket, setTicket] = useState<number[]>([]);
const [lastTic, setLastTic] = useState<number>();
const [current, setCurrent] = useState<number>(0);

function handleTicket() {
  if (ticket.length === 0) {
    setTicket([initNum]);
  } else {
    setTicket((prevNum) => [...prevNum, prevNum[prevNum.length - 1] + 1]);
  }
}

useEffect(() => {
  if (ticket.length === current + 4) {
    setLastTic(ticket[current]);
    setCurrent((prev) => prev + 1);
  }
}, [ticket, current]);

useEffect(()=>{
  if(ticket.length>0){
    toast("Your number is " + ticket[ticket.length-1]);
  }
},[ticket]);


  return (
    <>
      <Toaster/>
      <header className="flex justify-between m-5">
        <h1 className="text-4xl font-extrabold">Customer View</h1>
        <Button variant="ghost"><Link className="flex" href={'/manager'}>Manager view<FcNext style={{marginTop: "3.4px", marginLeft: "2px"}}/></Link></Button>
      </header>
      <div className="container mx-auto">
        <div className="flex items-center flex-col rounded border-2 border-sky-600 py-12 tracking-widest">
          <div className="space-y-4">
            <div className="text-3xl font-extrabold">Now serving: {ticket[ticket.length-1]}</div>
            <div className="text-3xl font-extrabold">Last number: {lastTic}</div>
          </div>
          <div className="mt-16"><Button size="lg" variant="default" onClick={handleTicket}>Take a number</Button></div>
        </div>
        <Counter />
      </div>
    </>
  );
}
