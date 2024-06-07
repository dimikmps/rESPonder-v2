import { Toolbar, Typography, styled, useTheme } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface MainAppBarProps {
  open: boolean;
  onToggle: () => void;
}

type PropsToOmit = 'onToggle' | 'appBarHeight';

interface HeaderProps
  extends MuiAppBarProps,
    Omit<MainAppBarProps, PropsToOmit> {}

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

/**
 * Header component
 * @param {boolean} open  - A flag representing whether or not the sidebar is open.
 * @param {() => void} onToggle  - A callback triggered when the sidebar is opened/closed.
 * @returns {JSX.Element} - The HeaderComponent JSX element.
 */
export default function HeaderComponent({
  open,
  onToggle,
}: MainAppBarProps): JSX.Element {
  const theme = useTheme();

  console.log('edw', theme.spacing(1));
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
            marginLeft: { xs: '-4px', sm: '-12px' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          component='div'
          textAlign='center'
          sx={{ width: '100%' }}
        >
          <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
            rESPonder v.2
          </Link>
        </Typography>
      </Toolbar>
    </Header>
  );
}
