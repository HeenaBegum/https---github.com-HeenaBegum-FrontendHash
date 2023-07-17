import React from 'react';
import Box from '@mui/material/Box';

const MiddleBox = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bgcolor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Content of the middle box */}
    </Box>
  );
};

export default MiddleBox;
