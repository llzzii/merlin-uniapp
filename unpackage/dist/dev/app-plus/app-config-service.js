
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabBar/index/index","pages/tabBar/fileManage/file_manage","components/network-chart/network-chart","pages/tabBar/learn/index","pages/tabBar/news/news","components/news-detail/news-detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/tabBar/index/index","iconPath":"static/images/tabBar/home.png","selectedIconPath":"static/images/tabBar/home_selected.png","text":"首页"},{"pagePath":"pages/tabBar/fileManage/file_manage","iconPath":"static/images/tabBar/file.png","selectedIconPath":"static/images/tabBar/file_selected.png","text":"文件"},{"pagePath":"pages/tabBar/learn/index","iconPath":"static/images/tabBar/learn.png","selectedIconPath":"static/images/tabBar/learn_selected.png","text":"学习"},{"pagePath":"pages/tabBar/news/news","iconPath":"static/images/tabBar/news.png","selectedIconPath":"static/images/tabBar/news_selected.png","text":"资讯"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"merlin","compilerVersion":"3.2.3","entryPagePath":"pages/tabBar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabBar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarBackgroundColor":"#00ade3","navigationBarTextStyle":"white"}},{"path":"/pages/tabBar/fileManage/file_manage","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"文件","navigationBarShadow":{"colorType":"gray"},"navigationBarBackgroundColor":"#00ade3","navigationBarTextStyle":"white"}},{"path":"/components/network-chart/network-chart","meta":{},"window":{"navigationBarTitleText":"网络图表","navigationBarShadow":{"colorType":"gray"},"navigationBarBackgroundColor":"#00ade3","navigationBarTextStyle":"white"}},{"path":"/pages/tabBar/learn/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"学习","navigationBarShadow":{"colorType":"gray"},"navigationBarBackgroundColor":"#00ade3","navigationBarTextStyle":"white"}},{"path":"/pages/tabBar/news/news","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"资讯","navigationBarShadow":{"colorType":"gray"},"navigationBarBackgroundColor":"#00ade3","navigationBarTextStyle":"white"}},{"path":"/components/news-detail/news-detail","meta":{},"window":{"navigationBarTitleText":"详情页面","navigationBarShadow":{"colorType":"gray"},"navigationBarBackgroundColor":"#00ade3","navigationBarTextStyle":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
