import {formatCurrency} from "../../utils/helpers";
import Button from "../../ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {addItem, getCurrentPizzaQuantityById} from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id: pizzaId, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentPizzaQuantityById(pizzaId));

  function handleAddToCart() {
      const newCartItem = {
          pizzaId,
          quantity: 1,
          name,
          unitPrice,
          totalPrice: unitPrice * 1,
      }
      dispatch(addItem(newCartItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`${soldOut ? "opacity-70 grayscale" : ""} h-24 rounded`}/>
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ?
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
              :
              <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>
          }
            {
                !soldOut &&
                    <>
                        {
                            currentQuantity > 0 ? (
                                <div className="flex gap-2 items-center sm:gap-8">
                                    <UpdateItemQuantity id={pizzaId} currentQuantity={currentQuantity} />
                                    <DeleteItem id={pizzaId} />
                                </div>
                            ) : (
                                <Button type="small" onClick={handleAddToCart}>Add to cart</Button>
                            )
                        }
                    </>
            }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
