import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Filters = () => {
  
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  
const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.checked,
  });
};
  function createData(id, name) {
    return {
      id,
      name
    };
  }
  
  const Equity = [
    createData(1, 'LARGE CAP'),
    createData(2, 'LARGE & MIDCAP'),
    createData(3, 'MULTI CAP'),
    createData(4, 'MID CAP'),
    createData(5, 'SMALL CAP'),
    createData(6, 'VALUE ORIENTED'),
    createData(7, 'ELSS'),
    createData(8, 'SECTORAL-INFRASTRUCTURE'),
    createData(9, 'SECTORAL-PHARMA'),
    createData(10, 'SECTORAL-TECHNOLOGY'),
    createData(11, 'THEMATIC'),
    createData(12, 'THEMATIC-DIVIDEND YIELD'),
    createData(13, 'THEMATIC-MNC')
  ];
  console.log(Equity);
  return (
    <div>
      <Paper elevation={3}>
      <Stack direction='column'>
      
      <Typography>
        Category
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle2" component="h2">Equity</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
          <Stack>
          
            <Stack direction="column">
            {
            Equity.map(item => (
              
              <FormControlLabel
              control={
                <Checkbox onChange={handleChange} />
              }
              key={item.id}
              label={item.name}
            />
            ))
            }
            </Stack>
          

          </Stack>
          
        </FormGroup>
            
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle2" component="h2">Debt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle2" component="h2">Hybrid</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >Fund Size (AUM)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >Fund Houses (AMCs)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
        
      </Stack>
      </Paper>
      
      
    </div>
  )
}

export default Filters
