import { useState } from 'react';
import '../css/imgPopup.css'

import Star from './StarIcon.svg'



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
      <img src={Star} alt="img" />
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