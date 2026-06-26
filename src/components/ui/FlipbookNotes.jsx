// import HTMLFlipBook from "react-pageflip";
// import "./FlipbookNote.css";
// import { useEffect, useState, useMemo } from "react";

// const FlipbookNotes = ({ title, pages }) => {
//   const [dimensions, setDimensions] = useState({ width: 500, height: 700 });

//   // IMPORTANT: Freeze pages so flipbook doesn't rebuild
//   const safePages = useMemo(() => {
//     return Array.isArray(pages) ? pages : [];
//   }, [pages]);

//   useEffect(() => {
//     const updateSize = () => {
//       if (window.innerWidth <= 768) {
//         setDimensions({
//           width: window.innerWidth * 0.9,
//           height: window.innerHeight * 0.6,
//         });
//       } else {
//         setDimensions({ width: 500, height: 700 });
//       }
//     };

//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   return (
//     <div className="flipbook-container">
//       <h1 className="book-title">{title}</h1>

//       <HTMLFlipBook
//         width={dimensions.width}
//         height={dimensions.height}
//         minWidth={dimensions.width}
//         showCover={true}
//         className="flipbook"
//         mobileScrollSupport={true}
//         usePortrait={window.innerWidth <= 768}
//         drawShadow={true}
//         maxShadowOpacity={0.7}
//       >
//         {safePages.length > 0 ? (
//           safePages.map((page, index) => (
//             <div key={`page-${index}`} className="page">
//               <div className="page-inner">
//                 <div className="watermark">Quick Revision</div>

//                 {page.sections?.map((section, sIndex) => (
//                   <div key={`section-${index}-${sIndex}`} className="page-section">
//                     {section.heading && (
//                       <h2 className="page-heading">{section.heading}</h2>
//                     )}
//                     {section.subheading && (
//                       <h3 className="page-subheading">{section.subheading}</h3>
//                     )}
//                     {section.content && (
//                       <p className="page-content">{section.content}</p>
//                     )}
//                     {section.image && (
//                       <div className="image-container">
//                         <img src={section.image} alt="Diagram" />
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 <div className="page-number">{index + 1}</div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="page">
//             <div className="page-inner">
//               <div className="watermark">Quick Revision</div>
//               <h2>No pages available</h2>
//             </div>
//           </div>
//         )}
//       </HTMLFlipBook>
//     </div>
//   );
// };

// export default FlipbookNotes;

//---------------------------------------------------------------------------------------------------

// import HTMLFlipBook from "react-pageflip";
// import "./FlipbookNote.css";

// const FlipbookNotes = ({ title, pages }) => {
//   const safePages = Array.isArray(pages) ? pages : [];

//   return (
//     <div className="flipbook-container">
//       <h1 className="book-title">{title}</h1>

//       <HTMLFlipBook 
//       width={500} 
//       height={700} 
//       showCover={true} 
//       mobileScrollSupport={true}
//       className="flipbook">
        

//         {safePages.length > 0 ? (
//           safePages.map((page, index) => (
//             <div key={index} className="page">
//               {/* Watermark */}
//               <div className="watermark">Quick Revision</div>

//               {/* Render each section */}
//               {page.sections?.map((section, sIndex) => (
//                 <div key={sIndex} className="page-section">
//                   {section.heading && <h2 className="page-heading">{section.heading}</h2>}
//                   {section.subheading && (<h3 className="page-subheading">{section.subheading}</h3>)}
//                   {section.content && (<p className="page-content">{section.content}</p>)}
//                   {section.image && (
//                     <div className="image-container">
//                       <img src={section.image} alt="Diagram" />
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Page number */}
//               <div className="page-number">{index + 1}</div>
//             </div>
//           ))
//         ) : (
//           <div className="page">
//             <div className="watermark">Quick Revision</div>
//             <h2>No pages available</h2>
//           </div>
//         )}
//       </HTMLFlipBook>
//     </div>
//   );
// };

// export default FlipbookNotes;


//---------------------------------------------------------------------------------------------------------
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect, useRef } from "react";
import "./FlipbookNote.css";

const FlipbookNotes = ({ title, pages }) => {
  const safePages = Array.isArray(pages) ? pages : [];
  const [isMobile, setIsMobile] = useState(false);
  const flipBookRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Force re-render when switching between mobile/desktop
      if (flipBookRef.current) {
        setTimeout(() => {
          flipBookRef.current?.pageFlip()?.update();
        }, 100);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getBookDimensions = () => {
    if (isMobile) {
      return { 
        width: Math.min(400, window.innerWidth - 40),
        height: Math.min(600, window.innerHeight * 0.7)
      };
    } else {
      return { 
        width: 500,
        height: 600
      };
    }
  };

  const dimensions = getBookDimensions();

  return (
    <div className="flipbook-container">
      <h1 className="book-title">{title}</h1>
      
      <div className="flipbook-wrapper">
        <div className="book-shadow">
          <HTMLFlipBook 
            ref={flipBookRef}
            key={isMobile ? 'mobile' : 'desktop'}
            width={dimensions.width}
            height={dimensions.height}
            size="fixed"
            minWidth={dimensions.width}
            maxWidth={dimensions.width}
            minHeight={dimensions.height}
            maxHeight={dimensions.height}
            maxShadowOpacity={0.3}
            showCover={true}
            mobileScrollSupport={true}
            useMouseEvents={!isMobile}
            swipeDistance={isMobile ? 50 : 0}
            clickEventForward={isMobile}
            showPageCorners={!isMobile}
            className={`flipbook ${isMobile ? 'mobile' : 'desktop'}`}
            startPage={0}
            drawShadow={true}
            flippingTime={isMobile ? 300 : 500}
            usePortrait={isMobile}
            autoSize={false}
            disableFlipByClick={false}
          >
            {/* Front Cover */}
            <div className={`page page-cover ${isMobile ? 'mobile-cover' : 'page--left'}`}>
              <div className="cover-content">
                <h2>{title}</h2>
                <div className="cover-decoration"></div>
                <p className="cover-subtitle">{isMobile ? "Mobile Edition" : "Study Notes"}</p>
                {isMobile && <p className="cover-hint">Swipe or tap to open →</p>}
              </div>
            </div>

            {/* Content Pages */}
            {safePages.length > 0 ? (
              safePages.map((page, index) => (
                <div 
                  key={index} 
                  className={`page ${isMobile ? 'mobile-page' : (index % 2 === 0 ? 'page--left' : 'page--right')}`}
                >
                  <div className="page-inner">
                    {/* Watermark - only for desktop */}
                    {!isMobile && <div className="watermark">Quick Revision</div>}
                    
                    {/* Content */}
                    <div className="page-content">
                      {page.sections?.map((section, sIndex) => (
                        <div key={sIndex} className="page-section">
                          {section.heading && <h2 className="page-heading">{section.heading}</h2>}
                          {section.subheading && <h3 className="page-subheading">{section.subheading}</h3>}
                          {section.content && <div className="page-text">{section.content}</div>}
                          {section.image && (
                            <div className="image-container">
                              <img src={section.image} alt="Diagram" />
                            </div>
                          )}
                          {section.list && (
                            <ul className="page-list">
                              {section.list.map((item, iIndex) => (
                                <li key={iIndex}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Page Number */}
                    <div className={`page-number ${isMobile ? 'mobile-number' : (index % 2 === 0 ? 'left-number' : 'right-number')}`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={`page ${isMobile ? 'mobile-page' : 'page--right'}`}>
                <div className="page-content">
                  <h2>No Content</h2>
                  <p>Add your notes to begin.</p>
                </div>
              </div>
            )}
            
            {/* Back Cover */}
            <div className={`page page-cover ${isMobile ? 'mobile-cover' : 'page--right'}`}>
              <div className="cover-content">
                <h3>THE END</h3>
                <div className="cover-decoration"></div>
                <p className="cover-subtitle">Happy Learning!</p>
                {isMobile && <p className="cover-hint">← Swipe or tap to go back</p>}
              </div>
            </div>
          </HTMLFlipBook>
        </div>
        <div className={`navigation-controls ${isMobile ? 'mobile-nav' : ''}`}>
          <button onClick={() => flipBookRef.current?.pageFlip().flipPrev()}>
            ← Previous
          </button>
          <button onClick={() => flipBookRef.current?.pageFlip().flipNext()}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipbookNotes;