import *as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MediaCard({ Calciatori }) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 300 }}
                image={"http://127.0.0.1:3098/" + Calciatori.cover}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Calciatori.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Overall: {Calciatori.overall}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Squadra: {Calciatori.squadra}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Posizione: {Calciatori.posizione}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Nazionalità: {Calciatori.nazionalita}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Età: {Calciatori.eta}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Calciatori.informazioni}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">This man</Button>
                <Button size="small">Crazy dude</Button>
            </CardActions>
        </Card>
    )
}