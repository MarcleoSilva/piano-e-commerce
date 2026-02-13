import { useInstrumentData } from "../../hooks/useInstrumentData";
import InstrumentItem from "./InstrumentItem";

export default function Catalogue(){
    const {data} = useInstrumentData();
    return(
        <div className="w-fit h-100 border border-gray-200 rounded-2xl text-center overflow-y-scroll m-10">
            <h1 className="font-(family-name:--itemname-font) text-2xl"><b>Catalogue</b></h1>
            <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
                {data?.map(InstrumentData =>   // `?` works to show it may be null or undefined, so it can handle correctly
                    <InstrumentItem 
                    key={InstrumentData.id}
                    price={InstrumentData.price} 
                    name={InstrumentData.name} 
                    image={InstrumentData.image} />)}
            </div>
        </div>

    )
}