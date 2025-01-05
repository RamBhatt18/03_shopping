"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

export default function AddToCartButton({productItem}) {
  const { cart } = useSelector((state) => state);


  const dispatch=useDispatch()


function handleAddToCart(){
dispatch(addToCart(productItem))
}
function handleRemoveFromCart(){
dispatch(removeFromCart(productItem?.id))
}







  return (
    <div className="mt-8 max-w-md">
      <Button
      type="button"
      onClick={cart?.cartItems.some(item=>item.id===productItem.id)
        ? handleRemoveFromCart :handleAddToCart
      }
      >
{

cart?.cartItems.some(item=>item.id===productItem.id) ? "Remove From Cart":"Add to Cart"


}


      </Button>
    </div>
  );
}
