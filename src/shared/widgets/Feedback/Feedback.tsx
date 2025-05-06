import StarRating from "@/shared/ui-kit/StarRating";

const Feedback = () => {
  return (
    <div className="2xl:h-[1068px] xl:h-[1191px] h-fit rounded-[16px] border border-[#CBEC5E] xl:p-[28px] md:p-[20px] p-[14px]">
      <h2 className="text-[16px] text-[#8A8A8A] font-[500] mb-[4px]">
        Feedback
      </h2>
      <div className="w-full h-[1px] bg-[#aeb3bc] relative">
        <div className="w-[92px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 top-[-2.5px]"></div>
      </div>

      <div className="mt-[12px]">
        <h3 className="text-[20px] font-[500] mb-[6px]">Maria T.'s feedback</h3>
        <div className="flex items-center gap-[10px] pb-[10px]">
          <StarRating
            rating={5}
            width={16}
            height={16}
            gap="gap-[1px]"
            responsiveWidthHeight="md:w-[16px] !w-[16px]"
          />
          <p className="text-[16px] text-[#545454]">5.0</p>
        </div>
        <p className="xl:w-[350px] w-[99%] text-[#545454]">
          Great experience working with Maria S! <br className="xl:flex hidden" />
          She provided clear instructions, timely <br className="xl:flex hidden" />
          feedback, and were very professional <br className="xl:flex hidden" />
          throughout the project. The communication <br className="xl:flex hidden" />
          was smooth, and they valued quality work. <br className="xl:flex hidden" />
          I would love to collaborate again in the <br className="xl:flex hidden" />
          future!
        </p>
      </div>
      <div className="xl:mt-[39px] md:mt-[18px] mt-[21px]">
        <h3 className="text-[20px] font-[500] mb-[6px]">Eleni C.'s feedback</h3>
        <div className="flex items-center gap-[10px] pb-[10px]">
          <StarRating
            rating={5}
            width={16}
            height={16}
            gap="gap-[1px]"
            responsiveWidthHeight="md:w-[16px] !w-[16px]"
          />
          <p className="text-[16px] text-[#545454]">5.0</p>
        </div>
        <p className="text-[#545454]">
          The hairstylist was amazing! She created the perfect bridal updo that
          lasted all day. Professional, friendly, and truly talented!
        </p>
      </div>
    </div>
  );
};

export default Feedback;
