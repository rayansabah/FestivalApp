import { useState } from 'react';
import '../css/imgPopup.css'

import { BsBookmarkStar } from 'react-icons/bs';



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
      <button className="image-popup-button" onClick={handleButtonClick}>
      <BsBookmarkStar size={24}/>
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {src}
            <button className="close-button" onClick={handlePopupClose}>
              ha ett X här
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popuptext;