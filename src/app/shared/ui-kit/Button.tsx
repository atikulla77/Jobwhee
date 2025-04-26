interface ButtonProps {
  width: string;
  type:string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ width,type='active', text='Next' }) => {
  return (
    <button
    style={{ width, }}
      className={`w-${width} h-[48px] text-[#18470D] text-[16px] rounded-[50px] font-medium   ${
       type === 'active'
          ? " bg-[#CBEC5E] text-[#18470D] cursor-pointer  hover:bg-[#ACD624] "
          : " bg-[#EAEAEA] text-[#B8B8B8] "
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
