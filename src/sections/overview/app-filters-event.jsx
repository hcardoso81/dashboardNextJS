import React from 'react';

import { Grid, TextField, Autocomplete } from '@mui/material';

export default function AppFiltersEvent() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3} md={3}>
        <Autocomplete
          disablePortal
          id="combo-box-team"
          options={teams}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Equipo" fullWidth />}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <Autocomplete
          disablePortal
          id="combo-box-league"
          options={leagues}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Liga" fullWidth />}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <Autocomplete
          disablePortal
          id="combo-box-seasson"
          options={seasons}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Temporada" fullWidth />}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <Autocomplete
          disablePortal
          id="combo-box-event"
          options={events}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Evento" fullWidth />}
        />
      </Grid>
    </Grid>
  );
}

const teams = [
  { id: 1, label: 'Equipo 1' },
  { id: 2, label: 'Equipo 2' },
];

const leagues = [
  { id: 1, label: 'Liga 1' },
  { id: 2, label: 'Liga 2' },
];

const seasons = [
  { id: 1, label: 'Seasson 1' },
  { id: 2, label: 'Seasson 2' },
];

const events = [
  { id: 1, label: 'Evento 1' },
  { id: 2, label: 'Evento 2' },
];
