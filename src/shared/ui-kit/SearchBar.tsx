import { SearchIcon } from "../../../public/icons/talent-client/SearchIcon";

interface SearchBarProps {
    className?: string;
    placeholder?: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className = "", placeholder = "", setSearch = () => { } }) => {
    return (
        <div
            className={`border border-[#EAEAEA] rounded-[73px] flex items-center p-1 ${className}`}
            style={{ minWidth: "200px" }} // optional min-width
        >
            <div className="flex-shrink-0">
                <SearchIcon />
            </div>
            <input
                onChange={(e) => setSearch(e.target.value)}
                className="flex-grow h-6 text-base font-medium outline-none text-[#737373] placeholder:text-[#737373] px-3"
                placeholder={placeholder}
            />
        </div>
    );
};