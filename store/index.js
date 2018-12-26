import  Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

//可以把store状态管理理解成为一个公共的仓库,所有页面和组件都可以来访问和改变这个全局的指!

const store = () =>  new Vuex.Store({
  state:{
    //定义数据
    isCheck:false,//校验是否通过验证
  },
  mutations:{
  //定义方法,改变state中的数据
    change(state){
      state.isCheck = !state.isCheck
      // Vue.set(state.list,params,state.list[params]);//Vue的set方法,可以改变当前数据索引所对应的值
    },
  },

  /*
  * nuxtServerInit 方法：如果在状态树中指定了 nuxtServerInit 方法，Nuxt.js 调用它的时候会将页面的上下文对象作为第2个参数传给它（服务端调用时才会酱紫哟）。当我们想将服务端的一些数据传到客户端时，这个方法是灰常好用的。
  * */
  // actions: {
  //   nuxtServerInit ({ commit }, { req }) {
  //     if (req.session.user) {
  //       commit('user', req.session.user)
  //     }
  //   }
  // }
});
export default store
