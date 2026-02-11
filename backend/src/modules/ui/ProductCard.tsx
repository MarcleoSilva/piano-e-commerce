export default function ProductCard(
    {name, image, price}:{name: string, image: string, price: number}
    ){
    return(
        <div className="grid w-50 h-50 border-2 border-gray-100 rounded-2xl
        items-center justify-center overflow text-center shadow-md
        font-(family-name:--mainbigfont)">
            <h1 className="text-2xl">{name}</h1>
            <hr className="border"></hr>
            <img src={image} className="w-25 h-25 rounded-2xl object-cover"></img>
            <p><b>Price: </b>{price}</p>

        </div>
    )
}