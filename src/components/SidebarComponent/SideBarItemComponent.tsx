import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface SidebarItemProps {
  open: boolean;
  icon: React.JSX.Element;
  text: string;
  url: string;
}

const LinkWithText = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',
}));

/**
 * Sidebar item component
 * Returns a single sidebar menu item
 * @param {boolean} open  - A flag representing whether or not the sidebar is open.
 * @param { React.JSX.Element } icon  - The icon to be displayed for each memu item.
 * @param { string } text  - The text to be shown next to each menu item when the menu is expanded.
 * @param { string } url  - The url each menu item points to.
 * @returns {JSX.Element} - The SideBarItemComponent JSX element.
 */
const SideBarItemComponent = ({
  open,
  icon,
  text,
  url,
}: SidebarItemProps): JSX.Element => {
  return (
    <LinkWithText to={url}>
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
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </LinkWithText>
  );
};

export default SideBarItemComponent;
