'use client';

import React, {useEffect, useState, useTransition} from 'react';
import Image from 'next/image';

import {registerUser} from '@/lib/api/authApi/authApi';
import {Link, Locale, usePathname, useRouter} from '@/i18n/routing';
import {UserTypeEnum} from '@/constants/UserTypeAndRoleEnum';
import SelectionCard from '@/components/Sign-up/SelectionCard';
import {SignUpForm} from './SignupForm';
import {subscribeTalent} from '@/lib/api/subscribeApi/subscribeApi';
import {getEmail} from '@/lib/api/footerApi/footerApi';
import {getLanguages} from '@/lib/api/languageApi/languageApi';
import {useTranslations, useLocale} from 'next-intl';
import {useParams} from 'next/navigation';
import useSWR from 'swr';
import {ClientIcon} from '../../../../../public/icons/talent-client/ClientIcon';
import {TalentIcon} from '../../../../../public/icons/talent-client/TalentIcon';
import {toast} from 'react-toastify';
import {CheckIcon} from '../../../../../public/icons/CheckIcon';

const SignUp: React.FC = () => {
    const [role, setRole] = useState<UserTypeEnum.Client | UserTypeEnum.Talent>(
        UserTypeEnum.Client
    );

    const t = useTranslations('HomePage');
    const [isDropdownActive, setDropdownActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(t('contract.talent'));

    const [firstName, setFirstName] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const handleSubscribe = async () => {


        if (!firstName || !emailInput) {
            alert('Please enter your full name and email.');
            return;
        }

        try {
            await subscribeTalent({fullName: firstName, email: emailInput});
            toast.success('Subscribed successfully!');
            console.log('Subscribed successfully!');
            // Optional: clear inputs or show toast
            setFirstName('');
            setEmailInput('');
        } catch (error) {
            console.error('Failed to subscribe:', error);
            // Optional: show error toast
        }
    };
    const handleDropdownClick = () => {
        setDropdownActive(!isDropdownActive);
    };
    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setDropdownActive(false);
    };
    const pathname = usePathname();
    console.log(pathname);
    const {data: email, error: emailError} = useSWR(['/supportemail'], () =>
        getEmail()
    );


    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="  flex-col items-center  mx-auto max-w-[1200px]">
            <Image
                src={'/comingsoon.png'}
                width={1200}
                height={500}
                alt={''}
                className=" object-cover h-[370px] mt-20"
            ></Image>
            <div className=" flex flex-col items-center">
                <div
                    className="relative mt-[66px] max-w-[395px] mx-auto sm:mx-0 sm:max-w-[459px] sm:justify-between xl:max-w-[555px] drop-shadow-xl pl-4 w-full h-[50px] 2xl:h-[60px] xl:rounded-[73px] bg-white flex items-center px-1 rounded-[60px]">
                    <div className=" flex items-center w-full">
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder={t('shared.firstNameLastName')}
                            className="ml-2 lg:ml-2 w-full max-w-[330px] text-[#737373] placeholder:text-[#737373] placeholder:font-medium text-[12px] lg:text-base font-medium outline-none min-w-[250px]"
                        ></input>
                    </div>
                    <div className=" flex items-center pr-[27px]">
                        <div className="h-6 w-px bg-[#737373] ml-5"/>
                        <div
                            onClick={handleDropdownClick}
                            className="flex items-center cursor-pointer ml-[15px] gap-[11px]"
                        >
                            <p className="text-xs xl:text-base font-medium text-[#474747]">
                                {selectedOption}
                            </p>
                            <div
                                className={` ${
                                    isDropdownActive ? ' rotate-180' : ''
                                } duration-300`}
                            >
                                <CheckIcon/>
                            </div>
                        </div>
                    </div>

                    {isDropdownActive && (
                        <div
                            onClick={handleDropdownClick}
                            className="w-screen h-screen fixed z-10 -left-[400px]  -top-[600px]"
                        ></div>
                    )}

                    {isDropdownActive && (
                        <div
                            onClick={handleDropdownClick}
                            className="w-full h-full fixed z-50 left-0 top-0"
                        ></div>
                    )}

                    <div
                        className={` cursor-pointer max-w-[239px] w-full h-fit z-20 px-[12px] py-[5px] bg-white absolute top-14 xl:top-16 right-0 shadow-md rounded-[12px] transition-all duration-300 ease-in-out 
                    ${
                            isDropdownActive
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-[-10px] scale-95 pointer-events-none'
                        }`}
                    >
                        <div
                            className=" flex gap-[6px]"
                            onClick={() => handleOptionSelect(t('shared.talent'))}
                        >
                            <TalentIcon/>
                            <div>
                                <p className=" text-[14px] text-[#181818] font-semibold">
                                    {t('shared.talent')}
                                </p>
                                <p className=" text-[11px]">Hire professionals effortlessly.</p>
                            </div>
                        </div>
                        <div
                            className=" flex gap-[6px] mt-[5px]"
                            onClick={() => handleOptionSelect(t('shared.client'))}
                        >
                            <ClientIcon/>
                            <div>
                                <p className=" text-[14px] text-[#181818] font-semibold">
                                    {t('shared.client')}
                                </p>
                                <p className=" text-[11px] pb-[5px] ">Apply to jobs posted by clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={` ${isDropdownActive ? 'z-[-1]' : ''} flex gap-1 items-center justify-center  w-full mt-[14px]`}>
                    <div
                        className="  max-w-[426px] w-full h-[50px] 2xl:h-[60px] drop-shadow-xl bg-white rounded-[73px] flex items-center px-[5px] gap-[15px]">
                        <Image src={'/userIcon.png'} width={50} height={50} alt=""/>
                        <input
                            onChange={(e) => setEmailInput(e.target.value)}
                            value={emailInput}
                            placeholder={t('enterYourEmail')}
                            className=" outline-none text-[#737373] text-[14px] w-full max-w-[330px]"
                        />
                    </div>
                    <button
                        onClick={handleSubscribe}
                        className=" w-[127px] h-[50px] 2xl:h-[60px] bg-[#CBEC5E] hover:bg-[#b6d15c] rounded-[27px] text-sm 2xl:text-base text-[#18470D] shadow-xl border-[3px] border-white"
                    >
                        {t('subscribe')}
                    </button>
                </div>
            </div>
        </div>

        // <div>
        //   {IsApplyed ? (
        //   <SignUpForm role={selectedRole}/>
        //   ) : (
        //     <main className="flex justify-center 2xl:mt-[216px] sm:mt-[130px] lg:mt-[152px] px-[50px] mt-[141px] mb-[50px]">
        //       <div className="content">
        //         <p className="text-[#797E88] text-[20px] text-center font-medium xl:text-[28px] 2xl:text-[24px] lg:text-24px md:text-[24px]">
        //           Welcome to
        //         </p>
        //         <div>
        //           <div className="flex justify-center">
        //             <Image
        //               src={"/jobwhee-icon.png"}
        //               width={274}
        //               height={43}
        //               alt="jobwhee-icon"
        //               className="sm:w-[250px] sm:h-[40px] xl:mt-[12px] 2xl:mt-[20px] w-[217px] h-[35px] xl:w-[274px] xl:h-[43px] sm:mt-[6px] mt-[12px]"
        //             />
        //           </div>
        //           <div className="flex flex-col sm:flex-row justify-center items-center gap-x-[28px] lg:gap-x-[38px] 2xl:gap-x-[25px] gap-y-[16px] sm:gap-y-[18px] flex-wrap mt-[94px] 2xl:mt-[157px] lg:mt-[132px] sm:mt-[90px]">
        //             <div onClick={() => selectClient()}>
        //               <SelectionCard
        //                 text="I’am a Client, hiring for a project"
        //                 imgSrc="/client-icon.png"
        //                 selected={selectedRole === "Client" ? true : false}
        //               />
        //             </div>
        //             <div onClick={() => selectTalent()}>
        //               <SelectionCard
        //                 text="I’am a Talent, looking for work"
        //                 imgSrc="/talent-icon.png"
        //                 selected={selectedRole === "Talent" ? true : false}
        //               />
        //             </div>
        //           </div>
        //           <div className="flex flex-col items-center lg:mt-[98px] mt-[70px]">
        //             <button
        //               onClick={() => HandleApplyClick()}
        //               className=" text-[12px] xl:text-[16px] 2xl:text-[18px] font-medium cursor-pointer sm:w-[315px] sm:h-[55px] w-[203px] h-[44px] bg-[#CBEC5E] rounded-[46px] text-[#18470D]"
        //             >
        //               {selectedRole === "Talent"
        //                 ? "Apply as a Talent"
        //                 : "Apply as a Client"}
        //             </button>
        //             <p className="2xl:mt-[19px] lg:mt-[24px] text-black sm:text-[16px] 2xl:text-[18px] sm:mt-[26px] mt-[9px] font-medium lg:font-light text-[14px] relative">
        //               Already have an  account?{" "}
        //               <Link
        //                 className="text-[#18470D] font-medium relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[2.8px] after:h-[0.8px] after:bg-[#18470D]"
        //                 href={"/auth/signin"}
        //               >
        //                 Log In
        //               </Link>
        //             </p>
        //           </div>
        //         </div>
        //       </div>
        //     </main>
        //   )}
        // </div>
    );
};

export default SignUp;
