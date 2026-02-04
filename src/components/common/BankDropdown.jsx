import React, { useState } from 'react'

const BankDropdown = ({
  options,
  placeHolder,
  value,
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  }
  return (
    <div className="custom-select dropdown">
      <button className={`custom-select__button ${open ? 'show' : ''}`}
        aria-expanded="false" onClick={() => setOpen(!open)}>
        <span className="text-placeholder">{value ? value.label : placeHolder}</span>
        <i className="bi bi-chevron-down custom-select__chev"></i>
      </button>
      {open && (
        <ul className={`custom-select__menu ${open ? 'show' : ''}`}>
          {options.map((option, i) => (
            <li key={i}>
              <button type="button" className="dropdown-item" onClick={() => handleSelect(option)}> 
                <img src="./img/HDFC.svg" className="me-2" alt="" /> {option.label}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BankDropdown