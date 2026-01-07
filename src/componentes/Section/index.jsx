import { Link } from "react-router-dom";
import "./index.css";
import { routes } from "../../models/routes.model";
import { useState } from "react";

const Section = ({ title, id = "", onAdd, textBtnAdd = "", children }) => {
  const [authenticated] = useState(false);

  return (
    <section id={id}>
      {title && (
        <div
          className={`flex gap-2 ${!authenticated ? "" : "justify-between"}`}
        >
          <h2 className="dark:text-slate-100">{title}</h2>

          {!authenticated && title === "Sobre Mí" && (
            <Link
              to={routes.Login}
              className="text-white dark:text-slate-900 mt-2 hover:cursor-default"
            >
              Log In
            </Link>
          )}

          {authenticated && textBtnAdd && (
            <button
              className="h-full py-1 px-2  bg-slate-950 text-slate-100 rounded-md border border-slate-950 mt-2 hover:cursor-pointer"
              onClick={onAdd}
            >
              {textBtnAdd}
            </button>
          )}
        </div>
      )}

      {children}
    </section>
  );
};

export default Section;
