import { gzip, inflate, deflate } from 'pako';

// function Gzip() {
//     this.base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
//     this.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

// }

/**
 * Gzip流量压缩，使用pako.js实现
 */

function download(filename, text) {
    // let upp = prompt('解密解压错误，点击确定下载前端日志文件，并联系开发');
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
// 信息日志
const MessageLog = {
    arithmetic: (name) => {
        // window.console.log("压缩算法：%s", name);
    }
};
// 错误日志
const ErrorLog = {
    capture: (e, mode, origin, result, type) => {
        // window.console.log(e);
        // window.console.log('%s,%s,报错', type, mode);
        // window.console.log('原始数据: %s', origin);
        // window.console.log('结果数据: %s', result);
    }
};
// 用时打印
const timeLog = function (target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        //console.time(`${name}`);
        let res = oldValue.apply(this, arguments);
        //console.timeEnd(`${name}`);
        return res;
    };
    return descriptor;
};

class Gzip {
    constructor() {
        // base64的字符集
        this.base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        this.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    }

    /**
     * Gzip压缩
     * @param str json字符串
     * @return 经过gzip压缩后转码为Base64的json字符串
     */
    zip(str) {
        let output = '';
        output = this.gzipCompress(str);
        return output;
    }

    /**
     * Gzip解压
     * @param str json字符串
     * @return js对象
     */
    unzip(str) {
        let output = '';
        output = this.gzipDecompress(str);
        return output;
    }

    /**
     * Gzip压缩
     * @param str json字符串
     * @return 经过gzip压缩后转码为Base64的json字符串
     */
    // @timeLog
    gzipCompress(str) {
        MessageLog.arithmetic('gzip');
        if (str == undefined) {
            return null;
        }
        var gstr;
        try {
            // level  代表压缩级别 越大压缩级别越高
            // memLevel 代表内存级别 越大占用越多内存
            // gstr = gzip(str, { level: 1, memLevel: 9 });
            gstr = gzip(str);
        } catch (e) {
            ErrorLog.capture(e, 'gzip', str, gstr, '压缩');
        }
        return this.encodeBase64(gstr);
    }

    /**
     * Gzip解压
     * @param str json字符串
     * @return js对象
     */
    // @timeLog
    gzipDecompress(str) {
        if (str == undefined) {
            return null;
        }
        var gstr = this.decodeBase64(str);
        var out;
        try {
            out = inflate(gstr, { to: 'string' });
        } catch (e) {
            ErrorLog.capture(e, 'gzip', gstr, out, '解压');
        }
        var strData = '';
        try {
            strData = JSON.parse(out);
        } catch (error) {
            let rockin = localStorage.getItem('rockin');
            let cowboy = localStorage.getItem('cowboy');
            let storeCipher = localStorage.getItem('storeCipher');
            let gzip = localStorage.getItem('gzip');
            let estr = `解压错误，请找平台开发看下,或者记录当前数据, \r\nrockin: ${rockin},\r\ncowboy: ${cowboy},\r\ngzip: ${gzip},\r\nstoreCipher: ${storeCipher}, \r\ncookie: ${document.cookie}\r\n`;
            estr += `原始字符：${str},\r\n解压后字符：${out}\r\n\r\n错误日志：`;
            // download('前端日志文件' + new Date().getTime(), estr + error);
            console.error ? console.error(error) : console.log(error);
            console.log(str, gstr, out);
            throw new Error(error);
        }

        return strData;
    }

    /**
     * deflate压缩
     * @param str json字符串
     * @return 经过gzip压缩后转码为Base64的json字符串
     */
    // @timeLog
    deflate(str) {
        MessageLog.arithmetic('deflate');
        if (str == undefined) {
            return null;
        }
        var gstr;
        try {
            gstr = deflate(str);
        } catch (e) {
            ErrorLog.capture(e, 'deflate', str, gstr, '压缩');
        }
        return this.encodeBase64(gstr);
    }

    /**
     * inflate解压
     * @param str json字符串
     * @return js对象
     */
    inflate(str) {
        if (str == undefined) {
            return null;
        }
        var gstr = this.decodeBase64(str);
        var out;
        try {
            out = inflate(gstr, { to: 'string' });
        } catch (e) {
            ErrorLog.capture(e, 'deflate', gstr, out, '解压');
        }
        var strData = JSON.parse(out);
        return strData;
    }

    /**
     * 将二进制转为字符串
     * @param bytes 二进制字节流
     */
    encodeBase64(bytes) {
        var out, i, len;
        var c1, c2, c3;
        len = bytes.length;
        i = 0;
        out = '';
        debugger
        while (i < len) {
            // 0x代表16进制数,0xff表示的数二进制1111 1111 占一个字节.和其进行&操作的数,最低8位,不会发生变化.
            c1 = bytes[i++] & 0xff;
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += '==';
                break;
            }
            c2 = bytes[i++];
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt(
                    ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
                );
                out += this.base64EncodeChars.charAt((c2 & 0xf) << 2);
                out += '=';
                break;
            }
            c3 = bytes[i++];
            out += this.base64EncodeChars.charAt(c1 >> 2);
            out += this.base64EncodeChars.charAt(
                ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
            );
            out += this.base64EncodeChars.charAt(
                ((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6)
            );
            out += this.base64EncodeChars.charAt(c3 & 0x3f);
        }
        return out;
    }

    /**
     * 将字符串转为二进制
     * @param str 字符串
     */
    decodeBase64(str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = '';
        while (i < len) {
            /* c1 */
            do {
                c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1) break;
            /* c2 */
            do {
                c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1) break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61) return out;
                c3 = this.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1) break;
            out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61) return out;
                c4 = this.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1) break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
}
export default Gzip;
