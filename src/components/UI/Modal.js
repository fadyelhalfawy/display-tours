import React, {Fragment} from "react";
import classes from "../modules/Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}/>
};

const ModalOverLay = props => {
    return (
    <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = props => {
    return(
        <Fragment>
            { ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement) }
            { ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement) }
        </Fragment>
    );
}

export default Modal;