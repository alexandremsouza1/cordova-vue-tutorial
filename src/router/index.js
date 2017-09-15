import Vue from 'vue'
import Router from 'vue-router'
import cordovaDemo from '../components/cordova_demo/CordovaDemo.vue'
import vueDemo from '../components/vue_demo/VueDemo.vue'
import example from '../components/vue_demo/Example.vue'
import watch from '../components/vue_demo/Watch.vue'
import Main from '../components/vue_demo/Main.vue'
import lifecycle from '../components/vue_demo/Lifecycle.vue'
import compute from '../components/vue_demo/Compute.vue'
import watchers from '../components/vue_demo/Wachers.vue'
import binding from '../components/vue_demo/Binding.vue'
import databinding from '../components/vue_demo/Databinding.vue'
import eventBinding from '../components/vue_demo/EventBinding.vue'
import elementBinding from '../components/vue_demo/ElementBinding.vue'
import bindingUIComponent from '../components/vue_demo/UIComponentBinding.vue'
import components from '../components/vue_demo/Components.vue'
import gloableComponents from '../components/vue_demo/GloableComponents.vue'
import comRegister from '../components/vue_demo/ComRegister.vue'
import dynamicMounted from '../components/vue_demo/DynamicMounted.vue'
import RefCom from '../components/vue_demo/RefCom.vue'
import PassProps from '../components/vue_demo/PassProps.vue'
import AttributeValidate from '../components/vue_demo/AttributeValidate.vue'
import CustomEvent from '../components/vue_demo/CustomEvent.vue'
import ContentDispatch from '../components/vue_demo/ContentDispatch.vue'
import EventBus from '../components/vue_demo/EventBus.vue'
import CordovaDataStorage from '../components/cordova_demo/CordovaDataStorage.vue'
import WebSQL from '../components/cordova_demo/WebSQL.vue'
import CordovaFilePlugin from '../components/cordova_demo/CordovaFilePlugin.vue'
import CordovaNetRequest from '../components/cordova_demo/CordovaNetRequest.vue'
import CordovaEvents from '../components/cordova_demo/CordovaEvents.vue'
import CordovaSQLitePlugin from '../components/cordova_demo/CordovaSQLitePlugin.vue'
import Combination from '../components/vue_demo/Combination.vue'
import Directive from '../components/vue_demo/Directive.vue'
import CustomDirective from '../components/vue_demo/CustomDirective.vue'
import Render from '../components/vue_demo/Render.vue'
import Filters from '../components/vue_demo/Filters.vue'
import Transition from '../components/vue_demo/Transition.vue'
import RouterPlugin from '../components/vue_demo/RouterPlugin.vue'
import RouterFoo from '../components/vue_demo/RouterFoo.vue'
import RouterBar from '../components/vue_demo/RouterBar.vue'
import RouterGetStart from '../components/vue_demo/RouterGetStart.vue'
import RouterDynamicSegment from '../components/vue_demo/RouterDynamicSegment.vue'
import RouterDynamicUser from '../components/vue_demo/RouterDynamicUser.vue'
import NestedRouter from '../components/vue_demo/NestedRouter.vue'
import NestedRouterUser from '../components/vue_demo/NestedRouterUser.vue'
import UserProfile from '../components/vue_demo/NestedRouterProfile.vue'
import UserPosts from '../components/vue_demo/NestedRouterPost.vue'
import ProgrammaticNavi from '../components/vue_demo/ProgrammaticNavi.vue'
import ProgrammaticNaviUser from '../components/vue_demo/ProgrammaticNaviUser.vue'
import NamingRouter from '../components/vue_demo/NamingRouter.vue'
import NamingRoutingUser from '../components/vue_demo/NamingRoutingUser.vue'
import NamingView from '../components/vue_demo/NamingView.vue'
import RedirectAndAlias from '../components/vue_demo/RedirectAndAlias.vue'
import NotFoundComponent from '../components/vue_demo/NotFoundComponent.vue'
import RouterHook from '../components/vue_demo/RouterHook.vue'
import ExclusiveRouterHook from '../components/vue_demo/ExclusiveRouterHook.vue'
import ComponentRouterHook from '../components/vue_demo/ComponentRouterHook.vue'
import RouterMeta from '../components/vue_demo/RouterMeta.vue'
import RouterTransition from '../components/vue_demo/RouterTransition.vue'
import RouterFetchData from '../components/vue_demo/RouterFetchData.vue'
import RouterFetchBefore from '../components/vue_demo/RouterFetchBefore.vue'
Vue.use(Router)

// 命名视图组件
const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
const Baz = {template: '<div>baz</div>'}

// 路由元信息组件
const MetaInfo = {template: '<div>MetaInfo</div>'}

export default new Router({
  routes: [
    {
      path: '*',
      component: NotFoundComponent
    },
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/cordova_demo',
      name: 'Cordova',
      component: cordovaDemo
    }, {
      path: '/vue_demo',
      name: 'vue',
      component: vueDemo
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: lifecycle
    },
    {
      path: '/compute',
      name: 'compute',
      component: compute
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: watchers
    },
    {
      path: '/binding',
      name: 'binding',
      component: binding
    },
    {
      path: '/databinding',
      name: 'databinding',
      component: databinding
    },
    {
      path: '/eventBinding',
      name: 'eventBinding',
      component: eventBinding
    },
    {
      path: '/elementBinding',
      name: 'elementBinding',
      component: elementBinding
    },
    {
      path: '/bindingUIComponent',
      name: 'bindingUIComponent',
      component: bindingUIComponent
    },
    {
      path: '/components',
      name: 'components',
      component: components
    },
    {
      path: '/gloableComponents',
      name: 'gloableComponents',
      component: gloableComponents
    },
    {
      path: '/comRegister',
      name: 'comRegister',
      component: comRegister
    },
    {
      path: '/dynamicMounted',
      name: 'dynamicMounted',
      component: dynamicMounted
    },
    {
      path: '/RefCom',
      name: 'RefCom',
      component: RefCom
    },
    {
      path: '/PassProps',
      name: 'PassProps',
      component: PassProps
    },
    {
      path: '/AttributeValidate',
      name: 'AttributeValidate',
      component: AttributeValidate
    },
    {
      path: '/CustomEvent',
      name: 'CustomEvent',
      component: CustomEvent
    },
    {
      path: '/ContentDispatch',
      name: 'ContentDispatch',
      component: ContentDispatch
    },
    {
      path: '/EventBus',
      name: 'EventBus',
      component: EventBus
    },
    {
      path: '/CordovaDataStorage',
      name: 'CordovaDataStorage',
      component: CordovaDataStorage
    },
    {
      path: '/WebSQL',
      name: 'WebSQL',
      component: WebSQL
    },
    {
      path: '/CordovaFilePlugin',
      name: 'CordovaFilePlugin',
      component: CordovaFilePlugin
    },
    {
      path: '/CordovaNetRequest',
      name: 'CordovaNetRequest',
      component: CordovaNetRequest
    },
    {
      path: '/CordovaEvents',
      name: 'CordovaEvents',
      component: CordovaEvents
    },
    {
      path: '/CordovaSQLitePlugin',
      name: 'CordovaSQLitePlugin',
      component: CordovaSQLitePlugin
    },
    {
      path: '/Combination',
      name: 'Combination',
      component: Combination
    },
    {
      path: '/Directive',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/CustomDirective',
      name: 'CustomDirective',
      component: CustomDirective
    },
    {
      path: '/Render',
      name: 'Render',
      component: Render
    },
    {
      path: '/Filters',
      name: 'Filters',
      component: Filters
    },
    {
      path: '/Transition',
      name: 'Transition',
      component: Transition
    },
    {
      path: '/RouterPlugin',
      name: 'RouterPlugin',
      component: RouterPlugin
    },
    {
      path: '/RouterFoo',
      name: 'RouterFoo',
      component: RouterFoo
    },
    {
      path: '/RouterBar',
      name: 'RouterBar',
      component: RouterBar
    },
    {
      path: '/RouterGetStart',
      name: 'RouterGetStart',
      component: RouterGetStart
    },
    {
      path: '/RouterDynamicSegment',
      name: 'RouterDynamicSegment',
      component: RouterDynamicSegment
    },
    {
      // 动态路径参数 以冒号开头
      path: '/user/:id',
      name: 'RouterDynamicUser',
      component: RouterDynamicUser
    },
    {
      path: '/NestedRouter',
      name: 'NestedRouter',
      component: NestedRouter
    },
    {
      path: '/nestedUser/:id',
      component: NestedRouterUser,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path: '/ProgrammaticNavi',
      name: 'ProgrammaticNavi',
      component: ProgrammaticNavi
    },
    {
      path: '/ProgrammaticNaviUser',
      name: 'ProgrammaticNaviUser',
      component: ProgrammaticNaviUser
    },
    {
      path: '/NamingRouter',
      name: 'NamingRouter',
      component: NamingRouter
    },
    {
      path: '/NamingRoutingUser',
      name: 'NamingRoutingUser123',
      component: NamingRoutingUser
    },
    {
      path: '/NamingView',
      name: 'NamingView',
      component: NamingView,
      children: [
        {
          path: '/1',
          components: {
            default: Foo,
            a: Bar,
            b: Baz
          }
        },
        {
          path: '/2',
          components: {
            default: Baz,
            a: Bar,
            b: Foo
          }
        }
      ]
    },
    {
      path: '/RedirectAndAlias',
      // redirect: '/RouterGetStart',
      name: 'RedirectAndAlias',
      component: RedirectAndAlias
    },
    {
      path: '/RouterHook',
      name: 'RouterHook',
      component: RouterHook
    },
    {
      path: '/ExclusiveRouterHook',
      name: 'ExclusiveRouterHook',
      component: ExclusiveRouterHook,
      beforeEnter: (to, from, next) => {
        console.log('某个路由钩子')
        next()
      }
    },
    {
      path: '/ComponentRouterHook',
      name: 'ComponentRouterHook',
      component: ComponentRouterHook
    },
    {
      path: '/RouterMeta',
      name: 'RouterMeta',
      component: RouterMeta
    },
    {
      path: '/RouterMeta',
      component: RouterMeta,
      children: [
        {
          path: '/metainfo',
          component: MetaInfo,
          // a meta field
          meta: {requiresAuth: true}
        }
      ]
    },
    {
      path: '/RouterTransition',
      component: RouterTransition,
      children: [
        {
          path: '/RouterTransition/1',
          component: Bar
        }
      ]
    },
    {
      path: '/RouterFetchData/:id',
      name: 'RouterFetchData',
      component: RouterFetchData,
      children: [
        {
          path: '/RouterFetchBefore',
          component: RouterFetchBefore
        }
      ]
    }
  ]
})
