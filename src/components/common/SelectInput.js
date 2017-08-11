import React,{PropTypes} from 'react';

const SelectInput = ({name,label,onChange,defaultOption,placeholder,value,error,options}) => {
  console.log(options);
  return(
    <div className = "form-group">
    <label htmlFor = {name}>{label}</label>
    <div className = "field">
    {<select
        name = {name}
        value = {value}
        onChange = {onChange}
        className = "form-control">
        <option value = "">{defaultOption}</option>
        {options.map((option)=>{
          return <option key = {option.value} value = {option.value}> {option.text}</option>;
        })
        }
      </select>}
  {error && <div className = "alert alert-danger">{error}</div>}

    </div>
    </div>

  );
};

SelectInput.propTypes = {
  name :PropTypes.string.isRequired,
  label :PropTypes.string.isRequired,
  onChange :PropTypes.func.isRequired,
  placeholder:PropTypes.string,
  value:PropTypes.string,
  error:PropTypes.object,
  options:PropTypes.arrayOf(PropTypes.object)
}

export default SelectInput;
