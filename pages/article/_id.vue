<template>
  <div id="article">
    <div class="container">
      <h1 class="title">{{title}}</h1>
      <p class="date">{{date}}</p>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import * as moment from 'moment'

  export default {
    name: 'article',
    data () {
      return {
        title: '',
        date: '',
        content: '',
        apiUrl: 'http://10.1.64.194/changping-internal'
      }
    },
    created () {
      axios.get(`${this.apiUrl}/api/article/info?id=${this.$route.params.id}&source=h5`)
        .then(res => {
          if (res && res.data && res.data.code === 0 && res.data.data) {
            this.title = res.data.data.title || ''
            this.date = moment(res.data.data.updateTime || new Date()).format('YYYY-MM-DD HH:mm')
            this.content = res.data.data.content || ''
          }
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
</style>
