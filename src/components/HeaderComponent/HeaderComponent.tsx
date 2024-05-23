import { Box, Link, styled } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Mock Header Menu list. TODO: Replace with actual menu items
const mockMenuList: string[] = [
    'Menu Item 1',
    'Menu Item 2',
    'Menu Item 3',
    'Menu Item 4',
];

const HeaderMenuLink = styled(Link)({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '18px',

    // TODO: Add cool hover effect
    '&:hover': {
        color: '#ff9900',
        transition: 'all .5s ease',
    },
});

/*
 * Header Component
 **/
const HeaderComponent = () => {
    return (
        <Box display="flex" justifyContent="space-between" width="100%">
            <Box
                display="flex"
                justifyContent="center"
                gap="100px"
                width="100%"
            >
                {mockMenuList.map((menuItem: string) => {
                    return <HeaderMenuLink href="#">{menuItem}</HeaderMenuLink>;
                })}
            </Box>
            <Box display="flex" minWidth="max-content">
                <HeaderMenuLink display="flex" gap="8px" alignItems="center">
                    <AccountCircleIcon />
                    Sign in
                </HeaderMenuLink>
            </Box>
        </Box>
    );
};

export default HeaderComponent;
