import workerImage from "../../../../../public/images/all-images/image373.png"

export interface fileAndLinksData {
    id: number;
    name: string;
    date: string;
    size: string;
    type: string;
    url: string
}

const fileAndLinksData: fileAndLinksData[] = [
    // First 15 text-only messages (>= 50 characters)
    {
        id: 101,
        name: "file.pdf",
        date: "Mar 12, 2025 at 12:34 PM",
        size: "915KB",
        type: "file",
        url:""
    },
    {
        id: 102,
        name: "file.docx",
        date: "Mar 12, 2025 at 12:34 PM",
        size: "915KB",
        type: "file",
        url:""
    },
    {
        id: 103,
        name: "file.xlxs",
        date: "Mar 12, 2025 at 12:34 pm",
        size: "915KB",
        type: "file",
        url:""
    },
    {
        id: 104,
        name: "image 1.jpg",
        date: "Mar 12, 2025 at 12:34 pm",
        size: "915KB",
        type: "image",
        url: workerImage as unknown as string
    },
    {
        id: 105,
        name: "namesusername@gmail.com",
        date: "Mar 12, 2025 at 12:34 pm",
        size: "915KB",
        type: "link",
        url:""
    },
];



export default fileAndLinksData;
