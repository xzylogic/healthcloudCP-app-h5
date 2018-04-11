<template>
  <div id="version">
    <div v-show="!content">
      <div class="error-content">
        <img src="~/assets/loading.gif" alt="Loading..." width="200">
      </div>
    </div>
    <div class="wrap" v-show="content">
      <ul>
        <li v-for="item in content" :key="item.id">
          <nuxt-link :to="{ name: 'version-id', params: { id: item.id } }">
          <div class="wrap_list">
          <!-- <div class="wrap_list" @click="locationTo(item.id)"> -->
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
      <p class="more" @click="loadmore()" v-if="more!==0">加载更多</p>
    </div>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    name: 'version',
    computed: {
      type () {
        return this.$store.state.version.type
      },
      content () {
        return this.$store.state.version.content
      },
      more () {
        return this.$store.state.version.more
      }
    },
    fetch ({ store, req, error }) {
      console.log(store.state.version)
      if (!store.state.version.type) {
        const userAgent = req.headers['user-agent']
        let type = ''
        if (/Android/i.test(userAgent)) {
          type = 'Android'
        }
        if (/iPhone|iPad|iPod/i.test(userAgent)) {
          type = 'IOS'
        }
        return axios.get(`http://10.1.64.194/changping-user/api/version/findVersionInfoList?type=${type}`)
          .then(res => res.data)
          .then((res) => {
            if (res && res.data && res.code === 0 && res.data.content) {
              store.commit('updateVersion', {
                type: type,
                content: res.data.content,
                more: res.data.more ? res.data.more_params.flag : 0
              })
            } else {
              console.log(res)
              error({ msg: '访问错误' })
            }
          })
          .catch((e) => {
            error({ msg: '暂无网络' })
          })
      }
    },
    methods: {
      locationTo (id) {
        window.location.href = `/healthcloudcp-app-h5/version/${id}`
      },
      loadmore (more, content) {
        console.log(this.more)
        axios.get(`http://10.1.64.194/changping-user/api/version/findVersionInfoList?type=${this.type}&flag=${this.more}`)
          .then(res => res.data)
          .then((res) => {
            if (res && res.data && res.code === 0 && res.data.content) {
              this.$store.commit('updateMore', res.data.more ? res.data.more_params.flag : 0)
              this.$store.commit('updateContent', res.data.content)
            }
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

  .more {
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
</style>
