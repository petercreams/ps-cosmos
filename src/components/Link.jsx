import React, {useState} from "react";
import ReactDOM from "react-dom"
import Modal from "./Modal";





function Link(props) {
  const [modalActive, setModalActive] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalData, setModalData] = useState([]);


  return (
    <>
    <div className={props.containerClassName} onClick={
      () => {
        setModalActive(true);
        setModalName(props.text);
        setModalData(props.text);
      }
    }>
      <img
        src={props.src}
        className={props.imgClassName}
        alt="link"
        style={props.style}
      />
      <p className={props.textClassName}>{props.text}</p>
    </div>

    {modalActive && <Modal 
    setModalActive={setModalActive} 
    modalName={modalName}
    modalData={modalData}
    />}
    </>

  );
  
}


export default Link;

