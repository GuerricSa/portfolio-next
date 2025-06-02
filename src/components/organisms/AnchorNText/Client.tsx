'use client'

import { useState, useEffect } from "react";

interface AnchorNTextClientProps {
  chapters: Array<{
    id: string
    label: string
    content: string;
  }>
}

const AnchorNTextClient: React.FC<AnchorNTextClientProps> = ({ chapters }) => {
  const [activeId, setActiveId] = useState("");
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  const handleAnchorClick = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 0;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsSideBarVisible(false);
    }
  };

  const handleToggleSideBar = () => {
    setIsSideBarVisible((prev => !prev))
  }

  const handleScroll = () => {
    const threshold = 300; // plus c'est petit, plus il faut que le haut du chapitre soit visible

    const visibleChapters = chapters.filter((chapter) => {
      const element = document.getElementById(chapter.id);
      if (!element) return false;
      const elementTop = element.getBoundingClientRect().top;
      return elementTop >= 0 && elementTop < threshold;
    });

    if (visibleChapters.length > 0) {
      const newActiveId = visibleChapters[0].id;
      if (newActiveId !== activeId) {
        setActiveId(newActiveId);
      }
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  return (
    <section className="container flex flex-col lg:flex-row px-4 lg:px-20 py-10 gap-10 relative">
      {/* Sidebar avec les ancres */}
      <nav className={`lg:w-1/4 sticky top-20 self-start`}>
        {/* Flèche pour afficher/masquer la table des matières sur petits écrans */}
        <button
          onClick={handleToggleSideBar}
          className={`lg:hidden p-2 bg-primary text-white rounded-full top-20 left-0 w-fit transition-[transform] duration-500 ease ${isSideBarVisible ? '' : '-rotate-90'}`}
        >
          <span className='text-xl'>⬇</span>
        </button>
        <div className={`bg-secondary lg:border-l-2 lg:border-primary lg:max-h-none transition-[max-height] duration-5000 overflow-hidden ease ${isSideBarVisible ? "block max-h-screen" : "max-h-0 lg:block"}`}>
          <div className="flex flex-col gap-3 p-4">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => handleAnchorClick(chapter.id)}
                className={`text-left text-sm font-medium hover:text-primary transition-all flex items-center gap-2 ${
                  activeId === chapter.id ? "text-tertiary font-bold" : "text-primary lg:text-gray-600"
                }`}
              >
                <span>{chapter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="lg:w-3/4 space-y-16">
      <p className="text-gray-700">Mises à jour le 28/04/2025</p>
        {chapters.map((chapter) => (
          <div id={chapter.id} key={chapter.id} className="scroll-mt-28">
            <h2 className="text-xl font-semibold text-primary mb-4">{chapter.label}</h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: chapter.content }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnchorNTextClient;
