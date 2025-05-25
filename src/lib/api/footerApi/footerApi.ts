import useSWR from "swr";
import { $fetch } from "@/$api/fetch.api";

interface Email {
  data: {
    createdAt: string;
    id: number;
    email: string;
    updatedAt: string;
  };
}

interface Links {
  data: {
    url: string;
    label: number;
  }
}

export const getEmail = async (): Promise<Email> => {
  try {
    const response = await $fetch.get<Email>("/supportemail", false, {});
    return response;
  } catch (error) {
    console.error("Error fetching talent steps:", error);
    throw error;
  }
};

export const getLinks = async (): Promise<Links> => {
  try {
    const response = await $fetch.get<Links>("/footerlink", false, {});
    return response;
  } catch (error) {
    console.error("Error fetching talent steps:", error);
    throw error;
  }
};