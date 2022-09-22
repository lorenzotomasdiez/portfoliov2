import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { List, Drawer, Collapse, ListItemText, ListItemIcon, ListItemButton, ListItemButtonProps} from '@mui/material';
import {FullLogo, Iconify, Scrollbar, IconButtonAnimate, ChangeTheme} from '../../../../components'
import { NAVBAR } from '../../../../config';
import { MenuProps, MenuItemProps } from '../type';

const ListItemStyle = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: 'capitalize',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  color: theme.palette.text.secondary,
}));

export default function MenuMobile({ isOffset, isHome, navConfig }: MenuProps) {
  const { pathname } = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    } 
  }, [pathname]);
  
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <ChangeTheme isOffset={isOffset}/>
      <IconButtonAnimate
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          color: 'common.white',
          ...(isOffset && { color: 'text.primary' }),
        }}
      >
        <Iconify icon={'eva:menu-2-fill'} />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <FullLogo sx={{ mx: 2.5, my: 3 }} />

          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem key={link.title} item={link} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

type MenuMobileItemProps = {
  item: MenuItemProps;
};

function MenuMobileItem({ item }: MenuMobileItemProps) {
  const { pathname } = useRouter();
  const { title, path, icon, children } = item;

  const isActive = pathname === path;

  const [open, setOpen] = useState(false);

  const onOpen= () => {
    setOpen(e => !e);
  };

  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Iconify
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} unmountOnExit>
            <List>
              {children.map(({title, path}) => (
                <NextLink href={path} passHref key={title}>
                  <ListItemStyle>
                    {title}
                  </ListItemStyle>          
                </NextLink>
            ))}
            </List>
        </Collapse>
      </>
    );
  }

  return (
    <NextLink href={path} passHref>
      <ListItemStyle
        sx={{
          ...(isActive && {
            color: 'primary.main',
            fontWeight: 'fontWeightMedium',
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
          }),
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    </NextLink>
  );
}
