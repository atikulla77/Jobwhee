import {
    DndContext,
    useSensors,
    useSensor,
    closestCenter,
    PointerSensor,
} from '@dnd-kit/core';
import {BlackCloseIcon} from '../../../../../public/icons/BlackCloseIcon';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {useEffect} from 'react';
import PortfolioWorkItem from './PortfolioWorkItem';
import ClickOutside from '@/shared/widgets/ClickOutside/ClickOutside';

export interface UIReorderPortfolio {
    id: string;
    url: string;
    text: string;
}

interface PortfolioWorksPopupProps {
    closePopup: () => void;
    works: UIReorderPortfolio [];
    setWorks: React.Dispatch<React.SetStateAction<UIReorderPortfolio []>>;
    onSave: (orderedWorks: UIReorderPortfolio []) => void;
}

export const PortfolioWorksPopup: React.FC<PortfolioWorksPopupProps> = ({
                                                                            closePopup,
                                                                            works,
                                                                            setWorks,
                                                                            onSave
                                                                        }) => {
    useEffect(() => {
        console.log(works);
    }, [works]);
    const sensors = useSensors(useSensor(PointerSensor));
    const handleDragEnd = (event: any) => {
        const {active, over} = event;
        if (!over || active.id === over.id) return;

        const oldIndex = works.findIndex((item) => item.id === active.id);
        const newIndex = works.findIndex((item) => item.id === over.id);

        setWorks((items) => arrayMove(items, oldIndex, newIndex));
    };

    return (
        <div
            className="sm:px-[40px] px-[20px] z-200 fixed flex justify-center items-center top-0 left-0 w-[100vw] h-[100vh] bg-[#0000006B]">
            <ClickOutside
                className='w-full bg-white rounded-[24px] lg:rounded-[30px] 2xl:max-w-[871px] 2xl:p-[32px_38px_24px_36px] lg:max-w-[876px] lg:p-[24px_40px_45px_38px] sm:max-w-[700px] sm:p-[24px_30px_20px_31px] max-w-[335px] p-[24px_8px_24px_16px]'
                onClick={() => closePopup()}>
                <div className="flex justify-between">
            <span className="text-[#18470D] font-medium lg:text-[30px] sm:text-[24px] text-[20px]">
              Move Portfolio works
            </span>
                    <div className="cursor-pointer" onClick={() => closePopup()}>
                        <BlackCloseIcon/>
                    </div>
                </div>
                <div className="2xl:mt-[23px] lg:mt-[32px] sm:mt-[34px] mt-[58px]">
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={works.map((item) => item.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            <div
                                className="flex flex-col gap-[10px] overflow-y-auto overflow-x-hidden max-h-[352px] sm:max-h-[293px] lg:max-h-[432px] customScroll pr-[8px] sm:pr-[9px] lg:pr-[13px] 2xl:pr-[11px]">
                                {works.map((file) => (
                                    <PortfolioWorkItem
                                        works={works}
                                        setWorks={setWorks}
                                        key={file.id}
                                        file={file}
                                    />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                </div>
                <hr className="bg-[#18470D] mt-[52px] sm:mt-[11px] lg:mt-[21px]"/>
                <div className="flex justify-end mt-[16px] sm:mt-[10px] 2xl:mt-[24px] gap-[11px] sm:gap-[8px]">
                    <button
                        onClick={() => closePopup()}
                        className="cursor-pointer w-[150px] h-[42px] rounded-[49px] sm:w-[200px] sm:h-[47px] text-[#18470D] text-[16px] font-medium hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(works)}
                        className="cursor-pointer w-[150px] h-[42px] rounded-[49px] sm:w-[200px] sm:h-[47px] text-[#18470D] bg-[#CBEC5E] text-[16px] font-medium hover:bg-[#ACD624]"
                    >
                        Save
                    </button>
                </div>
            </ClickOutside>
        </div>
    );
};
