import React from 'react';

const Ingredient = ({ imageSrc, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`w-[100px] h-[100px] rounded-full flex items-center border-4 justify-center cursor-pointer m-[10px]` } 
    >
      <img src={imageSrc} alt="ingredient" style={{ width: '80%', height: '80%' }} />
    </div>
  );
};

export default Ingredient;