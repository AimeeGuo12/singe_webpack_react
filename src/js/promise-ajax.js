let Ajax = function(url) {
    return new Promise((resolve, reject) => {
        let XHR = new XMLHttpRequest()
        XHR.open('get', url, false)
        XHR.onreadystatechange = handle
        XHR.send()
        function handle(){
            if(XHR.readyState !== 4) {
                return
            }
            if(XHR.status === 200) {
                resolve(XHR.response)
            }else{
                reject(new Error(XHR.statusText))
            }

        }
    })
}