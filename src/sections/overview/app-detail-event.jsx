import React from 'react';

import { Card, Grid, Button, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

export default function AppDetailsEvent() {
  return (
    <Card
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        width: '100%',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={3} md={3} sx={{ mt: { xs: 2 } }}>
          <Typography variant="inherit">
            <strong>Atlas vs Santos 2024:</strong>
          </Typography>
          <Typography variant="inherit">
            <strong>Equipo:</strong> Atlas masculino
          </Typography>
          <Typography variant="inherit">
            <strong>Rival:</strong> Santos
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3} sx={{ mt: { xs: 2 } }}>
          <Typography variant="inherit"><strong>Liga</strong>: Liga Mx</Typography>
          <Typography variant="inherit"><strong>Temporada</strong>: Temporada 2024</Typography>
          <Typography variant="inherit"><strong>Partido</strong>: 5/8</Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3} sx={{ mt: { xs: 2 } }}>
          <Typography variant="inherit"><strong>Fecha</strong>: 10/06/2021</Typography>
          <Typography variant="inherit"><strong>Hora</strong>: 19:05 (-6)</Typography>
          <Typography variant="inherit"><strong>Estadio</strong>: Jalisco</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', sm: 'center' },
            alignItems: 'center',
            mt: { xs: 2, sm: 2 },
          }}
        >
          <Button variant="contained" color="success">
            Jugado
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          md={1}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', sm: 'flex-end' },
            alignItems: 'center',
            mt: { xs: 2, sm: 2 },
          }}
        >
          <Button
            variant="contained"
            color="success"
            startIcon={<Iconify icon="material-symbols:download" />}
            sx={{
              width: 40,
              height: 40,
              minWidth: 0,
              borderRadius: '50%',
              pl: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
