import { Toolbar, Typography, styled, useTheme } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface MainAppBarProps {
  open: boolean;
  appBarHeight: number;
  sidebarOpenWidth: number;
  onToggle: () => void;
}

type PropsToOmit = 'onToggle' | 'appBarHeight';

interface HeaderProps
  extends MuiAppBarProps,
    Omit<MainAppBarProps, PropsToOmit> {}

const Header = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'sidebarOpenWidth',
})<HeaderProps>(({ theme, open, sidebarOpenWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    sidebarOpenWidth && {
      marginLeft: sidebarOpenWidth,
      width: `calc(100% - ${sidebarOpenWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

/**
 * Header component
 * @param {boolean} open  - A flag representing whether or not the sidebar is open.
 * @param {number} appBarHeight - The desired app bar's height.
 * @param {number} sidebarOpenWidth - The sidebar's given width when expanded.
 * @param {() => void} onToggle  - A callback triggered when the sidebar is opened/closed.
 * @returns {JSX.Element} - The HeaderComponent JSX element.
 */
export default function HeaderComponent({
  open,
  appBarHeight,
  sidebarOpenWidth,
  onToggle,
}: MainAppBarProps): JSX.Element {
  const theme = useTheme();

  return (
    <Header
      position='fixed'
      open={open}
      sidebarOpenWidth={sidebarOpenWidth}
      sx={{ height: appBarHeight + 'px' }}
    >
      <Toolbar sx={{ height: appBarHeight + 'px' }}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onToggle}
          edge='start'
          sx={{
            // Fixes the issue with the hamburger button not aligning properly with the rest of the sidebar icons
            paddingLeft: { xs: theme.spacing(1), m: 'inherit' },
            paddingRight: { xs: theme.spacing(1), m: 'inherit' },
            marginRight: 5,
            ...(open && { display: 'none' }),
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
