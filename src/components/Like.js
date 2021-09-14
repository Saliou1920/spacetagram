import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default function Like() {

    return (
        <div style={{
          // margin: 'auto',
          display: 'block',
          width: 'fit-content',
          paddingLeft: '30px'
        }}>
          <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder fontSize="large"/>} 
                      checkedIcon={<Favorite fontSize="large"/>}
              name="checkedH" />}
            label=""
          />
        </div>
      );
}
