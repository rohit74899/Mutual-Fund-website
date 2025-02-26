import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

const Fund = ({data}) => {
    console.log(data);


    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleClickNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map(item => (
      <React.Fragment key={item.id}>
        <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px' }}>
          <img src={item.logo} alt="" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <Stack spacing={1} direction="column" style={{ marginLeft: 70 }}>
            <Typography variant="h6" display="block" gutterBottom>
              {item.parName}
            </Typography>
            <Stack spacing={1} direction="row">
              <Typography variant="overline" display="block" gutterBottom>
                <Chip label={item.pCat} variant="outlined" />
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                <Chip label={item.catDispName} variant="outlined" />
              </Typography>
            </Stack>
            {/* Rest of your content */}
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
                    
                    (#{item.performanceRanking.rank}) of {item.performanceRanking.rankOutOf} in Multi Assets
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Expense Ratio {item.expRatStr}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Age {item.schemeAge}
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
      </React.Fragment>
    ));
  };

  return (
    <div>
       <Stack spacing={2}>
        {renderData()}
      </Stack>
      {/* <Button variant="contained" onClick={handleClickNext}>Next</Button> */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Stack spacing={2} direction='row' style={{marginLeft: 280}}>
            <Button variant="contained" disabled={currentPage === 1} onClick={handlePrevPage}>Previous</Button>
            <Button variant="contained" onClick={handleNextPage}>Next</Button>
        </Stack>
        
      </div>
    
    </div>
  )
}

export default Fund
