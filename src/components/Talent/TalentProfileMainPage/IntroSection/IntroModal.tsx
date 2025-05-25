import React, {useEffect, useState} from 'react';
import {useTalentProfile} from '@/components/Talent/TalentProfileMainPage/hooks/useTalentProfile';
import {updateTalentIntro} from '@/lib/api/talent/talentById/talentIntroSection/postUpdateTalentIntro';

interface IntroProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const IntroProfileModal: React.FC<IntroProfileModalProps> = ({
                                                                 isOpen,
                                                                 onClose,
                                                             }) => {
    const {user, error, isLoading, mutate} = useTalentProfile();
    const [introTitle, setIntroTitle] = useState(user?.introTitle || '');
    const [introText, setIntroText] = useState(user?.introText || '');

    useEffect(() => {
        if (user) {
            setIntroTitle(user.introTitle || '');
            setIntroText(user.introText || '');
        }
    }, [user]);
    if (!isOpen) return null;

    const handleSave = async () => {
        const updatedIntro = {introTitle, introText};

        try {
            await updateTalentIntro(updatedIntro);
            await mutate();
        } catch (error) {
            console.error('Failed to update intro:', error);
        }
        onClose();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className=" bg-white w-[90%] md:w-[80%] max-w-[878px] rounded-[20px] md:rounded-[30px] shadow-lg relative max-h-[90vh] flex flex-col overflow-hidden px-4 md:px-[30px] ">
                <button
                    className="absolute top-4 right-4 text-gray-500 text-lg"
                    onClick={onClose}
                >
                    ✖
                </button>
                <div className="lg:p-6 overflow-y-auto flex-1 pt-4">
                    <h2 className="text-[30px] font-medium text-[#18470D] mb-[17px]">
                        Edit Your Info
                    </h2>
                    <p className=" text-sm md:text-[16px] text-[#545454]">
                        Use this section to showcase your expertise and qualifications
                        effectively.
                    </p>
                    <ul className="list-disc text-sm 2xl:text-[16px] text-[#545454] pl-5 mt-2 mb-4">
                        <li>Highlight your key skills and strengths.</li>
                        <li>
                            Showcase notable works, achievements, and educational background.
                        </li>
                        <li>Keep it concise, clear, and free from errors.</li>
                    </ul>
                    <div className="mb-4">
                        <label className="block text-[16px] sm:text-[18px] text-[#545454]">
                            Your Title
                        </label>
                        <input
                            onChange={(e) => setIntroTitle(e.target.value)}
                            value={introTitle}
                            type="text"
                            placeholder="e.g. Math Teacher"
                            className="w-full p-2 border rounded-[12px] focus:border-[#545454] focus:border-[1px] border-[#AEB3BC] mt-1 placeholder:leading-[24px] placeholder-[#8B939F] placeholder:text-[16px]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Intro
                        </label>
                        <textarea
                            onChange={(e) => setIntroText(e.target.value)}
                            value={introText}
                            placeholder="Example: Hello! I'm [Your Name], a professional UX/UI designer with [X] years of experience helping businesses create engaging and intuitive digital experiences. I specialize in designing user interfaces that are not only visually appealing but also highly functional and easy to navigate.
I have a strong understanding of user behavior and a deep passion for designing seamless, user-friendly solutions. From wireframing to high-fidelity mockups and prototypes, I ensure that every detail contributes to a smooth user experience across web and mobile platforms."
                            className="p-2.5 w-full border rounded-[12px] focus:border-[#545454] focus:border-[1px] border-[#AEB3BC] mt-1 placeholder-[#8B939F] placeholder:text-[16px] placeholder:leading-[24px] h-[224px]"
                        ></textarea>
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
        </div>
    );
};

export default IntroProfileModal;
