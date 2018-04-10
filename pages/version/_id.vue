<template>
  <div id="versiondetail">
    <div v-show="!title">
      <div class="error-content">
        <img src="~/assets/loading.gif" alt="Loading..." width="200">
      </div>
    </div>
    <div class="container" v-show="title">
      <h1 class="title">{{title}}</h1>
      <div class="content">
        <pre>{{publishContent}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    name: 'versiondetail',
    asyncData ({ params, error }) {
      return axios.get(`http://10.1.64.194/changping-user/api/version/findVersionInfoById?id=${params.id}&source=h5`)
        .then(res => res.data)
        .then((res) => {
          if (res && res.code === 0 && res.data) {
            return {
              title: '昌平健康云v1.1.1更新',
              productType: res.data.productType,
              productCategory: res.data.productCategory,
              versionNum: res.data.versionNum,
              appIcon: res.data.appIcon,
              publishTime: res.data.publishTime,
              publishContent: res.data.publishContent
            }
          } else {
            console.log(res)
            error({ msg: '访问错误' })
          }
        })
        .catch((e) => {
          error({ msg: '暂无网络' })
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
    max-width: 768px;
    padding: 15px;
    margin: 0 auto;
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
