<template>
  <div id="article">
    <div v-show="!content">
      <div class="error-content">
        <img src="~/assets/loading.gif" alt="Loading..." width="200">
      </div>
    </div>
    <div class="container" v-show="content">
      <h1 class="title">{{title}}</h1>
      <p class="date">{{date}}</p>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import * as moment from 'moment'

  export default {
    name: 'article',
    asyncData ({ params, error }) {
      return axios.get(`/changping-internal/api/article/info?id=${params.id}&source=h5`)
        .then((res) => {
          if (res && res.data && res.data.code === 0 && res.data.data) {
            return {
              title: res.data.data.title || '',
              date: moment(res.data.data.updateTime || new Date()).format('YYYY-MM-DD HH:mm'),
              content: res.data.data.content || ''
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
        title: ''
      }
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
