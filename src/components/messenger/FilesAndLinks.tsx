import Image from 'next/image';
import React, { useMemo, useState } from 'react'
import { DropDownArrowIcon } from '../../../public/icons/DropDownArrowIcon';
import greenLinkIcon from '../../../public/images/icon-images/green-link.svg';
import pdfIcon from "../../../public/images/icon-images/pdf-icon.svg"
import docxIcon from "../../../public/images/icon-images/docx-icon.svg"
import xlsxIcon from "../../../public/images/icon-images/xlsx-icon.svg"
import linkImage from "../../../public/images/icon-images/link.png"
import downloadImage from "../../../public/images/icon-images/download-cloud.png"
import noFiles from "../../../public/images/all-images/no-files.png"

import workerImage from "../../../public/images/all-images/image373.png"

import { SearchBar } from '@/shared/ui-kit/SearchBar';
import FilterTabs from '@/shared/widgets/Messenger/FilterTabs';

import fileAndLinksData from '../../app/[locale]/messenger/data/mochFileAndLinksData'

interface FilesAndLinksProps {
    setIsShowFileAndLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilesAndLinks: React.FC<FilesAndLinksProps> = ({ setIsShowFileAndLinks }) => {

    const [search, setSearch] = useState<string>("");
    const [selectedTab, setSelectedTab] = useState<string>('All');


    const filesAndLinks = [
        {
            name: "file.pdf",
            type: "file",
            url: "",
            date: "Mar 12",
            size: "915KB"
        },
        {
            name: "file.docx",
            type: "file",
            url: "",
            date: "Mar 12",
            size: "801KB"
        },
        {
            name: "file.xlxs",
            type: "file",
            url: "",
            date: "Mar 12",
            size: "918KB"
        },
        {
            name: "image 1.jpg",
            type: "image",
            url: workerImage,
            date: "Mar 14",
            size: "700KB"
        },
        {
            name: "image 1.jpg",
            type: "image",
            url: workerImage,
            date: "Mar 14",
            size: "700KB"
        },
        {
            name: "namesusername@gmail.com",
            type: "link",
            url: "",
            date: "Mar 14",
            size: "915KB"
        },
        {
            name: "sqliteonline.com",
            type: "link",
            url: "",
            date: "Mar 14",
            size: "915KB"
        },
        {
            name: "file.docx",
            type: "file",
            url: "",
            date: "Mar 12",
            size: "801KB"
        },
        {
            name: "file.xlxs",
            type: "file",
            url: "",
            date: "Mar 12",
            size: "918KB"
        },
        {
            name: "image 1.jpg",
            type: "image",
            url: workerImage,
            date: "Mar 14",
            size: "700KB"
        },
        {
            name: "image 1.jpg",
            type: "image",
            url: workerImage,
            date: "Mar 14",
            size: "700KB"
        },
        {
            name: "namesusername@gmail.com",
            type: "link",
            url: "",
            date: "Mar 14",
            size: "915KB"
        },
        {
            name: "sqliteonline.com",
            type: "link",
            url: "",
            date: "Mar 14",
            size: "915KB"
        },
    ]

    const fileImages = {
        pdf: pdfIcon,
        docx: docxIcon,
        xlxs: xlsxIcon,
    }

    const filteredFilesAndLinks = useMemo(() => {
        return fileAndLinksData?.filter((item) => {
            // Filter by tab
            const isFile = item?.type === "file" || item?.type === "image";
            const isLink = item?.type === "link";

            if (selectedTab === "Files" && !isFile) return false;
            if (selectedTab === "Links" && !isLink) return false;

            // Filter by search
            if (search.trim() && !item?.name?.toLowerCase().includes(search.toLowerCase())) return false;

            return true;
        });
    }, [filesAndLinks, selectedTab, search]);


    function getFileExtension(filename: string) {
        return filename.split('.').pop();
    }

    return (
        <>
            <div className='p-4'>
                <div className='w-full flex justify-start items-center p-2 cursor-pointer' onClick={() => setIsShowFileAndLinks(false)}>
                    <Image src={greenLinkIcon} alt='' />
                    <div className='w-full flex justify-between items-center'>
                        <p className='text-[18px] text-[#18470D] font-normal ml-3'>Files and links</p>
                        <div className='rotate-180'>
                            <DropDownArrowIcon />
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <SearchBar className="w-full" placeholder="Search" setSearch={setSearch} />
                </div>

                <div className="pt-4 px-4">
                    <FilterTabs
                        options={['All', 'Files', 'Links']}
                        defaultValue={selectedTab}
                        onChange={(val) => setSelectedTab(val)}
                    />

                </div>
            </div>
            <div className='h-[625px] overflow-y-scroll mx-2 my-2'>
                {
                    filteredFilesAndLinks?.length > 0 ? <>
                        {filteredFilesAndLinks?.map((item, idx) => {
                            const ext = getFileExtension(item.name);
                            const iconSrc = fileImages[ext];
                            const isFile = item?.type === "file" || item?.type === "image";

                            return (
                                <div key={idx} className="flex justify-start items-start gap-3 py-2 px-2">
                                    <div>
                                        {isFile ? (
                                            <Image
                                                src={item?.url || iconSrc}
                                                alt=""
                                                className={`w-[65px] ${!item?.url ? "p-2" : ""} rounded-[10px] bg-[#F0F1F4]`}
                                            />
                                        ) : (
                                            <div className="bg-[#CBEC5E] text-[#18470D] w-[55px] h-[55px] rounded-[10px] text-[30px] flex justify-center items-center uppercase">
                                                {item?.name?.charAt(0)}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-start gap-5 w-full">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[16px] font-normal">{item?.name}</h3>
                                            <p className="text-[#B9B9B9] text-sm">915KB · Mar 12, 2025 at 12:34 pm</p>
                                        </div>

                                        {isFile && (
                                            <div className="flex items-center gap-3">
                                                <Image src={linkImage} className="w-[16px] h-[16px]" alt="" />
                                                <Image src={downloadImage} className="w-[16px] h-[16px]" alt="" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </> : <>
                        <div className='w-full h-[75%] flex justify-center items-center'>
                            <div className='flex flex-col justify-center items-center'>
                                <Image src={noFiles} alt='' className='w-[159px] h-[159px]' />
                                <h1 className='text-[24px] font-medium'>No files or links</h1>
                            </div>
                        </div>
                    </>
                }

            </div>
        </>
    )
}

export default FilesAndLinks