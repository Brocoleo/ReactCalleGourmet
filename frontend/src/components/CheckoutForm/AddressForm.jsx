import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './CustomTextField';

const AddressForm = ({ checkoutToken, test }) => {
  const methods = useForm();


  return (
    <div className="container">
      <Typography variant="h6" gutterBottom>Datos Cliente</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="Nombre" />
            <FormInput required name="lastName" label="Apellido" />
            <FormInput required name="email" label="RUT" />         
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Volver al carro</Button>
            <Button type="submit" variant="contained" color="primary">Siguiente</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default AddressForm;