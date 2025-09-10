import React from 'react';
import { Box, Typography } from '@mui/material';

function Discription () {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography sx={{ fontSize: '5rem'}}>Premuim Jagran</Typography>
            <Typography sx={{ fontSize: '4rem'}}>Party Services</Typography>
            <Typography>
                Discover the best Jagran Party in Delhi, Noida, Ghaziabad, and across the NCR region.
            </Typography>
        </Box>
    )
}

export default Discription;