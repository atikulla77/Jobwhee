"use client";

import React, {useState} from "react";
import TalentProfile from "@/components/Talent/TalentProfileMainPage/TalentProfileMainPage";

const TalentProfilePage = () => {

    const [isViewedClient, setIsViewedClient] = useState(false);
    return (
        <div>
            <TalentProfile talentSide={true}
                           isViewedClient={isViewedClient}
                           setIsViewedClient={setIsViewedClient}/>
        </div>
    );
};
export default TalentProfilePage;
