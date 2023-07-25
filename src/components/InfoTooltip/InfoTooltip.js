import React from "react";

function InfoTooltip(props) {
  return (

    <div className={props.isVisible ? "info-tooltip" : "info-tooltip info-tooltip_hidden"}>

        <div className="info-tooltip__overlay"></div>

        <div className="info-tooltip__popup">
        <button
            type="button"
            className="info-tooltip__close-button"
            onClick={props.onClose}
        ></button>
            <p className="info-tooltip__text">
                Данные успешно изменены!
            </p>
        </div>
  </div>);
}

export default InfoTooltip;
