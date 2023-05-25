import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import CalciatoriCard from '/dev/albaniandevils/Calciatori/CalciatoriCard'

export default function Calciatori({data}) {
    return (
        <Container maxWidth="lg">
        <Grid container spacing={4}>
            {
                data.map((Calciatori) => (
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                        <CalciatoriCard Calciatori={Calciatori} />
                    </Grid>
                ))
            }
        </Grid>
        </Container>
    )
}
