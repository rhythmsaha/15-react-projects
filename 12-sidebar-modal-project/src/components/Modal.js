import React, { useContext } from "react";
import { AppContext } from "../store/Context";
import Button from "./Button";

const Modal = () => {
    const { closeModal } = useContext(AppContext);
    return (
        <div className="Modal">
            <div className="ModalDiv">
                <div>Hello world</div>
                <Button click={closeModal}>Close Modal</Button>
            </div>
        </div>
    );
};

export default Modal;
