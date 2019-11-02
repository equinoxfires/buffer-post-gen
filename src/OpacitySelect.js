import React from 'react';
function OpacitySelect(props) {

  console.log(props);

  const opacities = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const radios = opacities.map((number) => {
    return <div className="radio">
      <input type="radio" value="protip" checked={props.opacity === number}
        onChange={(e) => {
          props.setOpacity(number)
        }}
      />
      <label>
        {number}
      </label>
    </div>
  })
  return <div id="opacity-select">
    {radios}
  </div>;
}
export default OpacitySelect;