import { $fetch } from "@/$api/fetch.api";

interface Language {
    id: number;
    code: string;
}

interface ContractTranslation {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    paymentType: string;
    clientImage: string;
    clientFirstName: string;
    clientLastName: string;
    clientPosition: string;
    clientRating: number;
    talentImage: string;
    talentFirstName: string;
    talentLastName: string;
    talentMajor: string;
    talentRating: number;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    budget: string;
}

interface Contract {
    id: number;
    createdAt: string;
    updatedAt: string;
    translation: ContractTranslation;
}

interface ContractsResponse {
    data: {
        language: Language;
        commonText?: string;
        contracts: Contract[];
    };
}

export const getContracts = async (
    languageCode: string = "en"
): Promise<ContractsResponse> => {
    try {
        return await $fetch.get<ContractsResponse>("/contract", false, {
            "Accept-Language": languageCode,
        });
    } catch (error) {
        console.error("Error fetching contracts:", error);
        throw error;
    }
};
