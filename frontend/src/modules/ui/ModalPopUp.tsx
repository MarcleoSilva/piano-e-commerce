import { LuPiano } from "react-icons/lu";
import { useState } from "react";
import { CreateModal } from "../create-modal/create-modal";

export default function ModalPopUp(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }
    const showCloseButton = isModalOpen ? "block" : "hidden";
    
    return(
        <div>
            <button onClick={handleOpenModal} className={` ${!showCloseButton} shadow-md
            p-3 fixed right-5 bottom-2 rounded-2xl bg-blue-400 text-white
            hover:bg-blue-500 hover:shadow-lg flex row-auto text-2xl
            gap-2`}>+<LuPiano size={30} /></button>
            <button className={`${showCloseButton} shadow-md
            p-3 fixed right-5 bottom-2 rounded-2xl bg-blue-400 text-white
            hover:bg-blue-500 hover:shadow-lg flex row-auto text-2xl
            gap-2 z-10`} onClick={handleOpenModal}>Close</button>
            {isModalOpen && <CreateModal/>}
        </div>
        )
}
