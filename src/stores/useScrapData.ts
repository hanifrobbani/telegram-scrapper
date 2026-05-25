import { create } from "zustand";
import { ScrapperItem, DataScrapperRespond } from "@/types/scrap.type";

interface DataScrapStore {
    rawData: ScrapperItem[];
    newProjects: ScrapperItem[];
    updatedProjects: ScrapperItem[];
    setScrapData: (response: DataScrapperRespond) => void;
}

export const useScrapData =
    create<DataScrapStore>((set) => ({
        rawData: [],
        newProjects: [],
        updatedProjects: [],

        setScrapData: (response) => {
            const newProjects =
                response.data.filter(
                    (item) => item.type === "new");

            const updatedProjects =
                response.data.filter(
                    (item) => item.type === "update");

            set({
                rawData: response.data,
                newProjects,
                updatedProjects,
            });
        console.log("data kesimpan di global satte zustand: ", newProjects)
        console.log("data kesimpan di global satte zustand: ", updatedProjects)
        },
    }));