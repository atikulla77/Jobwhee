"use client";

import TalentSettings from "@/components/Talent/TalentSettings/TalentSettings";
import {Footer} from "../../../../components/landingApp/Footer/Footer";

const FreelancerSettingsPage = () => {
    return (
        <div className={"flex flex-col bg-white"}>
            <TalentSettings/>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};
export default FreelancerSettingsPage;
