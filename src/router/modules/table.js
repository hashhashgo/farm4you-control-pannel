import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  hidden:true,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '场地1',
    icon: 'table',
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      //hidden:true,
      name: 'DynamicTable',
      meta: { title: '监控'}
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/dynamic-table/drag-table'),
      //hidden:true,
      affix: true,
      name: 'DragTable',
      meta: { title: '长势'}
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      //hidden:true,
      affix: true,
      name: 'InlineEditTable',
      meta: { title: '控制'}
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/dynamic-table/complex-table'),
      //hidden:true,
      affix: true,
      name: 'ComplexTable',
      meta: { title: '灾害'}
    }
  ]
}
export default tableRouter
