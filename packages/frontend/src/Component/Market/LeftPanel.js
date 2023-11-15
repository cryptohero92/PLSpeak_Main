import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { RadioGroup, Radio, FormControlLabel } from '@mui/material';

import CollapsableItem from './CollapsableItem';

export const LeftPanel = () => {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <CollapsableItem title="Volume">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="any"
          name="radio-buttons-group"
        >
          <FormControlLabel value="any" control={<Radio />} label="Any" />
          <FormControlLabel value="under_10000" control={<Radio />} label="Under $10,000" />
          <FormControlLabel value="10000_50000" control={<Radio />} label="$10,000 - $50,000" />
          <FormControlLabel value="50000_100000" control={<Radio />} label="$50,000 - $100,000" />
          <FormControlLabel value="over_100000" control={<Radio />} label="Over $100,000" />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
        </RadioGroup>
      </CollapsableItem>
      <CollapsableItem title="Liquidity">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="any"
          name="liquidity-radio-buttons-group"
        >
          <FormControlLabel value="any" control={<Radio />} label="Any" />
          <FormControlLabel value="under_5000" control={<Radio />} label="Under $5,000" />
          <FormControlLabel value="5000_10000" control={<Radio />} label="$5,000 - $10,000" />
          <FormControlLabel value="10000_50000" control={<Radio />} label="$10,000 - $50,000" />
          <FormControlLabel value="over_50000" control={<Radio />} label="Over $50,000" />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
        </RadioGroup>
      </CollapsableItem>
      <CollapsableItem title="End Date">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="any"
          name="liquidity-radio-buttons-group"
        >
          <FormControlLabel value="any" control={<Radio />} label="Any" />
          <FormControlLabel value="end_today" control={<Radio />} label="Ends today" />
          <FormControlLabel value="end_this_week" control={<Radio />} label="Ends this week" />
          <FormControlLabel value="end_this_month" control={<Radio />} label="Ends this month" />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
        </RadioGroup>
      </CollapsableItem>
      <CollapsableItem title="Status">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="active"
          name="liquidity-radio-buttons-group"
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel value="resolved" control={<Radio />} label="Resolved" />
        </RadioGroup>
      </CollapsableItem>
      <CollapsableItem title="Categories">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </CollapsableItem>
      
    </List>
  );
}
