import React from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function selectOde() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-ode"
      options={odes}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Ode" />}
    />
  );
}

const odes = [
  { label: 'Boca Junniors', year: 1994 },
  { label: 'Atles', year: 1972 },

];
