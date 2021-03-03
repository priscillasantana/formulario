import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/priscillasantana" target='blank'>
        Priscilla Santana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Forms() {

  const classes = useStyles();

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data: any) => {
      console.log(data);
  };

  const Casado = watch("Casado")

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro pra trabalhar na Bees!
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nome"
                variant="outlined"
                required
                fullWidth
                id="nome"
                label="Nome"
                autoFocus
                inputRef={register({ required: true})}
              />
              {errors.nome && (alert('É necessário preencher o nome!'))}
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="idade"
                label="Idade"
                type="number"
                id="idade"
                inputRef={register({ required: true, min:18 })}
              />
              {errors.idade && (alert('É necessário ser maior de idade!'))}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                type='email'
                autoComplete="email"
                inputRef={register({ required: true })}
              />
              {errors.nome && (alert('É necessário preencher o e-mail!'))}
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="cidade"
                label="Cidade"
                name="cidade"
                inputRef={register({ required: true })}
              />
              {errors.nome && (alert('É necessário preencher a cidade!'))}
            </Grid>
            <Grid item xs={12}>
            <FormControl component="fieldset">
                    <FormLabel component="legend">Estado Civil</FormLabel>
                    <RadioGroup aria-label="estadoCivil" name="estadoCivil">
                        
                        <FormControlLabel value="Casado" name="Casado" control={<Radio />} label="Casado" inputRef={register}  />
                            {Casado && (
                                <TextField id="outlined-basic" label="Nome do Conjuge" variant="outlined" name='mozao' inputRef={register({ required: true })}/>
                            )}
                        <FormControlLabel value="Solteiro" name="Solteiro" control={<Radio />} label="Solteiro" inputRef={register} />
                        <FormControlLabel value="Divorciado" name="Divorciado" control={<Radio />} label="Divorciado" inputRef={register} />
                        <FormControlLabel value="Viúvo" name ="Viúvo" control={<Radio />} label="Viúvo" inputRef={register} />

                    </RadioGroup>
                </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}