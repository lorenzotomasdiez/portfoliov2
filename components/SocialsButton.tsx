import { alpha } from '@mui/material/styles';
import { Link, Stack, Button, Tooltip, IconButton, ButtonProps, IconButtonProps, } from '@mui/material';
import Iconify from './Iconify';

export type SocialLinks = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
};

type IProps = IconButtonProps & ButtonProps;

interface Props extends IProps {
  simple?: boolean;
  initialColor?: boolean;
  links?: SocialLinks;
}

export default function SocialsButton({
  initialColor = false,
  simple = true,
  links = {
    twitter:'https://twitter.com/esgbaycom',
    linkedin:'https://www.linkedin.com/company/esg-bay/',
    facebook:'https://www.facebook.com/ESG-Bay-103481072493772/?__cft__[0]=AZXI-iXv9OjCFWRnUaVU1Zytx2NCvaiPnnLILu_gmOwO048uGUGLnm0WZEu6X2BqHbP1wjPnVR_lk2V25A7MgE3cGKl0BE4tJuMSX6gPXkS9kfomCR0FzpFLYDclMNLl7pkSCwX8rntk7C0hQqFfXw44frJaFeER9oh8uRJEvDrwIQ&__tn__=%2CmH-R',
    instagram:'https://instagram.com/esgbay'
  },
  sx,
  ...other
}: Props) {
  const SOCIALS = [
    {
      name: 'FaceBook',
      icon: 'eva:facebook-fill',
      socialColor: '#1877F2',
      path: links.facebook || '#facebook-link',
    },
    {
      name: 'Instagram',
      icon: 'ant-design:instagram-filled',
      socialColor: '#E02D69',
      path: links.instagram || '#instagram-link',
    },
    {
      name: 'Linkedin',
      icon: 'eva:linkedin-fill',
      socialColor: '#007EBB',
      path: links.linkedin || '#linkedin-link',
    },
    {
      name: 'Twitter',
      icon: 'eva:twitter-fill',
      socialColor: '#00AAEC',
      path: links.twitter || '#twitter-link',
    },
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path}>
            <Tooltip title={name} placement="top">
              <IconButton
                color="inherit"
                sx={{
                  ...(initialColor && {
                    color: socialColor,
                    '&:hover': {
                      bgcolor: alpha(socialColor, 0.08),
                    },
                  }),
                  ...sx,
                }}
                {...other}
              >
                <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
