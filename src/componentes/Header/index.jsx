import useIsMobile from "../../CustomHooks/isMobile";
import Section from "../Section";
import ThemeToggle from "../ThemeToggle";

const Header = ({ items }) => {
    const isMobile = useIsMobile()

    return (
        <Section>
            <header className={`flex ${isMobile ? 'items-center justify-center w-full fixed top-0 z-10 mx-auto mt-2 text-sm' : 'justify-end'}`}>

                <nav className={`flex items-center ${isMobile && 'justify-center w-full'} `}>
                    <ul className={`flex items-center gap-4 dark:text-slate-300 ${isMobile && 'border border-transparent bg-white/50 backdrop-blur  rounded-full py-2 px-4 dark:bg-slate-800/50'} `} >
                        {
                            isMobile &&
                            items
                                .slice(1)
                                .map((item, i) => (
                                    <li className="hover:text-blue-400"><a href={item.ruta}>{item.nombre}</a></li>
                                ))
                        }
                        <ThemeToggle />
                    </ul>
                </nav>

            </header>
        </Section>

    );
};

export default Header;