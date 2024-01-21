import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcNext } from "react-icons/fc";

export default function Page(){
  return <>
    <header className="flex justify-between m-5">
      <h1 className="text-4xl font-extrabold">Manager View</h1>
      <Button variant="ghost"><Link className="flex" href={'/'}>Customer View<FcNext style={{marginTop: "3.4px", marginLeft: "2px"}}/></Link></Button>
    </header>

    <div>
      <form action="">
        <table>
          <th></th>
        </table>
      </form>
    </div>
  </>
}