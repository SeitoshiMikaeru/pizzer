import CreateUser from "../features/user/CreateUser";
import {useSelector} from "react-redux";
import Button from "./Button";
import {getUser} from "../features/user/userSlice";

function Home() {
    const user = useSelector(getUser);

  return (
    <div className="my-10 text-center px-4">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>
        {
            !user ?
                <CreateUser />
                :
                <Button to="/menu">Continue Ordering, {user}</Button>
        }
    </div>
  );
}

export default Home;
