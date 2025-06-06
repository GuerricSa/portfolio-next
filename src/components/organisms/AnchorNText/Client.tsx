'use client'

import { useState, useEffect, useRef } from "react";

interface AnchorNTextClientProps {
  chapters: Array<{
    id: string
    label: string
    content: string;
  }>
}

const AnchorNTextClient: React.FC<AnchorNTextClientProps> = ({ chapters }) => {
  const [activeId, setActiveId] = useState("");
  const activeIdRef = useRef(activeId);
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  const handleAnchorClick = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsSideBarVisible(false);
    }
  };

  const handleToggleSideBar = () => {
    setIsSideBarVisible((prev => !prev))
  }

  const handleKeyPress = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAnchorClick(id);
    }
  };

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const scrollHandler = () => {
      const threshold = 300;
      const visibleChapters = chapters.filter((chapter) => {
        const element = document.getElementById(chapter.id);
        if (!element) return false;
        const elementTop = element.getBoundingClientRect().top;
        return elementTop >= 0 && elementTop < threshold;
      });

      if (visibleChapters.length > 0) {
        const newActiveId = visibleChapters[0].id;
        if (newActiveId !== activeIdRef.current) {
          setActiveId(newActiveId);
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section
      className="container flex flex-col lg:flex-row px-4 lg:px-20 py-10 gap-10 relative"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* Sidebar avec les ancres */}
      <nav
        className={`lg:w-1/4 sticky top-20 self-start`}
        aria-label="Table des matières"
      >
        {/* Flèche pour afficher/masquer la table des matières sur petits écrans */}
        <button
          onClick={handleToggleSideBar}
          className={`lg:hidden p-2 bg-primary text-white rounded-full top-20 left-0 w-fit transition-[transform] duration-500 ease ${isSideBarVisible ? '' : '-rotate-90'}`}
          aria-expanded={isSideBarVisible}
          aria-controls="table-of-contents"
          aria-label={isSideBarVisible ? "Masquer la table des matières" : "Afficher la table des matières"}
        >
          <span className='text-xl' aria-hidden="true">⬇</span>
        </button>
        <div
          id="table-of-contents"
          className={`bg-secondary lg:border-l-2 lg:border-primary lg:max-h-none transition-[max-height] duration-5000 overflow-hidden ease ${isSideBarVisible ? "block max-h-screen" : "max-h-0 lg:block"}`}
        >
          <div className="flex flex-col gap-3 p-4">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => handleAnchorClick(chapter.id)}
                onKeyPress={(e) => handleKeyPress(e, chapter.id)}
                className={`text-left text-sm font-medium hover:text-primary transition-all flex items-center gap-2 cursor-pointer ${
                  activeId === chapter.id ? "text-tertiary font-bold" : "text-primary lg:text-gray-600"
                }`}
                role="tab"
                aria-selected={activeId === chapter.id}
                aria-controls={`${chapter.id}-content`}
                tabIndex={0}
              >
                <span>{chapter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div
        className="lg:w-3/4 space-y-16"
        itemScope
        itemType="https://schema.org/Article"
      >
        <p className="text-gray-700">Mises à jour le 28/04/2025</p>
        {chapters.map((chapter) => (
          <div
            id={chapter.id}
            key={chapter.id}
            className="scroll-mt-28"
            itemScope
            itemType="https://schema.org/Article"
            role="tabpanel"
            aria-labelledby={`${chapter.id}-tab`}
          >
            <h2
              className="text-xl font-semibold text-primary mb-4"
              itemProp="headline"
            >
              {chapter.label}
            </h2>
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: chapter.content }}
              itemProp="articleBody"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnchorNTextClient;
