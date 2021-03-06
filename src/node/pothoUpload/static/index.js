window.onload = function() {
    let btns = document.querySelectorAll("button");
        let xhr = new XMLHttpRequest();
        btns[0].onclick = function(){
            let sTime = 0;//文件开始上传时间
            let eTime = 0;//文件结束上传时间
            let fileInitSize = 0;//文件开始上传大小
            xhr.open("post","/fileUpload",true);
            let file = document.querySelector('.myfile').files[0];
            let formData = new FormData();
            formData.append('imgFile', file);

            // upload事件监控文件上传速度
            xhr.upload.onloadstart = function() {
                console.log('开始上传');
                sTime = new Date().getTime();
                fileInitSize = 0;
            };

            xhr.upload.onprogress = function(evt){
                console.log('文件上传中');
                console.log('evt', evt);
                // 在onpregress事件中监控上传速度
                let progress = (evt.loaded/evt.total*100).toFixed(0);
                // 将进度进行显示
                document.querySelector('.progress').value = progress;
                document.querySelector('.progressSpan').style.display = 'inline-block';
                document.querySelector('.progressSpan').innerHTML = progress + "%";
                // 监控文件上传速度（需要onloadstart和onprogress的时间差，及时间差内文件已上传的文件大小）
                eTime = new Date().getTime();
                // 需要将时间差转为秒
                let diffTime = (eTime-sTime)/1000;
                // 各个进度文件上传的文件大小
                let curFileSize = evt.loaded;
                let diffFileSize = curFileSize - fileInitSize;
                // 获取上传速度（需要处理上传的单位b/s kb/s）
                let speed = diffFileSize/diffTime;
                let unit = '';
                if(speed/1024 > 1) {
                    speed = speed/1024;
                    unit = 'b/s';
                }
                if(speed/1024>1){ // <1吧
                    speed = speed/1024;
                    unit = "kb/s";
                }
                document.querySelector(".speed").innerHTML = speed.toFixed(2)+unit;
                //使用当前文件大小/时间差 即文件上传速度
                sTime = eTime;
                fileInitSize = curFileSize
            };
            xhr.upload.onabort = function() {
                console.log('取消文件上传')
            };
            xhr.upload.onerror = function() {
                console.log('文件上传失败')
            };
            xhr.upload.onload = function() {
                console.log(xhr.responseText);
            }
            xhr.upload.onloadend = function() {
                console.log('文件上传成功')
            }
            xhr.send(formData)
         }
         btns[1].onclick = function(){
            //取消文件上传方法
            xhr.abort();
        };
}