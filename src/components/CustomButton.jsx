const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`w-[200px] min-h-[52px] rounded-[10px] text-white font-epilogue font-semibold text-[16px] leading-[26px] px-4 ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
