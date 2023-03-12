import { useContext } from "react";
import { ContextCreate } from "../../context/ContextCreate";

export default ({ dropdown, i }) => {

    const { toggleDropdown, setPersonForm } = useContext(ContextCreate);

    return (
        <>
            <div className="popup-frame mt10">
                <p className="text-light">Имя</p>
                <input className="form-input mt10" type="text" placeholder="Боб" onChange={ (e) => setPersonForm(i, "username", e.target.value) } />

                <div className="mt10 t-center">
                    <i className={`btn-arrow fa-solid fa-angle-down ${ dropdown ? "open-dropdown" : "" }`} onClick={ () => toggleDropdown(i) }></i>
                </div>
            </div>
            { dropdown ? 
            <div className="popup-dropdown pb25">
                <p className="text-grey t-center">Дополнительная информация</p>
                <p className="text-light">Языки</p>
                <input className="form-input mt10" type="text" placeholder="Например, эльфийский" onChange={ (e) => setPersonForm(i, "lang", e.target.value) } />

                <div className="mt30">
                    <div className="frame-area t-center text-grey">
                        <input className="noframe-input" type="number" placeholder="10" onChange={ (e) => setPersonForm(i, "skill1", e.target.value) } />
                        <p className="text-sm ">Проницательность</p>
                    </div>
                    <div className="frame-area t-center text-grey mt10">
                        <input className="noframe-input" type="number" placeholder="10" onChange={ (e) => setPersonForm(i, "skill2", e.target.value) } />
                        <p className="text-sm ">Внимание</p>
                    </div>
                    <div className="frame-area t-center text-grey mt10">
                        <input className="noframe-input" type="number" placeholder="10" onChange={ (e) => setPersonForm(i, "skill3", e.target.value) } />
                        <p className="text-sm ">Расследование</p>
                    </div>
                </div>
            </div>
            : null }
        </>
    )
}