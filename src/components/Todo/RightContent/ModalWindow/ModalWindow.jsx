import React from 'react';
import cl from "./ModalWindow.module.css"
import ava from "../../../../assets/svg/profile-logo.svg"
import {Link, useNavigate} from "react-router-dom";

const ModalWindow = ({active, setActive, clearAuthUserStore}) => {
    const rootClasses = [cl.modal]

    if (active) {
        rootClasses.push(cl.active);
    }

    const navigate = useNavigate()
    const handleClick = () => {
        clearAuthUserStore()
        navigate('/login')
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setActive(false)}>
            <div className={cl.modalContent} onClick={e => e.stopPropagation()}>
                <div className={cl.touchableArea} onClick={() => setActive(false)}>
                    <span className={cl.close}></span>
                </div>
                <div className={cl.container}>
                    <img src={ava} style={{width: 300}}/>
                    <div style={{fontSize: 40}}>
                        Денис Денисович
                    </div>
                    <div className={cl.quit}>
                        <div onClick={() => handleClick()}>Выйти</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
