export const StatusTag = ({ status }: { status: string }) => {
    const getStatusClasses = () => {
      switch (status) {
        case "Valid":
          return "bg-[#DBE6F6] text-[#2C68C6]";
        case "Success":
          return "bg-[#EEF6DB] text-[#5A7D06]";
        case "Reject":
          return "bg-[#F7E7E3] text-[#E73E1E]";
        case "Pending":
          return "bg-[#F6EED9] text-[#CAAC00]";
        case "Inactive":
          return "bg-[#E2E2E2] text-[#5B5B5B]";
        default:
          return "bg-[#EAEAEA] text-[#737373]";
      }
    };
  
    return (
      <div
        className={`w-[84px] h-[32px] rounded-[30px] flex items-center justify-center text-sm font-medium ${getStatusClasses()}`}
      >
        {status || "Inactive"}
      </div>
    );
  };