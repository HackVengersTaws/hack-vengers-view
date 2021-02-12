import React , { Component , useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import logoTw from '../../images/logoTw.png';
import logoIg from '../../images/logoIg.png';
import logoFb from '../../images/logoFb.png';

const images = [
    {
        url: logoTw,
        title: 'Twitter',
        width: '33%',
    },
    {
        url: logoFb,
        title: 'Facebook',
        width: '34%',
    },
    {
        url: logoIg,
        title: 'Instagram',
        width: '33%',
    },
];

const useStyles = makeStyles((theme) => ({
    
    image: {
        position: 'relative',
        height: 450,

        '&:hover, &$focusVisible': {
            '& $imageBackdrop': {
                opacity: 0.15, 
            },
            '& $imageMarked': {
                opacity: 0,
            },
        },
    },
    imageButton: {
        color: theme.palette.common.white,

    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(50)}px ${theme.spacing(16)}px ${theme.spacing(1) + 30}px`,
        fontSize: 34,
        fontFamily: "Times New Roman",
        color: "darkslategray", //"cadetblue" "darkcyan" "darkslategray"
    },

}));

export default function Apps(){
    const classes = useStyles();
    return (
        <div className="Apps">
                {images.map((image) => (
                <Link  key={image.title}  to={`/${image.title}`} >
                    <ButtonBase className={classes.image} style={{width: image.width}} target="_blank" >
                        <span
                            className={classes.imageSrc}
                            style={{backgroundImage: "url(" + image.url + ")"}}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography className={classes.imageTitle}>
                                <strong> <big>{image.title}</big> </strong>
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                    </Link>
            ))}
        </div>
    );
}

