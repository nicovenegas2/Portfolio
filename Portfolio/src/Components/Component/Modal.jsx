import React from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import '../../Styles/Components/Modal.css';


function Modal({onClose, children}) {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                {children}
            </div>
            <motion.div className="modal-background" onClick={onClose}></motion.div>
        </div>,
        document.getElementById('modal-root')
    )

}

export default Modal;