import NextLink from 'next/link'
import { m } from "framer-motion";
import { Box, Button, Container, Grid, Stack, StackProps, styled, Tooltip, Typography } from "@mui/material";
import { Iconify, MotionContainer, varFade } from "../../components";

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props: StackProps) => <Stack spacing={2} {...props} />)(
  ({ theme }) => ({
    position:'relative',
    zIndex:10,
    maxWidth:'1220px',
    margin:'auto',
    padding:theme.spacing(15, 5),
  })
);

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  display:'none',
  maxWidth:'314px',
  maxHeight:'190px',
  [theme.breakpoints.up('md')]: {
    display:'block',
    top: 0,
    zIndex: 8,
    margin: 'auto',
    position: 'absolute',
    bottom:100,
    left:'auto',
    right: '10%',
    width: 'auto',
  },
  [theme.breakpoints.up('xl')]:{
    right:'25%'
  }
}));
const ICON_NAMES = [{name:"React" ,icon:'akar-icons:react-fill'}, {name:"MongoDB" ,icon:'bxl:mongodb'}, {name:"NodeJS" ,icon:'akar-icons:node-fill'}, {name:"Docker" ,icon:'bxl:docker'}, {name:"Redux" ,icon:'akar-icons:redux-fill'}, {name:"MUI" ,icon:'simple-icons:mui'}]
const HomeHero = () => {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/assets/overlay.svg" variants={varFade().in} />
        <HeroImgStyle
          alt="hero"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
          variants={varFade().inUp}
        />
        <ContentStyle>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7} sx={{textAlign:{xs:'center', md:'left'}}}>
                <Stack spacing={3}>
                  <m.div variants={varFade().inRight}>
                    <Typography variant="h1" component="h1" sx={{ color: 'common.white' }}>
                      Start your new project
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inRight}>
                    <Typography variant="overline" sx={{ color: 'common.white' }}>
                      Make your product idea real
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inRight}>
                    <NextLink href={'/contact'} passHref>
                      <Button
                        size="large"
                        variant="contained"
                        startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
                      >
                        Contact Me
                      </Button>
                    </NextLink>
                  </m.div>
                </Stack>
              
            </Grid>
            <Grid item xs={12} md={5} sx={{textAlign:'right'}}>
                <Box display="flex" flexDirection={'column'} justifyContent="flex-end" alignItems="flex-end" sx={{height:'100%'}}>
                  <m.div variants={varFade().inLeft}>
                    <Typography variant="overline" sx={{ color: 'secondary.light' }}>
                      Main Technologies
                    </Typography>
                  </m.div>

                  <Stack
                    direction="row"
                    spacing={1.5}
                    justifyContent={{ xs: 'center', md: 'flex-end' }}
                  >
                    {ICON_NAMES.map((resource) => (
                      <m.div
                        key={resource.name}
                        variants={varFade().inLeft}
                      >
                        <Tooltip title={resource.name}>
                          <Box>
                            <Iconify icon={resource.icon} color="secondary.main" width="40px" height="40px"/>
                          </Box>
                        </Tooltip>
                      </m.div>
                    ))}
                  </Stack>
                </Box>
            </Grid>
          </Grid>
        </ContentStyle>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  )
}

export default HomeHero
