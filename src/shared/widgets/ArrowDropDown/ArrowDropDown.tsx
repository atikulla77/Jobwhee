import { BlackRowIcon } from "../../../../public/icons/talent-client/BlackRowIcon";
interface ArrowDropDown {
  title: string;
  hasBg?: boolean;
  insideElement: React.ReactNode;
  open: boolean;
  setOpen: () => void;
}

const ArrowDropDown = (card: ArrowDropDown) => {

  return <div
    className={`cursor-pointer   rounded-t-[20px]  hover:scale-105  py-[18px] duration-200
                ${card.hasBg && card.open
        ? ` bg-white` :
        card.hasBg ? "border-b border-b-[#E2E2E2]"
          : 'bg-transparent'
      }`}
  >
    <div className=" w-full flex justify-between items-center " onClick={() => card.setOpen()}>
      <h2 className=" text-[14px] sm:text-[14px] lg:text-[22px] 2xl:text-[26px] font-medium text-black">
        {card.title}
      </h2>
      <div
        className={`w-[22.65px] h-[22.65px] sm:w-[22.65px] sm:h-[22.65px] lg:w-[40px] lg:h-[40px] 2xl:w-[48px] 2xl:h-[48px] sm:w-10 sm:h-10 bg-[#C1EC05] rounded-full flex items-center transition-all duration-300 justify-center ${card.open ? ' ' : ' -rotate-90'
          } `}
      >
        <BlackRowIcon />
      </div>
    </div>
    {
      card.open && card.insideElement
    }
  </div>
}
export default ArrowDropDown;