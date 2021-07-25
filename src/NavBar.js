import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';

export default function AccessibleTabs1() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Link to='/'><Tab  label="Home" /></Link>
        <Link to='/Lessons'><Tab  label="Lessons" /></Link>
        <Link to='/CoreValues'><Tab label="Core value & Beliefs"/></Link>
      </Tabs>
    </Box>
  );
}
