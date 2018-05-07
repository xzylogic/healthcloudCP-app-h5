<template>
  <div id="versiondetail">
    <div v-show="!title">
      <div class="error-content">
        <img src="~/assets/loading.gif" alt="Loading..." width="200">
        <p>{{errorMsg}}</p>
      </div>
    </div>
    <div class="container" v-show="title">
      <h1 class="title">{{title}}</h1>
      <div class="content">
        <pre>{{content}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    name: 'versiondetail',
    computed: {
      title () {
        return this.$store.state.versionObj.title
      },
      content () {
        return this.$store.state.versionObj.content
      },
      errorMsg () {
        return this.$store.state.versionObj.errorMsg
      }
    },
    fetch ({ store, params, error, env }) {
      return axios.get(`${env.baseUrl}/api/findVersionInfoById?id=${params.id}&source=h5`)
        .then(res => res.data)
        .then((res) => {
          if (res && res.code === 0 && res.data) {
            store.commit('updateVersionObj', {
              title: res.data.title,
              content: res.data.publishContent
            })
          } else {
            store.commit('updateErrorMsg', res.msg || '数据错误')
          }
        })
        .catch((e) => {
          store.commit('updateErrorMsg', '网络错误')
        })
    },
    head () {
      return {
        title: '更新内容'
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
    max-width: 768px;
    padding: 15px;
    margin: 0 auto;
    overflow: scroll;
  }

  .title {
    padding-bottom: 15px;
    line-height: 1.75;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #333;
  }

  .content {
    line-height: 1.75;
    font-size: 16px;
    color: #666;
    pre {
      white-space: pre-wrap;     
      word-wrap: break-word;  
    }
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
