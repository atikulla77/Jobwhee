const Circle = ({ title, value }: any) => {
  return (
    <div className="md:w-[110px] w-[100px] md:h-[110px] h-[100px] flex flex-col justify-center items-center border border-[#AEB3BC] rounded-full text-center px-1">
      <h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] leading-tight mb-[2px]">
        {value}
      </h2>
      <p className="text-[13px] font-[500] text-[#000000] leading-tight text-center">
        {title}
      </p>
    </div>
  );
};

export default Circle;
