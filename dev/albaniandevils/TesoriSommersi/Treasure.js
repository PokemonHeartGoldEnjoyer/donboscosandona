import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import TreasureCard from '/dev/albaniandevils/TesoriSommersi/TreasureCard'

export default function Treasure({data}) {
    return (
        <Container maxWidth="lg">
        <Grid container spacing={4}>
            {
                data.map((Treasure) => (
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <TreasureCard Treasure={Treasure} />
                    </Grid>
                ))
            }
        </Grid>
        </Container>
    )
}