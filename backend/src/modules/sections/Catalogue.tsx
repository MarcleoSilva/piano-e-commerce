import ProductCard from "../ui/ProductCard";

export default function Catalogue(){
    return(
        <div className="w-fit h-100 overflow-y-scroll border
            border-gray-100 shadow-lg rounded-4xl text-center m-10 pt-2">
            <h1 className="font-(family-name:--bigtextfont) text-4xl md:text-7xl"> Catalogue</h1>
            <div className="grid md:grid-cols-3 gap-5 p-10">
                <ProductCard 
                name="Piano" 
                image="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steinway_Vienna_011.JPG"
                price = {20}
                ></ProductCard>
                <ProductCard 
                name="Bass" 
                image="https://images.tcdn.com.br/img/editor/up/414764/11947_4.jpg"
                price = {30}
                ></ProductCard>
                <ProductCard 
                name="Bell" 
                image="https://m.media-amazon.com/images/I/71urGgZbddL.jpg"
                price = {50}
                ></ProductCard>
                <ProductCard 
                name="Guitar" 
                image="https://images.guitarguitar.co.uk/cdn/small/160/news_753_Every_Type_of_Guitar_Explained_IMAGE10.jpg"
                price = {10}
                ></ProductCard>
                <ProductCard 
                name="Drum kit" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShlOViueyy8nAbhBUDjXALW-A9yR7YzC-rw&s"
                price = {40}
                ></ProductCard>
            </div>
        </div>
    )
}