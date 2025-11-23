
// import React, { useState, useEffect } from 'react';

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scrolled down
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Scroll to top smoothly
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);

//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   return (
//     <div className="fixed bottom-5 right-5">
//       {isVisible && 
//         <button onClick={scrollToTop} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
//           ↑
//         </button>
//       }
//     </div>
//   );
// };

// export default ScrollToTopButton;

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white p-3 sm:p-4 rounded-full shadow-lg shadow-blue-900/50 transition-transform hover:scale-110"
        >
          <FaArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
