import React from "react";

function FilterCheckbox(props) {
  const [isOn, setIsOn] = React.useState(false);

  function handleTumbler() {
    let newIsOn;
    if (!isOn) {
      newIsOn = true;
    } else {
      newIsOn = false;
    }
    setIsOn(newIsOn);
    props.onTumblerToggle(newIsOn);
  }

  return (
    <div className="filter">
      <button
        type="button"
        className={
          isOn ? "filter__tumbler filter__tumbler_active" : "filter__tumbler"
        }
        onClick={handleTumbler}
      />
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
