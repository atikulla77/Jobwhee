import {jobData} from "@/components/Talent/JobApply/dummyJobData/jobData";
import {JobDetailsLayout} from "@/components/Talent/JobApply/job-details-layout/JobDetailsLayout";


export default function Home() {
    return (
        <div>
            <div className="2xl:mt-[106px] sm:mt-[37px] mt-[42px] mb-[198px]">
                <JobDetailsLayout jobData={jobData}/>
            </div>
        </div>
    );
}
