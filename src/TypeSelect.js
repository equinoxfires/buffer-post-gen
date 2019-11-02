import React from 'react';
function TypeSelect(props) {

  console.log(props);
  return <div id="role-select">
    <div className="radio">
      <input type="radio" value="protip" checked={props.type === 'protip'}
        onChange={(e) => {
          props.selectType('protip')
        }}
      />
      <label>
        Protip
      </label>
    </div>
    <div className="radio">
      <input type="radio" value="exercise" checked={props.type === 'exercise'}
        onChange={(e) => {
          props.selectType('exercise')
        }}
      />
      <label>
        Exercise
      </label>
    </div>
    <div className="radio">
      <input type="radio" value="cr" checked={props.type === 'cr'}
        onChange={(e) => {
          props.selectType('cr')
        }}
      />
      <label>
        Currently Reading
      </label>
    </div>
    <div className="radio">
      <input type="radio" value="quote" checked={props.type === 'quote'}
        onChange={(e) => {
          props.selectType('quote')
        }}
      />
      <label>
        Currently Reading
      </label>
    </div>

  </div>;
}
export default TypeSelect;