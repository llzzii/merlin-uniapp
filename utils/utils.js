/**
 * 
 *时间戳转换为日期时间 
 * @param timestamp: 传入时间戳，需为10位字符串或13位字符串 
 * @param format: 日期格式，参数需为Y M D h m s ,格式自定义(如'Y-M-D h:m:s') 
 * 
 */
export const timestampToTime = function(timestamp=new Date().getTime(), format='Y-M-D h:m:s') {
	var format_Arr = ['Y', 'M', 'D', 'h', 'm', 's'];
	timestamp = timestamp.toString().length === 13 ? Number(timestamp) : timestamp * 1000;
	var data = new Date(timestamp);
	var Y = zerofill(data.getFullYear()),
		M = zerofill(data.getMonth() + 1),
		D = zerofill(data.getDate()),
		h = zerofill(data.getHours()),
		m = zerofill(data.getMinutes()),
		s = zerofill(data.getSeconds());
	var time_Arr = [Y, M, D, h, m, s];
	time_Arr.forEach(function(value, index) {
		format = format.replace(format_Arr[index], value);
	});
	return format;

	function zerofill(time) {
		var tiem_str = time.toString();
		return tiem_str[1] ? tiem_str : '0' + tiem_str;
	}
};
