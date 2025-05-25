import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ImageUrlsType = {
  id: string | null;
  selfie: string | null;
  selfieWithId: string | null;
};

type ImageContextType = {
  imageUrls: ImageUrlsType;
  setImageUrls: Dispatch<SetStateAction<ImageUrlsType>>;
};

const TalentVerificationContext = createContext<ImageContextType | undefined>(
  undefined
);

export const useImageContext = (): ImageContextType => {
  const context = useContext(TalentVerificationContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

export const TalentVerificationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [imageUrls, setImageUrls] = useState<ImageUrlsType>({
    id: null,
    selfie: null,
    selfieWithId: null,
  });

  return (
    <TalentVerificationContext.Provider value={{ imageUrls, setImageUrls }}>
      {children}
    </TalentVerificationContext.Provider>
  );
};
