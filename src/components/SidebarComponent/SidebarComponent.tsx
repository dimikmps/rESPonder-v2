import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SideBarItem from './SideBarItemComponent';

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
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            {index === 0 ? (
              <SideBarItem
                open={open}
                text={text}
                url={'/map'}
                icon={<MapIcon />}
              />
            ) : index === 1 ? (
              <SideBarItem
                open={open}
                text={text}
                url={'/status'}
                icon={<DeviceHubIcon />}
              />
            ) : (
              <SideBarItem
                open={open}
                text={text}
                url={'/proximity'}
                icon={<ConnectWithoutContactIcon />}
              />
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryMenuItems.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            {index === 0 ? (
              <SideBarItem
                open={open}
                text={text}
                url={'/contact'}
                icon={<SupportAgentIcon />}
              />
            ) : (
              <SideBarItem
                open={open}
                text={text}
                url={'/about'}
                icon={<InfoIcon />}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
