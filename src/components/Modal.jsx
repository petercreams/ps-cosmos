import React, {useState, useEffect} from "react";
import closeModal from "../assets/images/closeModal.png";
import arrowUp from "../assets/images/arrow-up.png";
import arrowDown from "../assets/images/arrow-down.png";
import unsorted from "../assets/images/unsorted.png";

import { getStarlink, getRockets, getCrew, getCapsules } from "../api/getData";

const StarlinkData = getStarlink();
// const RocketsData = getRockets();
// const CrewData = getCrew();
const CapsulesData = getCapsules();


console.log(CapsulesData);
console.log(StarlinkData);







function Modal({setModalActive, modalName, modalData}) {
    // const [capsules, setCapsules] = useState([])

    const [modalState, setModalState] = useState(true);

    const [data, setData] = useState(modalData);
    const [columns, setColumns] = useState([]);


    useEffect(() => {
        if (modalName === 'Capsules') {
            setColumns(['type', 'status']);
        } else if (modalName === 'Crew') {
            setColumns(['name', 'status']);
        } else if (modalName === 'Rockets') {
            setColumns(['type', 'name']);
        } else if (modalName === 'Starlink') {
            setColumns(['version', 'launch']);
        }

      }, []);



    return(
<div className={modalState ? "modal-container" : "modalOff"}>

    <div className="modal">

        <div className="exitModal">
            <img src={closeModal} alt="exitModal" onClick={() => setModalActive(false)} />
        </div>

        <div className="headerModal">
            <p>{modalName}</p>
        </div>

        <div className="colHeader">
            <div className="col1-container">
                <p className="col1-header">{columns[0]}</p>
                <img className="arrows" src={unsorted} />

                
            </div>
            <p className="col2-header">{columns[1]}</p>

        </div>

        <div className="col1">
            
            {/* dane */}
        </div>

        <div className="col2">
            
    
        </div>

    </div>

</div>
    );
}

export default Modal;