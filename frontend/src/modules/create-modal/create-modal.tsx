import { useState } from "react";
import { useInstrumentDataMutate } from "../../hooks/useInstrumentDataMutate";
import type { InstrumentData } from "../data/InstrumentData";

interface InputProps{
    label: string,
    value: string | number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateValue(value: any): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}
            className="border border-gray-100 shadow-sm rounded-4xl
            w-1/2 text-center"></input>
        </>
    )
}

export function CreateModal(){
    const cleanSpaces = () => {
        setName("");
        setPrice(0);
        setImage("")
    }

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate} = useInstrumentDataMutate();

    const submit = () => {
        const instrumentData: InstrumentData = {
            name,
            price,
            image
        };
        mutate(instrumentData);
        cleanSpaces();
    }


        return(
        <div className="bg-[rgba(0,0,0,0.3)] fixed top-0 left-0
        h-full w-full flex justify-center">
            <div className="border grid grid-cols-1 gap-3 self-center 
            text-center border-gray-200 rounded-lg shadow-md p-5 m-2 w-fit 
            bg-white">
                <div>
                    <h2 className="font-[--itemname-font] text-3xl
                    pb-2">Register a new Instrument or Gear</h2>
                    <form className="grid grid-cols-1 font-normal gap-2 
                    place-items-center ">
                        <Input label="Instrument/Gear" value={name} updateValue={setName} />
                        <Input label="Price" value={price} updateValue={setPrice} />
                        <Input label="Image URL" value={image} updateValue={setImage} />
                    </form>
                    <div className="grid grid-cols-1 gap-4 pt-2 
                    place-items-center">
                        <button onClick={submit} className=" mt-3 border 
                        shadow-md border-gray-200 p-2 hover:bg-gray-100 
                        hover:shadow-lg">
                            Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

