import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import logo from '../../images/logoIg_Page.png'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../assets/RegistroIg.css'

import { Collapse } from 'antd';
const { Panel } = Collapse;

function Copyright() {
    return (
        <Typography className="referencia" variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" a href="https://taws.espol.edu.ec/inicio" target="_blank">
                Taws
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        backgroundColor: 'white'
    },
    image: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(0),
    },
    submit: {
        margin: theme.spacing(2, 0, 0),
    },
}));
export default function SignInSide() {
    const classes = useStyles();

    return (
        
        <Grid container component="main" className={classes.root}>
            <Grid item md={4} component={Paper} elevation={10} square>
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} >
                                        <TextField
                                            variant="outlined"
                                            autoComplete="user"
                                            name="user"
                                            required
                                            fullWidth
                                            id="user"
                                            label="Nombre de Usuario"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="password"
                                            label="Contraseña"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="url"
                                            label="Enlace de Búsqueda"
                                            name="url"
                                            autoComplete="link"
                                        />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="posts"
                                            label="Cantidad de Publicaciones (Max. 100,000)"
                                            id="posts"
                                            autoComplete="number-password"
                                        />
                                    </Grid>

                                    <Box className="avanzadasIg" ml={0.5} mt={1} >
                                        <Collapse accordion className="avz" >
                                            <Panel header="Opciones Avanzadas">
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            name="keyword"
                                                            label="Palabras Claves"
                                                            id="keyword"
                                                            autoComplete="current-keyword"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            name="hashtag"
                                                            label="# Hashtag"
                                                            type="hashtag"
                                                            id="hashtag"
                                                            autoComplete="current-hashtag"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            name="keyword"
                                                            label="@ Menciones"
                                                            id="keyword"
                                                            autoComplete="current-keyword"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            name="characters"
                                                            label="Min. caracteres"
                                                            type="characters"
                                                            id="characters"
                                                            autoComplete="current-characters"
                                                        />
                                                    </Grid>
                                                </Grid>

                                            </Panel>
                                        </Collapse>
                                    
                                </Box>
                            </Grid>
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                ¡ANALIZAR!
                        </Button>
                    </form>
                </div>
            </Grid>
            <Box className="logo" ml={33} mt={9} >
                <img src={logo} alt="Logo" width="400px" height="400px" />
            </Box>
            <Box mt={68} ml={1} mb={1.8}>
                    <Copyright />
                </Box>
        </Grid>
    );
}

