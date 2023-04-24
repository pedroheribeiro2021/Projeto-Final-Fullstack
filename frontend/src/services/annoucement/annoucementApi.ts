import {api} from "../api";
import { AxiosResponse } from "axios";

interface Announcement {
    id: number;
    title: string;
    body: string;
    date: Date;
}

export const getAllAnnoucements = async (): Promise<any> => {
    try {
        const response:AxiosResponse<Announcement[]> = await api.get('/announcement');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
