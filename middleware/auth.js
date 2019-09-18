import Cookies  from "js-cookie";

export default function({ store, route, redirect, error }){
  /*
  * nuxt自带的中间件方法,vuex状态管理树,当前路由,路由重定向,错误信息
  * */
  //路由鉴权
  // if (!store.state.authUser) {
  //     return redirect({path:'/Login'})
  // }
  // console.log(route.path);
  if(Cookies.get('_ISLOGIN')){
    store.commit("change");
    // console.log(route);
  }
  //用中间件做路由重定向
  if(!store.state.isCheck &&  route.path=='/life'){ //如果去私人照片并且未验证
      return redirect({path:'/check'})
    }
    //注:这里千万不能再次重定向到"/life",否则就会一直执行,页面崩溃
}



