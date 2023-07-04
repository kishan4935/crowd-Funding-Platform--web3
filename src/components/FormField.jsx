const FormField = ({
  labelName,
  placeholder,
  inputType,
  value,
  handleChange,
  isTextArea,
  id
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          step={0.1}
          id={id}
          className="bg-transparent rounded-[10px] border-[1px] border-[#3a3a43] text-white font-epilogue font-medium text-[14px] leading-[22px] p-[16px] sm:px-[25px] outline-none placeholder:text-[#4b5264] sm:min-[300px]"
        />
      ) : (
        <input
          required
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          rows="5"
          id={id}
          className="bg-transparent rounded-[10px] border-[1px] border-[#3a3a43] text-white font-epilogue font-medium text-[14px] leading-[22px] p-[16px] sm:px-[25px] outline-none placeholder:text-[#4b5264] sm:min-[300px]"
        />
      )}
    </label>
  );
};

export default FormField;
