import React, {useEffect, useState} from 'react';
import {useTalentProfile} from '@/components/Talent/TalentProfileMainPage/hooks/useTalentProfile';
import LanguagesSection from '@/components/Talent/TalentProfileMainPage/IntroSection/LanguagesSection';
import {updateTalentLanguages} from '@/lib/api/talent/talentById/talentIntroSection/postUpdateTalentLanguages';
import {toast} from 'react-toastify';

interface IntroProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Language {
    language: string;
    proficiency: string;
}

const LanguageProfileModal: React.FC<IntroProfileModalProps> = ({
                                                                    isOpen,
                                                                    onClose,
                                                                }) => {
    const {user, mutate} = useTalentProfile();

    const [languages, setLanguages] = useState<Language[]>([]);

    const userLanguages: Language[] = (user?.languages ?? []).map((lang: any) =>
        typeof lang === 'string'
            ? {language: '', proficiency: ''}
            : {language: lang.language, proficiency: lang.proficiency}
    );

    useEffect(() => {
        if (languages.length === 0 && userLanguages.length > 0) {
            setLanguages(userLanguages);
        }
    }, []);

    const handleSave = async () => {
        try {
            const hasIncompleteEntry = languages.some(
                (lang) =>
                    (lang.language.trim() && !lang.proficiency.trim()) ||
                    (!lang.language.trim() && lang.proficiency.trim())
            );

            if (hasIncompleteEntry) {
                toast.error('Please complete both language and proficiency fields.');
                return;
            }

            const filteredLanguages = languages.filter(
                (lang) => lang.language.trim() && lang.proficiency.trim()
            );

            await updateTalentLanguages({languages: filteredLanguages});
            await mutate();
            toast.success('Languages updated successfully!');
            onClose();
        } catch (err) {
            console.error('Failed to save languages:', err);
            toast.error('Something went wrong while saving.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className="bg-white w-[90%] md:w-[80%] max-w-[878px] rounded-[20px] md:rounded-[30px] shadow-lg relative max-h-[90vh] min-h-[556px] flex flex-col overflow-hidden px-[5px] md:px-[30px] ">
                <button
                    className="absolute top-4 right-4 text-gray-500 text-lg"
                    onClick={onClose}
                >
                    ✖
                </button>
                <div className=" p-4 md:p-6 overflow-y-auto flex-1">
                    <h2 className="text-[30px] font-medium text-[#18470D] mb-[17px]">
                        Add Languages
                    </h2>
                    <LanguagesSection
                        userLanguages={userLanguages}
                        onChange={setLanguages}
                    />
                    <div className=" w-full h-px bg-[#18470D] mt-12"/>
                    <div className=" mt-[30px] flex items-center justify-end">
                        <button
                            className=" text-[#18470D] max-w-[200px] w-full flex items-center justify-center cursor-pointer px-4 py-2 rounded-[49px]  h-[48px]  font-medium hover:bg-gray-100"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className=" max-w-[200px] w-full h-12 cursor-pointer rounded-[50px] bg-[#CBEC5E] flex items-center justify-center  text-[#18470D] font-medium  hover:bg-[#ACD624] "
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageProfileModal;
