import React from 'react';
import cl from "./ModalWindow.module.css"
import ava from "../../../../assets/svg/profile-logo.svg"
import {Link} from "react-router-dom";

const ModalWindow = ({active, setActive}) => {
    const rootClasses = [cl.modal]

    if (active) {
        rootClasses.push(cl.active);
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
                        <Link to={'/login'}>Выйти</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
