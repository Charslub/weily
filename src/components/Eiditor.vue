<template>
  <div>
    233
    <mavon-editor
            @change="change"
            :codeStyle="codeStyle"
            v-model = 'editorContent'
            :ishljs="true"
            ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"
    />
    <div v-html="html"></div>
  </div>
</template>

<script>
  export default {
    name: "Eiditor",
    data() {
      return {
        html:'',
        editorContent: '',
        codeStyle:'docco',
        img_file:[]
      }
    },
    methods:{
      change(render,html){
        this.html=html
      },
      $imgAdd(pos,$file){
        var formdata = new FormData();
        formdata.append('image', $file);
        console.log($file)
        this.img_file[pos] = $file;
        // this.$http({
        //   url: '/api/edit/uploadimg',
        //   method: 'post',
        //   data: formdata,
        //   headers: { 'Content-Type': 'multipart/form-data' },
        // }).then((res) => {
        //   let _res = res.data;
        //   // 第二步.将返回的url替换到文本原位置[外链图片转存失败(img-Anv63SQR-1564734760257)(0)] -> [外链图片转存失败(img-OVX7vZS4-1564734760259)(url)]
        //   this.$refs.md.$img2Url(pos, _res.url);
        // })
      },
      $imgDel(pos){
        console.log('删除图片');
        console.log(pos);
        delete this.img_file[pos];
      }
    }
  }
</script>

<style scoped>

</style>