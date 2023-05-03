import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
  import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faYoutube } from '@fortawesome/free-solid-svg-icons'

import Carousel from '/components/Carousel'


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
                <Container maxWidth="lg" sx={{ marginTop: '18px', marginBottom: '35px' }}>
                    <Grid container spacing={4}>
                        { /* Chi siamo */}
                        <Grid item xs={12} lg={4}>
                            <Typography class="text-center" component="h1" color="White" paddingBottom="2rem">
                                {props.title1}
                            </Typography>
                            <Typography component="h5" color="darkgrey" paragraph>
                                {props.description1}
                            </Typography>
                        </Grid>

                        { /* Social Feed */}
                        <Grid item xs={12} lg={4}>
                            <Typography class="text-center" component="h1" color="White" paddingBottom="2rem">
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

                                                variant="body3"
                                                href={social.url}
                                                sx={{ p: 1, flexShrink: 0, }}
                                            >
                                                <FontAwesomeIcon icon={faYoutube}/>
                                                {social.title}
                                            </Link>
                                        </Container>
                                    ))
                                }
                            </Typography>
                        </Grid>

                        { /* Immagini */}
                        <Grid item xs={12} lg={4}>
                            <Typography class="text-center" component="h1" color="White" paddingBottom="2rem">
                                {props.title3}
                            </Typography>
                            <Grid container spacing={2} minHeight={180}>
                                {
                                    props.images.map((image) => (
                                        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                                            <Link
                                                color="inherit"
                                                noWrap
                                                variant="body2"
                                                sx={{ p: 0, flexShrink: 3, }}
                                            >
                                            <a href="https://goo.gl/maps/gB9S6Xqk8FKL4YSD6">
                                            <img
                                                width="100%" 
                                                src="https://www.salesianinordest.it/uploads/a8d8c60746f16cd06234161cdfe37a43-San%20Dona%20di%20Piave.jpg"
                                                class="imglink"
                                                alt=""
                                            />
                                            </a>
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
                            <Typography component="h1" color="White" sx={{ marginLeft: '440px', marginBottom: '35px' }}>
                                {props.copyright}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    )
    ReactDOM.render(element, document.body)
}