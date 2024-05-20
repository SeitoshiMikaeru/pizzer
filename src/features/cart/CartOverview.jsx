import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalAmount, getTotalPrice} from "./cartSlice";
import {formatCurrency} from "../../utils/helpers";

function CartOverview() {
    const amount = useSelector(getTotalAmount);
    const totalPrice = useSelector(getTotalPrice);
    return (
    <div className="text-sm bg-stone-800 text-stone-200 uppercase p-4 md:text-base flex items-center justify-between">
      <p className="font-semibold text-stone-300 space-x-4">
          {
              amount > 0 ? (
                  <>
                      <span>{amount > 1 ? `${amount} pizzas` : `${amount} pizza`}</span>
                      <span>{formatCurrency(totalPrice)}</span>
                  </>
              ) : (
                  <span>Cart is empty</span>
              )
          }
      </p>
        {
            amount > 0 && <Link to="/cart">Open cart &rarr;</Link>
        }
    </div>
    );
}

export default CartOverview;
