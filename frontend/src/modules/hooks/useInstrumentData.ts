import axios, { type AxiosPromise } from "axios"
import type { InstrumentData } from "../data/InstrumentData"
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"
const ENDPOINT = "/instrument"

const fetchData = async(): AxiosPromise<InstrumentData[]> => {
    const response = axios.get(API_URL + ENDPOINT)
    return response;
}

export function useInstrumentData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['instrument'],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data
    }
}