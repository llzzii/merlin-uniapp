/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../uni_modules/qiun-data-charts/components/qiun-loading/loading1?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uni_modules/qiun-data-charts/components/qiun-loading/loading2?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uni_modules/qiun-data-charts/components/qiun-loading/loading3?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uni_modules/qiun-data-charts/components/qiun-loading/loading4?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uni_modules/qiun-data-charts/components/qiun-loading/loading5?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uni_modules/qiun-data-charts/components/qiun-loading/qiun-loading?hash=65d921a52a9401a916fcdfa863cd2e6bf219683d');
require('../../uni_modules/qiun-data-charts/components/qiun-error/qiun-error?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts?hash=f5fd3c48e373709a6a6538369ff61109e590106b');
require('../../uni_modules/uni-row/components/uni-row/uni-row?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uni_modules/uni-row/components/uni-col/uni-col?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/news-item/news-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/u-parse/components/wxParseImg?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/u-parse/components/wxParseVideo?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/u-parse/components/wxParseAudio?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/u-parse/components/wxParseTemplate11?hash=f80cb671d30da55ea641aa96cc43084bca445381');
require('../../components/u-parse/components/wxParseTemplate10?hash=f4d817fbc0a13c535d987e62881978f8e8d26e1e');
require('../../components/u-parse/components/wxParseTemplate9?hash=43b879b3f46c156acbb72ba1955f28893437ac55');
require('../../components/u-parse/components/wxParseTemplate8?hash=45dd100e82ced255d482d68e0f72c1bc4cc167f6');
require('../../components/u-parse/components/wxParseTemplate7?hash=c383de0fb88ddd1f78dfd0ac29b9a71a12e4c4dc');
require('../../components/u-parse/components/wxParseTemplate6?hash=c05defeeb7ff6bd53d4237a7be8794f2e067b065');
require('../../components/u-parse/components/wxParseTemplate5?hash=42091171f689dd1c14ebbd550d7c091e2ffd38ad');
require('../../components/u-parse/components/wxParseTemplate4?hash=ca7a2c4693ff26c4ebe0ee76fb70df5a8fd8ba6d');
require('../../components/u-parse/components/wxParseTemplate3?hash=3a010e25b97671ad0a4e245081d6c67d6a41afdf');
require('../../components/u-parse/components/wxParseTemplate2?hash=65b534f2a31bf5ee85e6a7fe18fdffe551265fc6');
require('../../components/u-parse/components/wxParseTemplate1?hash=efeb82d57d266c2dddcd5b91d51b01fae9c8aeb5');
require('../../components/u-parse/components/wxParseTemplate0?hash=d1270e11b4a6ce8d47db5ccb446ae74adbac785f');
require('../../components/u-parse/u-parse?hash=263d6b5d882d59fa8ded1b08bacf4f2a07f25bfe');
require('../../pages/tabBar/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../components/network-chart/network-chart?hash=15e41faffc7ea06e5e1e1618dbac26333f83e559');
require('../../pages/tabBar/learn/index?hash=4ce39b73496bb289df79d0f7ab17ac73ce0e09ea');
require('../../pages/tabBar/news/news?hash=c2e7141a4b6c9e895960b573fa391407cf7dc9f0');
require('../../components/news-detail/news-detail?hash=5e0ad117292ac2ea7b35d0ae7108f884b68b0f09');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}