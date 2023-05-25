import *as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MediaCard({ Treasure }) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 300 }}
                image={"http://localhost:3098/" + Treasure.cover}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Treasure.nome}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    - Latitudine&Longitudine: 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Treasure.coordinate}
                </Typography>
                <CardMedia
                sx={{ height: 300 }}
                image={"http://localhost:3098/" + Treasure.mappa}

                />
                <Typography variant="body2" color="text.primary">
                   - Anno di affondamento :
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Treasure.anno}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Treasure.descrizione}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    -  Valore stimato del tesoro: 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {Treasure.valore}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    - Ritrovato: {Treasure.ritrovato}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">This man</Button>
                <Button size="small">Crazy dude</Button>
            </CardActions>
        </Card>
    )
}