const AboutClientCard = ({children, radius} : {children: React.ReactNode; radius?: string}) => {
  return (
    <div className="w-full 2xl:h-[303px] xl:h-[259px] h-fit 2xl:pt-[72px] xl:pt-[50.46px] pt-[0px] 2xl:pb-[55px] xl:pb-[38px] pb-[30px] md:rounded-[25px] border border-[#EAEAEA] xl:border-b-[6px] md:border-b-[10px] border-b-[7px] border-b-[#CBEC5E] bg-white shadow-[0px_4px_20px_0px_#00000014] mx-auto relative flex flex-col xl:flex-row xl:items-center  2xl:gap-[33px] gap-[8px]" style={{borderRadius: radius}}>
      {children}
    </div>
  );
};
export default AboutClientCard;
