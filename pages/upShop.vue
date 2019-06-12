<template>
  <div>
    <input id="file-selector" type="file">
  </div>
</template>

<script>
  import COS from "cos-js-sdk-v5"
  var Bucket = 'test-1250000000';
  var Region = 'ap-guangzhou';
  export default {
    created:function() {
      var cos = new COS({
        getAuthorization: function (options, callback) {
          var url = '../server/sts.php';
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onload = function (e) {
            try {
              var data = JSON.parse(e.target.responseText);
            } catch (e) {
            }
            callback({
              TmpSecretId: data.credentials && data.credentials.tmpSecretId,
              TmpSecretKey: data.credentials && data.credentials.tmpSecretKey,
              XCosSecurityToken: data.credentials && data.credentials.sessionToken,
              ExpiredTime: data.expiredTime,
            });
          };
          xhr.send();
        }
      });

      document.getElementById('file-selector').onchange = function () {

        var file = this.files[0];
        if (!file) return;

        // 分片上传文件
        cos.sliceUploadFile({
          Bucket: Bucket,
          Region: Region,
          Key: file.name,
          Body: file,
          onHashProgress: function (progressData) {
            console.log('校验中', JSON.stringify(progressData));
          },
          onProgress: function (progressData) {
            console.log('上传中', JSON.stringify(progressData));
          },
        }, function (err, data) {
          console.log(err, data);
        });

      };
    },
    name:"upShop"
  }
</script>

<style scoped>

</style>
