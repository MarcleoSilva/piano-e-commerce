import InstrumentItem from "./InstrumentItem";

export default function Catalogue(){
    return(
        <div className="w-fit h-100 border border-gray-200 rounded-2xl text-center overflow-y-scroll">
            <h1 className="font-(family-name:--itemname-font) text-2xl"><b>Catalogue</b></h1>
            <div className="grid grid-cols-2 gap-5  p-5">
                <InstrumentItem name="Piano" price={2000} image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steinway_Vienna_011.JPG"/>
                <InstrumentItem name="Bass" price={2000} image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steinway_Vienna_011.JPG"/>
                <InstrumentItem name="banjo" price={2000} image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steinway_Vienna_011.JPG"/>
                                <InstrumentItem name="Piano" price={2000} image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steinway_Vienna_011.JPG"/>
                <InstrumentItem name="Bass" price={2000} image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steinway_Vienna_011.JPG"/>
                <InstrumentItem name="banjo" price={2000} image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steinway_Vienna_011.JPG"/>
            </div>
        </div>

    )
}