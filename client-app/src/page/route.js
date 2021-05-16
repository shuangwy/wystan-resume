
import { Home, Resume, LayoutResume } from './index';
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        title: 'Welcome to wystan station'
    },
    {
        path: '/resume',
        component: Resume,
        title: '王爽简历-前端-4年'
    },
    {
        path: '/layout-resume',
        component: LayoutResume
    },
];
export { routes };
