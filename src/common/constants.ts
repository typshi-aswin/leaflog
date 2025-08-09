import { ToastPosition } from 'react-hot-toast';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: state.isDisabled ? '#f8f9fa' : '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '0.9rem',
    minHeight: '42px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: state.isFocused ? '#47c97e' : 'rgba(0, 0, 0, 0.2)',
    },
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    fontFamily: 'Inter, sans-serif',
    backgroundColor: state.isSelected ? '#47c97e' : state.isFocused ? '#f5f5f5' : '#ffffff',
    color: state.isSelected ? '#ffffff' : '#1d1d1d',
    fontSize: '0.9rem',
    padding: '8px 12px',
    '&:active': {
      backgroundColor: '#e9ecef',
    },
  }),

  menu: (provided: any) => ({
    ...provided,
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '4px',
    zIndex: 10001,
  }),

  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
  }),

  multiValueLabel: (provided: any) => ({
    ...provided,
    color: '#1d1d1d',
    fontSize: '0.85rem',
    padding: '2px 6px',
  }),

  multiValueRemove: (provided: any) => ({
    ...provided,
    color: '#6c757d',
    '&:hover': {
      backgroundColor: '#dee2e6',
      color: '#dc3545',
    },
  }),

  placeholder: (provided: any) => ({
    ...provided,
    color: '#a4a4a4',
    fontSize: '0.9rem',
  }),

  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: state.isDisabled ? '#a4a4a4' : '#1d1d1d',
  }),

  indicatorsContainer: (provided: any) => ({
    ...provided,
    padding: '0 8px',
  }),

  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: '#a4a4a4',
    padding: '4px',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#1d1d1d',
    },
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  clearIndicator: (provided: any) => ({
    ...provided,
    color: '#a4a4a4',
    padding: '4px',
    '&:hover': {
      color: '#dc3545',
    },
  }),

  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: '#dee2e6',
    marginTop: '8px',
    marginBottom: '8px',
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    padding: '2px 12px',
  }),

  input: (provided: any) => ({
    ...provided,
    color: '#1d1d1d',
    margin: 0,
    padding: 0,
  }),

  loadingMessage: (provided: any) => ({
    ...provided,
    color: '#a4a4a4',
    fontSize: '0.9rem',
  }),

  noOptionsMessage: (provided: any) => ({
    ...provided,
    color: '#a4a4a4',
    fontSize: '0.9rem',
  }),
};

export const smallCustomStyles = {
  ...customStyles,
  control: (provided: any, state: any) => ({
    ...customStyles.control(provided, state),
    minHeight: '32px',
    fontSize: '0.8rem',
    borderRadius: '6px',
    padding: '0 4px',
  }),
  option: (provided: any, state: any) => ({
    ...customStyles.option(provided, state),
    fontSize: '0.8rem',
    padding: '6px 10px',
  }),
  valueContainer: (provided: any) => ({
    ...customStyles.valueContainer(provided),
    padding: '1px 8px',
  }),
  singleValue: (provided: any, state: any) => ({
    ...customStyles.singleValue(provided, state),
    fontSize: '0.8rem',
  }),
  placeholder: (provided: any) => ({
    ...customStyles.placeholder(provided),
    fontSize: '0.8rem',
  }),
};

export const toasterProps = {
  containerStyle: {
    fontFamily: 'Plus Jarkata Sans, sans-serif',
  },
  toastOptions: {
    style: {
      backgroundColor: '#252525',
      border: '0.5px solid #232A2B',
      color: '#fdfdfd',
    },
  },
  position: 'bottom-center' as ToastPosition,
};