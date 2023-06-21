/* eslint-disable react/prop-types */
const Input = ({value, onChange}) => {
      return (
        <div>
          
          <input type="number" value={value} onChange={onChange} />
        </div>
      );
    };
    
    export default Input;