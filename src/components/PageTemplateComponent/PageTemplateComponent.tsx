import { Box, Typography } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface PageTemplateComponentProps {
  pageTitle: string;
  children: ReactNode;
}

/**
 * Page Template Component
 * A common template used by all pages displayed/switched via the Router
 * @param {string} pageTitle - The page title that is currently displayed.
 * @returns {JSX.Element} - The PageTemplateComponent JSX element.
 */
const PageTemplateComponent = ({
  pageTitle,
  children,
}: PageTemplateComponentProps): JSX.Element => {
  const [contentHeight, setContentHeight] = useState<string>('100px');

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current && setContentHeight(ref.current.offsetHeight + 'px');
  }, [ref.current]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      textAlign={'center'}
      width='100%'
      height='100%'
    >
      <Typography ref={ref} variant='h4'>
        {pageTitle}
      </Typography>

      <Box display='flex' width='100%' height={`calc(100% - ${contentHeight})`}>
        {children}
      </Box>
    </Box>
  );
};

export default PageTemplateComponent;
