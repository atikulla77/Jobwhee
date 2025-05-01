import { Loader } from "lucide-react";

const Spinner = ({ size = 24, full = false }: { size?: number; full?: boolean }) => {
    const sizeClass = `w-[${size}px] h-[${size}px]`;

    return (
        <div className={full ? "flex justify-center items-center h-screen w-full" : ""}>
            <Loader className={`animate-spin text-gray-500 ${sizeClass}`} />
        </div>
    );
};

export default Spinner;
