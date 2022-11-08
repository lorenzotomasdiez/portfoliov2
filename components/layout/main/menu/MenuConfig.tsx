import { PATH_PAGE } from '../../../../routes';
import Iconify from '../../../../components/Iconify';

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    path: PATH_PAGE.main,
    icon: <Iconify icon={'bi:question-lg'} {...ICON_SIZE} />,
  },
  {
    title: 'About me',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: PATH_PAGE.about,
  },
  {
    title: 'Services',
    icon: <Iconify icon={'carbon:software-resource-cluster'} {...ICON_SIZE} />,
    path: PATH_PAGE.services
  },
  {
    title: 'Contact me',
    icon: <Iconify icon={'codicon:debug-start'} {...ICON_SIZE} />,
    path: PATH_PAGE.contact,
  },
];

export default menuConfig;
