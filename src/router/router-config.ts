const Layout = () => import('../layout/index.vue')

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    meta: { title: '登录页', hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页', icon: 'home' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/form/index.vue'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },
  {
    path: '/navigation-1',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/navigation/index.vue'),
        meta: { title: '导航一', icon: 'shop' }
      }
    ]
  },
  {
    path: '/navigation-2',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/navigation/index.vue'),
        meta: { title: '导航二', icon: 'rest' }
      }
    ]
  },
  {
    path: '/navigation-3',
    component: Layout,
    redirect: '/navigation-3/option-3',
    meta: { title: '导航三', icon: 'save' },
    children: [
      {
        path: 'option-3',
        component: () => import('../views/navigation/index.vue'),
        meta: { title: '选项三' }
      },
      {
        path: 'option-4',
        component: () => import('../views/navigation/index.vue'),
        meta: { title: '选项四' }
      },
      {
        path: 'submenu',
        component: () => import('../views/navigation/index.vue'),
        redirect: '/navigation-3/submenu/option-5',
        meta: { title: '子菜单' },
        children: [
          {
            path: 'option-5',
            component: () => import('../views/navigation/index.vue'),
            meta: { title: '选项五' }
          },
          {
            path: 'option-6',
            component: () => import('../views/navigation/index.vue'),
            meta: { title: '选项六' }
          }
        ]
      }
    ]
  },
  {
    path: '/navigation-4',
    component: Layout,
    redirect: '/navigation-4/option-7',
    meta: { title: '导航四', icon: 'read' },
    children: [
      {
        path: 'option-7',
        component: () => import('../views/navigation/index.vue'),
        meta: { title: '选项七' }
      },
      {
        path: 'option-8',
        component: () => import('../views/navigation/index.vue'),
        meta: { title: '选项八' }
      },
      {
        path: 'option-9',
        component: () => import('../views/navigation/index.vue'),
        meta: { title: '选项九' }
      },
      {
        path: 'option-10',
        component: () => import('../views/navigation/index.vue'),
        redirect: '/navigation-4/option-10/option-11',
        meta: { title: '选项十' },
        children: [
          {
            path: 'option-11',
            component: () => import('../views/navigation/index.vue'),
            meta: { title: '选项十一' }
          }
        ]
      }
    ]
  }
]
