import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { Link, Stack, Menu, MenuItem } from '@mui/material';
import {Iconify, ChangeTheme} from '../../../../components';
import { MenuProps, MenuItemProps } from '../type';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
  fontWeight:500
}));

// ----------------------------------------------------------------------

export default function MenuDesktop({ isOffset, isHome, navConfig }: MenuProps) {
  return (
    <>
      <Stack direction="row">
        {navConfig.map((link) => (
          <MenuDesktopItem
          key={link.title}
          item={link}
          isOffset={isOffset}
          isHome={isHome}
          />
          ))}
      </Stack>
      <ChangeTheme isOffset={isOffset}/>
    </>
  );
}

// ----------------------------------------------------------------------

type MenuDesktopItemProps = {
  item     :MenuItemProps;
  isHome   :boolean;
  isOffset :boolean;
};

function MenuDesktopItem({
  item,
  isHome,
  isOffset,
}: MenuDesktopItemProps) {
  const { pathname, asPath } = useRouter();

  const { title, path, children } = item;

  const isActive = (path: string) => pathname === path;

  const [isOpen, setIsOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  useEffect(() => {
    handleClose();
  },[pathname, asPath]);

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={handleClick}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            color: 'common.white',
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
            ...(isActive(path) && {
              color: 'secondary.main',
            }),
          }}
        >
          {title}
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>
        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            marginTop:1, 
          }}
        >
          {
            children.map(({title, path}) => (
              <MenuItem key={title}>
                <NextLink href={path} passHref>
                  {title}
                </NextLink>
              </MenuItem>
            ))
          }
        </Menu>        
      </>
    );
  }
  return (
    <NextLink href={path} passHref>
      <LinkStyle
        sx={{
          color:'common.white',
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
          ...(isActive(path) && {
            color: 'secondary.main',
          }),
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}
