import React, {useState, useEffect} from 'react';
import cl from "./ModalWindow.module.css"
import ava from "../../../../assets/svg/profile-logo.svg"
import {Link, useNavigate} from "react-router-dom";

const ModalWindow = ({active, setActive, clearAuthUserStore, userData, clearCategoriesStore, updateUsername}) => {
    let [editable, setEditable] = useState(0)
    let [Name, setName] = useState('')

    useEffect(() => {
        if (!userData.isLoading) {
            setName(userData.user.username)
        }
    }, [userData])

    const removeFunc = () => {
        setName(Name);
        setEditable("0")
        if (Name && Name.length < 30) {
            updateUsername(userData.user.id, Name)
        }
        else {
            setName(userData.user.username)
        }
    }

    const rootClasses = [cl.modal]

    if (active) {
        rootClasses.push(cl.active);
    }

    const navigate = useNavigate()
    const handleClick = () => {
        clearAuthUserStore()
        clearCategoriesStore()
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
                    <div style={{fontSize: 30}}>
                        {editable === 1?(
                            <form className="text" id="form" onSubmit={() => removeFunc()}>
                                <div className="">
                                    <input className={cl.textinput} type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </form>
                        )
                        :
                            (<div className="name" onDoubleClick={() => { setName(Name); setEditable(1) }}>{Name}</div>)}
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
