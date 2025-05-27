const AboutClientCard = ({children, radius, classes = "w-full 2xl:h-[303px] xl:h-[259px] h-fit 2xl:pt-[72px] xl:pt-[50.46px] pt-[0px] 2xl:pb-[55px] xl:pb-[38px] pb-[30px] 2xl:gap-[33px] gap-[8px]"} : {children: React.ReactNode; radius?: string;classes?: string}) => {
  return (
    <div className={`${classes} flex flex-col xl:flex-row xl:items-center bg-white border border-[#EAEAEA] xl:border-b-[6px] md:border-b-[6px] border-b-[7px] border-b-[#CBEC5E] shadow-[0px_4px_20px_0px_#00000014] mx-auto relative md:rounded-[16px] rounded-[30px]`} style={{borderRadius: `${radius ?radius: ""}`}}>
      {children}
    </div>
  );
};
export default AboutClientCard;
