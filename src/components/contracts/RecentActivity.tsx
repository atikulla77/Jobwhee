import Button from "@/shared/ui-kit/Button";

const RecentActivity = () => {
  const activities = [
    {
      date: "September 15, 2024",
      description: "You give Maria T. feedback.",
    },
    {
      date: "September 15, 2024",
      description: "Maria T. gives you feedback.",
    },
    {
      date: "September 15, 2024",
      description: "Eleni C. ended your contract.",
    },
    {
      date: "September 15, 2024",
      description: `Payment for the milestone <span class="!text-[#18470D] underline cursor-pointer">Touch-ups & Post-Event Care</span> has been rejected.`,
    },
    {
      date: "September 15, 2024",
      description: `Payment for the milestone <span class="!text-[#18470D] underline cursor-pointer">Touch-ups & Post-Event Care</span> has been successfully released.`,
    },
    {
      date: "September 15, 2024",
      description: `Maria T. send request for payment, milestone <span class="!text-[#18470D] underline cursor-pointer">Touch-ups & Post-Event Care</span>.`,
    },
    {
      date: "September 15, 2024",
      description: `Eleni C. activate milestone <span class="!text-[#18470D] underline cursor-pointer">Touch-ups & Post-Event Care</span>.`,
    },
    {
      date: "September 15, 2024",
      description: `Eleni C. activate milestone <span class="!text-[#18470D] underline cursor-pointer">Touch-ups & Post-Event Care</span>.`,
    },
    {
      date: "September 15, 2024",
      description: `Eleni C. created milestone <span class="!text-[#18470D] underline cursor-pointer">Touch-ups & Post-Event Care</span>.`,
    },
  ];

  return (
    <div className=" text-[#545454] rounded-[16px] border border-[#CBEC5E] xl:p-[28px] md:p-[20px] p-[14px]">
      <h2 className="text-[16px] text-[#8A8A8A] font-[500] mb-[4px]">
        Activity
      </h2>
      <div className="w-full h-[1px] bg-[#aeb3bc] relative mb-[11px]">
        <div className="w-[119px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 top-[-2.5px]"></div>
      </div>
      <h1 className="text-[30px] font-[500] text-black md:mb-[22px] mb-[4px]">
        Recent Activity
      </h1>

      <div className="md:flex hidden items-center gap-[111px] 2xl:mb-[17px] xl:mb-[11px] mb-[-10px] text-black">
        <span className="w-[157px] text-[16px] font-[500]">Date</span>
        <span className="text-[16px] font-[500]">Description</span>
      </div>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-col md:gap-[111px] gap-[4px] md:pt-[30px] pt-[18px] text-black"
        >
          <span className="md:hidden block text-[16px] font-[500]">
            Date
          </span>
          <p className="md:w-[157px] w-full text-[16px] text-[#545454] font-[500]">
            {activity.date}
          </p>
          <span className="md:hidden block text-[16px] font-[500] pt-[4px]">
            Description
          </span>
          <p
            className={`2xl:w-[720px] md:w-[450px] w-full text-[16px]`}
            dangerouslySetInnerHTML={{ __html: activity.description }}
          ></p>
        </div>
      ))}
      <div className="flex justify-center md:mt-[40px] mt-[30px]">
        <div className="w-[200px] xl:h-[48px] h-[40px]">
          <Button action={"Load More"} type={"transparent"} />
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
