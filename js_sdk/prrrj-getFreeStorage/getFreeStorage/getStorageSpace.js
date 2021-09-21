
/**
 * 获取手机剩余存储空间,单位G。]
 * @unit m g
 */
function getStorageSpace(unit='g') {
	try {
		var os = plus.os.name;
		if ('iOS' == os) {
			var BundleClass = plus.ios.importClass("NSBundle");
			var BundleObj = BundleClass.mainBundle();
			var filenamagerobj = plus.ios.newObject("NSFileManager");
			var FileAttr = plus.ios.invoke(filenamagerobj, "attributesOfFileSystemForPath:error:", BundleObj.bundlePath(), null);
			var FreeSize = plus.ios.invoke(FileAttr, "objectForKey:", "NSFileSystemFreeSize");
			var numberFormatterObj = plus.ios.newObject("NSNumberFormatter");
			var FreeSizeStr = plus.ios.invoke(numberFormatterObj, "stringFromNumber:", FreeSize);
			var FreeSize=unit=='m'?FreeSizeStr / 1024 / 1024:FreeSizeStr / 1024 / 1024/ 1024;
			return FreeSize.toFixed(2);
		} else if(os== "Android"){//如果是安卓
			var internalMemSize = 0;
			var FreeSize=0;
			     var environment = plus.android.importClass("android.os.Environment");  
			     var statFs = plus.android.importClass("android.os.StatFs");  
			     plus.android.importClass("java.io.File");
			     var Files = environment.getDataDirectory();  
			     var StatFs = new statFs(Files.getPath());  
			     var blockAva = parseFloat(StatFs.getAvailableBlocks());
						var blockSize= parseFloat(StatFs.getBlockSize());
			     internalMemSize = blockSize*blockAva;   
			 FreeSize=unit=='m'?internalMemSize/1024/1024:internalMemSize/1024/1024/1024;
			 return FreeSize.toFixed(2); 
		}else{
			return 'error getFileFree'
		}
	} catch (e) {
		console.error('error @getFileSystemFreeSize!!');
	}
}
module.exports = {
	getFreeStorage:getStorageSpace
}
