import { PATH_PAGE } from '../../../../routes';
import Iconify from '../../../../components/Iconify';

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    path: PATH_PAGE.whyEsgBay.main,
    icon: <Iconify icon={'bi:question-lg'} {...ICON_SIZE} />,
  },
  {
    title: 'About me',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: PATH_PAGE.ourSolution.main,
  },
  {
    title: 'Services',
    icon: <Iconify icon={'carbon:software-resource-cluster'} {...ICON_SIZE} />,
    path: PATH_PAGE.resources.main
  },
  {
    title: 'Contact me',
    icon: <Iconify icon={'codicon:debug-start'} {...ICON_SIZE} />,
    path: PATH_PAGE.register.main,
  },
];

export default menuConfig;
