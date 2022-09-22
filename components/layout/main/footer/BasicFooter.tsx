import { Box, Container, Typography } from "@mui/material"
import { Logo } from "../../../../components"

export const BasicFooter = () => {
    return (
      <Box
        sx={{
          py: 5,
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        {<Container>
          <Logo sx={{ mb: 1, mx: 'auto' }} />
          <Typography variant="overline" fontSize={10} component="p">
            All Rights Reserved | Copyright © 2022
            <br /> made by ESG Bay Ltd
          </Typography>
        </Container>}
      </Box>
    )
  }