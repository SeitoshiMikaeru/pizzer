import {Link} from "react-router-dom";

export default function Button({disabled = false, children, to, type = "primary", onClick}) {
    const base = "text-sm bg-yellow-500 uppercase font-semibold text-stone-800 " +
        "inline-block tracking-wide rounded-full hover:bg-yellow-400 " +
        "transition-colors duration-300 focus:outline-none focus:ring " +
        "focus:ring-yellow-400 focus:bg-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed ";

    const styles = {
        primary: base + "py-3 px-4 md:px-6 md:py-4",
        small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
        secondary: "text-sm uppercase font-semibold border-2 border-stone-300 bg-transparent inline-block tracking-wide rounded-full " +
            "transition-colors duration-300 focus:outline-none focus:ring py-2.5 px-4 md:px-6 md:py-3.5 text-stone-400 " +
            "disabled:cursor-not-allowed hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:ring-stone-200 focus:text-stone-800",
        round: base + "py-1 px-2.5 md:px-3.5 md:py-2 text-sm",
    }

    if(to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );

    return (
      <button
          className={styles[type]}
          disabled={disabled}
          onClick={onClick || null}
      >
          {children}
      </button>
    );
}