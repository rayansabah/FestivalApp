import { useState } from 'react';
import '../css/Popuptext.css'

import { BsBookmarkStar } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';



function Popuptext( { src }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button className="text-popup-button" onClick={handleButtonClick}>
      <BsBookmarkStar size={22}/>
      </button>
      {showPopup && (
        <div className="text-popup">
          <div className="text-popup-content">
            {src}
            <button className="text-close-button" onClick={handlePopupClose}>
              <FiX size={22}/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popuptext;