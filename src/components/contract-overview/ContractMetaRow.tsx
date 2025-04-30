import MilestoneItem from "./MilestoneItem"
import MilestoneTimeline from "./MilestoneTimeline"


const ContractMetaRow = () => {
  return (
    <div className="w-full flex justify-between">
      <MilestoneItem />
      <MilestoneTimeline />
    </div>
  )
}

export default ContractMetaRow
