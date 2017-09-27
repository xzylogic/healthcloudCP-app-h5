<template>
  <div id="helpcenter" v-title="'帮助中心'">
    <div class="wrap">
      <ul class="accordion">
        <li v-for="item in list" :key="item.title">
          <div class="question clear" @click="toggle(item)">
            <span class="wen">{{item.title}}</span>
            <i class="fa fa-angle-down" aria-hidden="true" v-bind:class="{ active: item.open }"></i>
          </div>
          <div class="answer" v-html="item.content" v-show="item.open"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'helpcenter',
    data () {
      return {
        list: [{
          title: '1．注册与登录',
          content: `<p>一、手机方式登录</p><p>通过你的手机号码注册昌平健康云账号。注册中，不可跳过设置密码步骤，注册完即可登录。</p>`,
          open: false
        }]
      }
    },
    methods: {
      toggle (item) {
        item.open = !item.open
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
  }

  .accordion {
  }

  .question {
    width: 100%;
    padding: 14px 16px;
    background: #fff;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #f4f4f4;
    span {
      float: left;
    }
    i {
      color: #999;
      font-size: 24px;
      float: right;
      transition: all .2s ease;
    }
    .active {
      transform: rotate(-180deg);
    }
  }

  .answer {
    padding: 16px 32px;
    color: #666;
    font-size: 14px;
    line-height: 1.75;
  }
</style>
