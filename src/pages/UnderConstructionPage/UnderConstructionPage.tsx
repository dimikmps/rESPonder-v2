import { Typography } from '@mui/material';
import PageTemplateComponent from '../../components/PageTemplateComponent/PageTemplateComponent';

interface UnderConstructionComponentProps {
  page: string;
}

/**
 * Under-construction component
 * Returns an under-construction page for the duration of developing the different views
 * @param {string} page - The page which the under-construction status refers to.
 * @returns {JSX.Element} - The UnderConstructionComponent JSX element.
 */
const UnderConstructionPage = ({
  page,
}: UnderConstructionComponentProps): JSX.Element => {
  return (
    <PageTemplateComponent pageTitle={page}>
      <Typography
        display='flex'
        flexDirection='column'
        justifyContent='space-around'
        width='100%'
        textAlign='center'
        variant='h6'
      >
        Under construction
      </Typography>
    </PageTemplateComponent>
  );
};

export default UnderConstructionPage;
