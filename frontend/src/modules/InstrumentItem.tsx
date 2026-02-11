export default function InstrumentItem(
    {name, price, image}:{name: string, price: number, image:string}){

        return(
            <div className="h-fit w-fit border border-gray-200 grid 
            rounded-4xl shadow-sm hover:shadow-lg overflow-clip">
                <img src={image} className="object-cover object-center 
                 size-70"></img>
                <div className="bg-white rounded-lg rounded-b-3xl self-end
                w-70 h-fit text-center pb-1 pt-1 -mt-10">  
                    <h1 className="font-(family-name:--itemname-font) text-2xl">{name}</h1>
                    <p className="font-(family-name:--itemname-font) text-1xl italic"><b>Price: </b>{price}</p>
                </div>

            </div>

        )


}


