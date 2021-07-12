import React, { useContext } from "react";
import ReactDom from "react-dom";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { AppContext } from "./store/Context";

const App = () => {
    const { isModalOpen, openModal } = useContext(AppContext);
    return (
        <>
            <Sidebar />
            <main>
                <Button click={openModal}>Open Modal</Button>
                {isModalOpen &&
                    ReactDom.createPortal(
                        <Modal />,
                        document.getElementById("modal")
                    )}
            </main>
        </>
    );
};

export default App;
