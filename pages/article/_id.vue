<template>
  <div id="article" v-title="' '">
    <div v-show="!content&&!errMsg">
      <div class="error-content">
        <img src="~/assets/loading.gif" alt="Loading..." width="200">
      </div>
    </div>
    <div class="container" v-show="content">
      <h1 class="title">{{title}}</h1>
      <p class="date">{{date}}</p>
      <div v-html="content"></div>
    </div>
    <div v-show="!content&&errMsg">
      <div class="error-content">
        <img src="~/assets/neterror.png" alt="NETWORK ERROR" width="100">
        <p>暂无网络</p>
      </div>
    </div>
  </div>
</template>

<script>
  import * as moment from 'moment'

  export default {
    name: 'article',
    data () {
      return {
        title: '',
        date: '',
        content: '',
        errMsg: ''
      }
    },
    created () {
      this.$http.get(`${this.$baseUrl}/api/article/info?id=${this.$route.params.id}&source=h5`)
        .then(res => {
          if (res && res.data && res.data.code === 0 && res.data.data) {
            this.errMsg = ''
            this.title = res.data.data.title || ''
            this.date = moment(res.data.data.updateTime || new Date()).format('YYYY-MM-DD HH:mm')
            this.content = res.data.data.content || ''
          } else {
            console.log(res)
            this.content = ''
            this.errMsg = '啊哦～请求失败！'
          }
        }, err => {
          console.log(err)
          this.content = ''
          this.errMsg = '啊哦～请求失败！'
        })
    }
  }
</script>

<style>
  .container {
    max-width: 768px;
    padding: 15px;
    margin: 0 auto;
  }

  .title {
    line-height: 1.5;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }

  .date {
    padding: 6px 0 10px;
    font-size: 11px;
    font-weight: 400;
    color: #999;
  }

  .error-content {
    width: 100%;
    height: 300px;
    padding-top: 30%;
    text-align: center;
    color: #666;
  }
</style>
