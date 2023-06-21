
// eslint-disable-next-line react/prop-types
const Select = ({ value, onChange }) => {
      return (
            <div>
                  <select value={value} onChange={onChange}>
                        <option> </option>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                  </select>
            </div>
      );
};

export default Select;