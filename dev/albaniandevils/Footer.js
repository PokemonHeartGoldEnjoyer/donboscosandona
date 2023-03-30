import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

import Carousel from '/components/Carousel'


let slides = [
    {
        titolo: "..",
        descrizione: "",
        colore: "",
        immagine
    }
]
export default function Footer(props) {
    return (
        <Container
            maxWidth={true}
            disableGutters={true}
        >
            <Box
                sx={{
                    position: 'relative',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: props.color,
                }}
            >
                <Container maxWidth="lg" sx={{ marginTop: '10px', marginBottom: '35px' }}>
                    <Grid container spacing={3}>
                        { /* Chi siamo */}
                        <Grid item xs={12} lg={4}>
                            <Typography component="h1" color="White" paddingBottom="2rem">
                                {props.title1}
                            </Typography>
                            <Typography component="h5" color="darkgrey" paragraph>
                                {props.description1}
                            </Typography>
                        </Grid>

                        { /* Social Feed */}
                        <Grid item xs={12} lg={4}>
                            <Typography component="h1" color="White" paddingBottom="2rem">
                                {props.title2}
                            </Typography>
                            <Typography component="h1" color="White" >
                                {
                                    props.socials.map((social) => (
                                        <Container sx={{ padding: "0.5rem" }}>
                                            <Link
                                                color="inherit"
                                                noWrap
                                                key={social.title}

                                                variant="body2"
                                                href={social.url}
                                                sx={{ p: 1, flexShrink: 0, }}
                                            >
                                                <img src={social.imageUrl} width="20" />
                                                {social.title}
                                            </Link>
                                        </Container>
                                    ))
                                }
                            </Typography>
                        </Grid>

                        { /* Immagini */}
                        <Grid item xs={12} lg={4}>
                            <Typography component="h1" color="White" paddingBottom="2rem">
                                {props.title3}
                            </Typography>
                            <Grid container spacing={2} minHeight={160}>
                                {
                                    props.images.map((image) => (
                                        <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                                <Carousel
                                                    slides={slides}
                                                    maxWidth={false}
                                                    height="90vh"
                                                ></Carousel>
                                                <Link
                                                    color="inherit"
                                                    noWrap
                                                    variant="body2"
                                                    sx={{ p: 1, flexShrink: 3, }}
                                                >
                                                    <img src={image.images} width="120" />
                                                </Link>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>

                        { /* Linea */}
                        <Grid item xs={12}>
                            <Typography component="h1">
                                <hr />
                            </Typography>
                        </Grid>

                        { /* Copyright */}
                        <Grid item xs={12} lg={12}>
                            <Typography component="h1" color="White" sx={{ marginLeft: '420px', marginBottom: '35px' }}>
                                {props.copyright}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    )
}