import { useContext } from 'react';
import {
  Box,
  FormControl,
  Grid,
  InputBase,
  InputBaseProps,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { SensorContext } from '../../contexts/SensorContext';

interface MainAppBarProps {
  open: boolean;
  onToggle: () => void;
}

type PropsToOmit = 'onToggle' | 'appBarHeight';

interface HeaderProps
  extends MuiAppBarProps,
    Omit<MainAppBarProps, PropsToOmit> {}

interface StyledDropdownProps extends InputBaseProps {
  isHomepage: boolean;
}

const Header = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<HeaderProps>(({ theme, open }) => ({
  height: theme.custom.appBarHeight,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: theme.custom.sidebarOpenWidth,
    width: `calc(100% - ${theme.custom.sidebarOpenWidth})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomisedInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== 'isHomepage',
})<StyledDropdownProps>(({ theme, isHomepage }) => ({
  '& .MuiInputBase-input': {
    textAlign: 'center',
    borderRadius: 25,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    '&:focus': {
      borderRadius: 25,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  '&:hover': !isHomepage
    ? {
        borderRadius: 25,
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      }
    : {},
}));

/**
 * Header component
 * @param {boolean} open  - A flag representing whether or not the sidebar is open.
 * @param {() => void} onToggle  - A callback triggered when the sidebar is opened/closed.
 * @returns {JSX.Element} - The HeaderComponent JSX element.
 */
const HeaderComponent = ({ open, onToggle }: MainAppBarProps): JSX.Element => {
  const theme = useTheme();

  // Deduce if user is on homepage so that thhe device dropdown and styling is disabled
  const location = String(useLocation().pathname);

  const isHomePage = location === '/';

  const selectedSensorContext = useContext(SensorContext);

  if (!selectedSensorContext) {
    throw new Error('There was something wrong with the Sensor Provider');
  }

  const { selectedSensor, setSelectedSensor } = selectedSensorContext;

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSensor(event.target.value);
  };

  return (
    <Header position='fixed' open={open}>
      <Toolbar sx={{ height: theme.custom.appBarHeight }}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onToggle}
          edge='start'
          sx={{
            ...(open && { display: 'none' }),
            // Fixes the issue with the hamburger button not aligning properly with the rest of the sidebar icons
            // TODO: Find a better solution
            // marginLeft: { xs: '-4px', sm: '-12px' },
            // marginRight: { xs: '-4px', sm: '-12px' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box width='100%' ml={theme.spacing(5)} sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid
              item
              sm={3}
              sx={{
                display: open
                  ? { xs: 'none', md: 'block' }
                  : { xs: 'none', sm: 'block' },
              }}
            />
            <Grid
              item
              sm={6}
              sx={{
                display: open
                  ? { xs: 'none', md: 'block' }
                  : { xs: 'none', sm: 'block' },
              }}
            >
              <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                <Typography
                  variant='h6'
                  noWrap
                  component='div'
                  textAlign='center'
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-around'
                  height='100%'
                >
                  rESPonder v.2
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={open ? 12 : 3} md={3}>
              <FormControl
                size='small'
                sx={{ width: '100%' }}
                disabled={isHomePage}
              >
                <InputLabel
                  id='select-small-label'
                  sx={{
                    color: selectedSensor != '' ? 'transparent' : 'grey',
                    '&.Mui-focused': {
                      color: 'transparent',
                    },
                  }}
                >
                  Sensor
                </InputLabel>
                <Select
                  labelId='select-small-label'
                  id='select-small'
                  value={selectedSensor}
                  label='Sensor'
                  onChange={handleChange}
                  input={<CustomisedInput isHomepage={isHomePage} />}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        '& .MuiMenuItem-root': {
                          display: 'flex',
                          justifyContent: 'center',
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={''}>
                    {' '}
                    <em>{location == '/map' ? 'All Sensors' : 'None'}</em>
                  </MenuItem>
                  <MenuItem value={1}>Sensor 1</MenuItem>
                  <MenuItem value={2}>Sensor 2</MenuItem>
                  <MenuItem value={3}>Sensor 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </Header>
  );
};

export default HeaderComponent;
