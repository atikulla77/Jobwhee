import Image from "next/image";

export const EmptyFileCard = () => {
  return (
    <div className="max-w-[335px] w-full md:max-w-[387px] 2xl:max-w-[467px] ">
      <div className=" relative">
        <Image
          src={"/cardTop.png"}
          width={0}
          height={0}
          alt="card"
          sizes="100vw"
          className=" w-full  max-h-[53px] hidden sm:block translate-y-1 2xl:translate-x-[0.8px]  "
        />
        <div className=" flex justify-end">
          <Image
            src={"/cardTopMobile.png"}
            width={227}
            height={47}
            alt="card"
            className=" w-full max-w-[227px]  max-h-[53px] block sm:hidden 2xl:translate-x-[0.8px]  "
          />
        </div>

        <div className=" relative bg-white   rounded-[30px] rounded-tr-none px-[10px] 2xl:px-[28px] py-6 sm:max-h-[430px] w-full 2xl:h-[440px]">
          
        </div>
      </div>
    </div>
  );
};
