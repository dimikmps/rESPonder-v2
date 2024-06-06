import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// TODO: Export this globally
const drawerWidth = 270;

const mainMenuItems: string[] = [
  'Map View',
  'Latest Sensor Readings',
  'Proximity approximation',
];

const secondaryMenuItems: string[] = ['Support', 'About'];

interface SidebarComponentProps {
  open: boolean;
  onToggle: () => void;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const LinkWithText = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',
}));

/**
 * Sidebar component
 * @param {boolean} open  - A flag representing whether or not the sidebar is open.
 * @param {() => void)} onToggle  - A callback triggered when the sidebar is opened/closed.
 * @returns {JSX.Element} - The SideBarComponent JSX element.
 */
export default function SidebarComponent({
  open,
  onToggle,
}: SidebarComponentProps): JSX.Element {
  const theme = useTheme();

  return (
    <Drawer variant='permanent' open={open}>
      <DrawerHeader>
        <IconButton onClick={onToggle}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {mainMenuItems.map((text, index) => (
          // TODO: Make a reusable component here
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            {index === 0 ? (
              <LinkWithText to='/map'>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <MapIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </LinkWithText>
            ) : index === 1 ? (
              <LinkWithText to='/status'>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <DeviceHubIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </LinkWithText>
            ) : (
              <LinkWithText to='/proximity'>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <ConnectWithoutContactIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </LinkWithText>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryMenuItems.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            {index === 0 ? (
              <LinkWithText to='/contact'>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <SupportAgentIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </LinkWithText>
            ) : (
              <LinkWithText to='/about'>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </LinkWithText>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
