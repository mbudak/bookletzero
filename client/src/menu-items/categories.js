// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const categories_menu = {
  id: 'categories-menu',
  title: <FormattedMessage id="categories" />,
  type: 'group',
  children: [
    {
      id: 'default',
      title: <FormattedMessage id="tests" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'exams',
      title: <FormattedMessage id="users" />,
      type: 'item',
      url: '/dashboard/analytics',
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: false
    },
    {
      id: 'exams',
      title: <FormattedMessage id="categories" />,
      type: 'item',
      url: '/categories',
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: false
    }
  ]
};

export default categories_menu;
