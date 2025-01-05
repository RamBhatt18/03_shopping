import { auth } from "@/auth";
import Cart from "@/components/cart";
import { redirect } from "next/navigation";




export default async function CartPage(){

const getSession=await auth();
if(!getSession?.user)redirect('/unauth-page')

return(<Cart/>)
}