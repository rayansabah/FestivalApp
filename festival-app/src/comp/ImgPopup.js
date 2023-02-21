import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import '../css/imgPopup.css'


import Star from './Group.svg'


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
      <button className="image-popup-button" onClick={handleButtonClick}>
        <img src={Star} alt="img" />
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src={ src } width={500} height={400} alt="Popup Image" />
            <button className="close-button" onClick={handlePopupClose}>
            <FiX size={22}/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImgPopup;