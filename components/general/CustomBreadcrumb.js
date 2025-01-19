import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { Typography } from '@mui/material';
import ColorModeContext from '@/theme/CustomThemeProvider';

export default function CustomBreadcrumb({current, nestedPath}) {
  const {isMobile} = React.useContext(ColorModeContext)
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link  
        href="/"
        style={{
            textDecoration: "none"
        }}
        className='link'
        >
        <Typography
            color={'text.primary'}
            variant={isMobile ? 'body2' : 'body1'}

          >
            Home
          </Typography>
        </Link>
       {nestedPath && (
         <Link  
         href="/dashboard"
         style={{
             textDecoration: "none"
         }}
         className='link'
         >
         <Typography
             color={'text.primary'}
             variant={isMobile ? 'body2' : 'body1'}
             textTransform={'lowercase'}
 
           >
             dashboard
           </Typography>
         </Link>
       )}
        <Link
          href="#"
          style={{
            textDecoration: "none",

          }}
        >
          <Typography
            color={'text.secondary'}
            variant={isMobile ? 'body2' : 'body1'}
            textTransform={'lowercase'}


          >
            {current}
          </Typography>
        </Link>
      </Breadcrumbs>
    </div>
  );
}