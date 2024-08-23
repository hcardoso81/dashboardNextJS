import React from 'react';

import { Card, Grid, Typography } from '@mui/material';

export default function AppDetailsSales() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3} md={3}>
        <Card
          sx={{
            px: 3,
            py: 5,
            borderRadius: 2,
            width: '100%',
            height: 220,
          }}
        >
          <Typography variant="h5">Tickets Vendidos</Typography>
          <Typography mt={2} variant="inherit">
            <strong>Boletos</strong>: 2,000
          </Typography>
          <Typography variant="inherit"><strong>Abonos</strong>: 1,000</Typography>
          <Typography mt={2} variant="subtitle1">
            <strong>TOTAL</strong>: 3,000/ 4,000
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <Card
          sx={{
            px: 3,
            py: 5,
            borderRadius: 2,
            width: '100%',
            height: 220,
          }}
        >
          <Typography variant="h5">Recaudación</Typography>
          <Typography variant="h3">$45,320</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            px: 3,
            py: 5,
            borderRadius: 2,
            width: '100%',
            height: 220,
          }}
        >
          <Grid container >
            <Grid xs={12} sm={6} md={6}>
              <Typography variant="h5">Ocupación</Typography>
              <Typography mt={2} variant="inherit">
                <strong>Boletos</strong>: 1,900
              </Typography>
              <Typography variant="inherit"><strong>Abonos</strong>: 957</Typography>
              <Typography mt={2} variant="subtitle1">
                <strong>TOTAL</strong>: 2,857/ 4,000
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h2">63%</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
