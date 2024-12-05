// images
import { Link } from "react-router-dom";
import logo from "/svg/logo.svg";
import logoDark from "/svg/logoDark.svg";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          className="w-10 md:w-16 xl:w-20 dark:hidden"
          alt="logo du site ressemblant à une soucoupe volante couleur gradient bleu clair vers le bleu ciel"
        />
        <img
          src={logoDark}
          className="w-10 md:w-16 xl:w-20 hidden dark:block"
          alt="logo du site avec la lettre C couleur orange et la lettre H couleur noire"
        />
      </Link>
    </div>
  );
};
