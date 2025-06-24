import { useEffect, useState } from "react";

const TimelineNav = ({ items }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let minDistance = Infinity;

      items.forEach(item => {
        const section = document.getElementById(item.ruta.slice(2));
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section.id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // para marcar la sección correcta en carga inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <aside className="hidden lg:flex flex-col items-center fixed right-4/5 top-1/4 z-50">
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black dark:bg-white -translate-x-1/2 z-0" />

        {items.map((item, index) => {
          const isActive = activeSection === item.ruta.slice(2);
          const isLast = index === items.length - 1;

          return (
            <a
              key={index}
              href={item.ruta}
              className={`group relative flex flex-col items-center ${!isLast ? 'mb-16' : ''} z-10`}
            >
              <div className={`text-2xl transition-colors ${isActive ? 'text-blue-500' : 'text-slate-800 dark:text-white'} bg-white dark:bg-slate-900`}>
                {item.icono}
              </div>
              <span className="absolute left-8 top-1/2 -translate-y-1/2 text-sm text-slate-700 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.nombre}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default TimelineNav;
