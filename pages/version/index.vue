<template>
  <div id="version">
    <div v-show="!content">
      <div class="error-content">
        <img src="~/assets/loading.gif" alt="Loading..." width="200">
        <p>{{errorMsg}}</p>
      </div>
    </div>
    <div class="wrap" v-show="content"
      @touchstart="touchStart($event)"
      @touchmove="touchMove($event)" 
      @touchend="touchEnd($event)"
      @scroll="onScroll($event)" ref="wrap">
        <ul>
          <li v-for="item in content" :key="item.id">
            <nuxt-link :to="{ name: 'version-id', params: { id: item.id } }">
            <div class="wrap_list">
              <div class="list_left">
                <p class="title">{{item.title}}</p>
                <p class="date">{{item.date}}</p>
              </div>
              <div class="list_right">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
            </nuxt-link>
          </li>
        </ul>
        <div class="more-container" :style="{ height: height + 'px' }">
          <div class="more" v-show="more!==0">
            <span class="spinner-loader">Loading…</span>
            <span class="more_text">{{moreMsg}}</span>
          </div>
          <div class="more" v-show="more==0">
            <span class="more_text">没有更多了</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    name: 'version',
    data () {
      return {
        moreMsg: '加载更多...',
        startY: 0,
        endY: 0,
        maxTop: 0,
        height: 0
      }
    },
    mounted () {
      if (this.scrollTop) {
        this.$refs.wrap.scrollTop = this.scrollTop
      }
    },
    computed: {
      scrollTop () {
        return this.$store.state.version.scrollTop
      },
      type () {
        return this.$store.state.version.type
      },
      content () {
        return this.$store.state.version.content
      },
      more () {
        return this.$store.state.version.more
      },
      errorMsg () {
        return this.$store.state.version.errorMsg
      }
    },
    fetch ({ store, req, error, env }) {
      if (!store.state.version.type) {
        const userAgent = req.headers['user-agent']
        let type = ''
        if (/Android/i.test(userAgent)) {
          type = 'Android'
        }
        if (/iPhone|iPad|iPod/i.test(userAgent)) {
          type = 'IOS'
        }
        return axios.get(`${env.baseUrl}/api/findVersionInfoList?type=${type}`)
          .then(res => res.data)
          .then((res) => {
            if (res && res.data && res.code === 0 && res.data.content) {
              store.commit('updateVersion', {
                type: type,
                content: res.data.content,
                more: res.data.more ? res.data.more_params.flag : 0
              })
            } else {
              store.commit('updateVersionError', res.msg || '数据错误')
            }
          })
          .catch((e) => {
            store.commit('updateVersionError', '网络错误')
          })
      }
    },
    methods: {
      touchStart (event) {
        this.startY = event.touches[0].pageY
      },
      touchMove (event) {
        this.endY = event.changedTouches[0].pageY
      },
      touchEnd (event) {
        this.endY = event.changedTouches[0].pageY
        if (this.more && this.scrollTop > 0 && this.scrollTop >= this.maxTop && this.endY < this.startY) {
          console.log('load')
          this.loadmore()
        }
      },
      onScroll (event) {
        this.$store.commit('updateScroll', event.target.scrollTop)
        this.maxTop = event.target.scrollHeight - event.target.clientHeight
      },
      loadmore () {
        axios.get(`/api/findVersionInfoList?type=${this.type}&flag=${this.more}`)
          .then(res => res.data)
          .then((res) => {
            if (res && res.data && res.code === 0 && res.data.content) {
              this.$store.commit('updateMore', res.data.more ? res.data.more_params.flag : 0)
              this.$store.commit('updateContent', res.data.content)
              this.moreMsg = '加载更多...'
            } else {
              this.moreMsg = '数据出错，重新加载中...'
            }
          })
          .catch(err => {
            console.log(err)
            this.moreMsg = '网络出错，重新加载中...'
          })
      }
    },
    head () {
      return {
        title: '新版介绍'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/font-awesome.css';

  .wrap {
    width: 100%;
    height: 100vh;
    background: #f4f4f4;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  .wrap_list {
    width: 100%;
    height: 80px;
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
  }

  .list_left {
    float: left;
    width: 90%;
    .title {
      line-height: 1.75;
      font-size: 16px;
      color: #333;
    }
    .date {
      font-size: 14px;
      color: #999;
    }
  }

  .list_right {
    float: right;
    width: 10%;
    i {
      float: right;
      line-height: 50px;
      font-size: 24px;
      color: #999;
    }
  }

  .more-container {
    position: relative;
    overflow: hidden;
    // height: 100px;
    background: #fff;
    // transition: height 1s linear 0;
  }

  .more {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 15px;
    color: #999;
    font-size: 14px;
    text-align: center;
  }

  .error-content {
    width: 100%;
    height: 300px;
    padding-top: 30%;
    text-align: center;
    color: #666;
  }

  @-moz-keyframes spinner-loader {
    0% {
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spinner-loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinner-loader {
    0% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  /* :not(:required) hides this rule from IE9 and below */
  .spinner-loader:not(:required) {
    animation: spinner-loader 1500ms infinite linear;
    border-radius: 0.5em;
    box-shadow: 
      rgba(0, 0, 51, 0.3) 7px 0 0 0, 
      rgba(0, 0, 51, 0.3) 5px 5px 0 0, 
      rgba(0, 0, 51, 0.3) 0 7px 0 0, 
      rgba(0, 0, 51, 0.3) -5px 5px 0 0, 
      rgba(0, 0, 51, 0.3) -7px 0 0 0, 
      rgba(0, 0, 51, 0.3) -5px -5px 0 0, 
      rgba(0, 0, 51, 0.3) 0 -7px 0 0, 
      rgba(0, 0, 51, 0.3) 5px -5px 0 0;
    display: inline-block;
    width: 3px;
    height: 3px;
    margin: 9px;
    overflow: hidden;
    text-indent: 100%;
  }

  .more_text {
    margin-left: 10px;
    position: relative;
    top: -6px;
  }
</style>
