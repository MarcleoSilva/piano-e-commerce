import axios, { type AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { InstrumentData } from "../modules/data/InstrumentData"

const API_URL = "http://localhost:8080"
const ENDPOINT = "/instrument"

const postData = async(data: InstrumentData): AxiosPromise<unknown> => {
    const response = axios.post(API_URL + ENDPOINT, data)
    return response;
}

export function useInstrumentDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['instrument']})

        }
    })
    return mutate
}