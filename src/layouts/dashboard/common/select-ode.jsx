import React from 'react';

import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function selectOde() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-ode"
      options={odes}
      sx={{ width: 300 }}
      PaperComponent={(props) => (
        <Paper {...props} sx={{ border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
      )}
      renderInput={(params) => <TextField {...params} label="Ode" />}
    />
  );
}

const odes = [
  { label: 'Boca Junniors', year: 1994 },
  { label: 'Atles', year: 1972 },

];
