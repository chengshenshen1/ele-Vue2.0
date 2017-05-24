export function formatDate(date, fmt) {
  /**
   * 用正则表达式/(y+)/匹配fmt中的内容
   * test() 方法用于检测一个字符串是否匹配某个模式
   * // RegExg.$1匹配第一个正则中第一个括号中的值
   */
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let fmtitem = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let key in fmtitem) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = fmtitem[key] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
