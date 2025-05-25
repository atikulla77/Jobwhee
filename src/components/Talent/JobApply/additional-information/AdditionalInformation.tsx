interface AdditionalInformationProps {
  onChangeApplyData: (key: string, value: any) => void;
  error: boolean;
}

export const AdditionalInformation: React.FC<
  AdditionalInformationProps
> = ({onChangeApplyData, error}) => {
  return (
    <div className="mb-[44px] sm:mb-[74px] lg:mb-[57px]">
      <div>
        <span className="lg:text-[30px] sm:text-[20px] text-[16px] font-medium">Additional Information</span>
      </div>
      <div className="mt-[26px]">
        <p className="text-[#545454] text-[18px]">Cover letter</p>
        <textarea onChange={(e) => onChangeApplyData('additionalInfo', e.target.value)} className={`${error ? ' border-[#DD331D] ' : ' border-[#AEB3BC] '} text-[16px] mt-[8px] w-full outline-none border-[1px] rounded-[12px] resize-none h-[228px] p-[10px]`} placeholder="Mention the reasons why you chose us."></textarea>
        {error && (
          <p className="mt-[4px] text-[#DD331D] text-[12px]">This field is required</p>
        )}
      </div>
    </div>
  );
};
