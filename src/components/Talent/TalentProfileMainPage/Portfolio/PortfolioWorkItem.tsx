import {useSortable} from '@dnd-kit/sortable';
import {OutlineArrowGreen} from '../../../../../public/icons/OutlineArrowGreen';
import {OutlineArrowGray} from '../../../../../public/icons/OutlineArrowGray';
import {DragIcon} from '../../../../../public/icons/talent-client/DragIcon';
import {DeleteIcon, EditIcon} from 'lucide-react';
import {CSS} from '@dnd-kit/utilities';

type Work = {
    id: string;
    url: string;
    text: string;
};

const PortfolioWorkItem = ({
                               file,
                               works,
                               setWorks
                           }: {
    file: { id: string; url: string; text: string };
    works: Work[];
    setWorks: React.Dispatch<React.SetStateAction<Work[]>>;
}) => {
    const {setNodeRef, transform, transition, attributes, listeners} =
        useSortable({id: file.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const handleSetPosition = (id: string, direction: 'up' | 'down') => {
        setWorks((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (index === -1) return prev;

            if (direction === 'up' && index > 0) {
                const newArray = [...prev];
                const temp = newArray[index - 1];
                newArray[index - 1] = newArray[index];
                newArray[index] = temp;
                return newArray;
            }

            if (direction === 'down' && index < prev.length - 1) {
                const newArray = [...prev];
                const temp = newArray[index + 1];
                newArray[index + 1] = newArray[index];
                newArray[index] = temp;
                return newArray;
            }

            return prev;
        });
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
            className="card-shadow flex h-[137px] rounded-[7px] border-[#B9B9B9] w-full border p-[11px_7px_11px_10px] sm:p-[16px_16px_16px_13px] lg:p-[16px_22px_16px_13px]"
        >
            <div className="flex items-center">
                <div className="flex justify-between items-center">
                    <div
                        {...attributes}
                        {...listeners}
                        className="cursor-move"
                        title="Drag to reorder"
                    >
                        <DragIcon/>
                    </div>
                </div>
                <div
                    className="ml-[10px] sm:ml-[16px] w-[124px] h-[84px] sm:w-[154px] sm:min-w-[154px] sm:h-[105px] rounded-[7px] overflow-hidden">
                    {
                        <img
                            {...attributes}
                            {...listeners}
                            title="Drag to reorder"
                            src={file.url}
                            alt="uploaded"
                            className="w-full h-full object-cover cursor-move rounded-[6px]"
                        />
                    }
                </div>
            </div>
            <div
                className="w-full flex items-center justify-center py-[16px] sm:py-0 sm:justify-between flex-wrap ml-[10px] sm:ml-[22px]">
                <div className="flex items-center h-fit">
          <span className="text-[16px] sm:text-[20px] text-[#18470D] font-medium text-nowrap">
            {file.text}
          </span>
                </div>
                <div className="flex gap-[10px] h-fit">
                    <div
                        className="cursor-pointer"
                        onClick={() => handleSetPosition(file.id, 'up')}
                    >
                        {works.findIndex((w) => w.id === file.id) === 0 ? (
                            <OutlineArrowGray/>
                        ) : (
                            <div className="rotate-180">
                                <OutlineArrowGreen/>
                            </div>
                        )}
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => handleSetPosition(file.id, 'down')}
                    >
                        {works.findIndex((w) => w.id === file.id) === works.length - 1 ? (
                            <div className="rotate-180">
                                <OutlineArrowGray/>
                            </div>
                        ) : (
                            <OutlineArrowGreen/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioWorkItem;
