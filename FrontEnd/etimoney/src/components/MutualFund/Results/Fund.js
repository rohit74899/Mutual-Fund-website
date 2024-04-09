import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Fund = () => {
  return (
    <div>
      <Paper elevation={3}>
        <Stack spacing={1} direction="column" style={{marginLeft:70}}>
            
            <Typography variant="h6" display="block" gutterBottom>
                ICICI Fund
            </Typography>

            <Stack spacing={1} direction="row">
                <Typography variant="overline" display="block" gutterBottom>
                    
                    <Chip label="Hybrid" variant="outlined" />
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    

                    <Chip label="Multi Asset Allocation" variant="outlined" />
                </Typography>
            </Stack>

            <Stack spacing={8} direction='row'>
                <Typography variant="overline" display="block" gutterBottom>
                    AUM 90
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Min. Invest 90
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Current Value    90
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Return(p.a)    90
                </Typography>
                
                <Button variant="outlined" style={{height:30 ,marginRight:30}}>Invest</Button>
                
            </Stack>
            <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                    }}
            />
            <Stack spacing={4} direction='row'>
                <Typography variant="overline" display="block" gutterBottom>
                    (#1) of 6 in Multi Assets
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Expense Ratio 0.76%
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Age 11+ yrs
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    
                </Typography>
                
                <Checkbox style={{marginLeft:80}}/>
                <Typography variant="overline" style={{marginLeft:0}}>
                   Add to Compare
                </Typography>
                
                
                
            </Stack>


            
        </Stack>

      </Paper>
    </div>
  )
}

export default Fund
