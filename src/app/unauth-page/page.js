import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function unauthPage() {


    const getSession=await auth()


    if(getSession?.user)redirect('/')


  return (
    <div className="p-20">
      <h2 className="text-6xl font-extrabold">
        you are not logged in. please login
      </h2>
    </div>
  );
}
