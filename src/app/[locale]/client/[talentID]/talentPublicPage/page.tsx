"use client";

import React, {useState} from "react";
import TalentProfile from "@/components/Talent/TalentProfileMainPage/TalentProfileMainPage";

const TalentPublicPageFromClientSide = () => {
    const [isViewedClient, setIsViewedClient] = useState(true);

    return (
        <div>
            <TalentProfile talentSide={false} isViewedClient={isViewedClient}
                           setIsViewedClient={setIsViewedClient}/>
        </div>
    );
};
export default TalentPublicPageFromClientSide;
