import {Link} from "react-router-dom";

export default function LinkButton({children, to, onClick}) {
    return (
        <div onClick={onClick || null}>
            <Link to={to}
                  className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
            >
                {children}
            </Link>
        </div>
    );
}