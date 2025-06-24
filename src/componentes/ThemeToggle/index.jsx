import { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);


    const handleTheme = () => {
        const html = document.documentElement;
        const isDark = html.classList.toggle('dark')

        localStorage.setItem("theme", isDark ? "dark" : "light")
        setIsDark(!!isDark)
    }


    return (
        <button
            aria-label="Cambiar tema de la página"
            onClick={handleTheme}
            className="hover:scale-125 text-lg hover:cursor-pointer"
        >
            {
                isDark
                    ? <IoMoonOutline />
                    : <IoSunnyOutline />
            }
        </button>
    );
};

export default ThemeToggle;