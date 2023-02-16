import { useState } from 'react';
import '../css/imgPopup.css'

function ImgPopup( { src }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button className="img-popup-button" onClick={handleButtonClick}>
        img icon här 
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src={ src } width={500} height={400} alt="Popup Image" />
            <button className="close-button" onClick={handlePopupClose}>
              ha ett X här
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImgPopup;