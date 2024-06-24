import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}) => {
    const[modals, setModals] = useState({});

    const openModal = (modalName) => setModals({ ...modals, [modalName]: true});
    const closeModal = (modalName) => setModals({ ...modals, [modalName]: false});

    return(
        <ModalContext.Provider value={{modals, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children : PropTypes.any
}