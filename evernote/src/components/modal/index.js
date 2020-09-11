import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addScore } from "../../redux/actions";

function Modal(props) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    answer: "",
  });

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  const { answer } = inputs;

  function handleSubmit(event) {
    event.preventDefault();
    if (props.dataFromParent.correct === answer) {
      dispatch(addScore(props.dataFromParent.price));
      props.setModal(false);
    } else {
      dispatch(addScore(props.dataFromParent.price * -1));
      props.setModal(false);
    }
  }

  return (
    <div className="border flex align">
      {/* <div className="flex align">
        <button
          className="buttonModal align"
          onClick={() => {
            props.onClick();
          }}
        ></button>
      </div> */}
      <div className="flex align">
        <h3 className="align">{props.dataFromParent.question}</h3>
        <div className="flex align">
          {props.dataFromParent.variants.map((element, index) => {
            return (
              <h5 className="align">
                {index}. {element}
              </h5>
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter the ответ
            <input
              type="text"
              name="answer"
              onChange={handleChange}
              value={answer}
            ></input>
            <input type="submit" name="answer"></input>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Modal;
