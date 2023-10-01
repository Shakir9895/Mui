import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = [
  { label: 'ASSETS', type: 'heading' },
  { label: 'Receivables', type: 'subheading' },
  { label: 'Bank and cash', type: 'subheading' },
  { label: 'Subheading007', type: 'subheading' },
  { label: 'Subheading10', type: 'subheading' },
  { label: 'Heading B', type: 'heading' },
  { label: 'Subheading4', type: 'subheading' },
  { label: 'Subheading5', type: 'subheading' },
  { label: 'Subheading6', type: 'subheading' },
  { label: 'Heading C', type: 'heading' },
  { label: 'Subheading7', type: 'subheading' },
  { label: 'Subheading8', type: 'subheading' },
  { label: 'Subheading9', type: 'subheading' },
];

const renderOption = (props, option) => (
  <li {...props}>
    {option.type === 'subheading' ? (
      <span>{option.label}</span>
    ) : (
      <strong style={{ backgroundColor: 'non', padding: '5px',width:'100%',color:'BLue' }}>{option.label}</strong>
    )}
  </li>
);

export default function HeadingSubheadingAutocomplete() {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderOption={renderOption}
      renderInput={(params) => (
        <TextField {...params} label="Heading & Subheading Autocomplete" variant="outlined" />
      )}
      getOptionDisabled={(option) => option.type === 'heading'}
    />
  );
}