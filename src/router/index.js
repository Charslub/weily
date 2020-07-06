
//        去年今日此门中，人面桃花相映红。
//        人面不知何处去，桃花依旧笑春风。
const routes=[
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component:()=>import('../view/Home/Home')
  },
  {
    path:'/edit',
    component:()=>import('../view/Edit/EditPage')
  },
  {
    path:'/docs',
    component:()=>import('../view/Docs/Docs')
  }
]


const router=new VueRouter({
  routes,
  mode:'history'
})
export default  router