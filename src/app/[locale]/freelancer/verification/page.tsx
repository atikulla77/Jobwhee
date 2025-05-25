"use client";

import React, {useEffect, useState} from "react";
import TalentVerification from "@/components/Talent/TalentVerification/TalentVerification";
import {TalentVerificationProvider} from "@/contextProviders/TalentVerificationProvider";
import Spinner from "@/shared/widgets/Loader/Loader";


const TalentVerificationPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((res) => setTimeout(res, 1000));
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <TalentVerificationProvider>
            <div className="flex flex-col bg-white h-fit min-h-screen">
                {loading ? <Spinner full/> : <TalentVerification/>}
            </div>
        </TalentVerificationProvider>
    );
};

export default TalentVerificationPage;
