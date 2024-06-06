import { Toolbar, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// TODO: Export this globally
const drawerWidth = 270;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface mainAppBarProps extends AppBarProps {
  appBarHeight?: number;
  onToggle: () => void;
}

const Header = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

/**
 * Header component
 * @param {number} appBarHeight - The desired app bar's height.
 * @param {boolean} open  - A flag representing whether or not the sidebar is open.
 * @param {() => void)} onToggle  - A callback triggered when the sidebar is opened/closed.
 * @returns {JSX.Element} - The HeaderComponent JSX element.
 */
export default function HeaderComponent({
  appBarHeight,
  open,
  onToggle,
}: mainAppBarProps): JSX.Element {
  return (
    <Header position='fixed' open={open} sx={{ height: appBarHeight + 'px' }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onToggle}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Header>
  );
}
