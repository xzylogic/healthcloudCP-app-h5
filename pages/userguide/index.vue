<template>
  <div id="userguide">
    <div class="wrap">
      <ul class="accordion">
        <li v-for="item in list" :key="item.title">
          <div class="question clear" @click="toggle(item)">
            <span class="wen">{{item.title}}</span>
            <i class="fa fa-angle-down" aria-hidden="true" v-bind:class="{ active: item.open }"></i>
          </div>
          <div class="answer" v-show="item.open">
            <div v-if="item.key===1">
              <h4>注册账号</h4>
              <p>若没有帐号，点击【注册帐号】，进入帐号注册页面</p>
              <figure class="image">
                <img src="~/assets/userguide/01-1.png">
              </figure>
              <p>填写完注册信息后，点击【注册】，完成帐号注册并自动登入后返回App首页。（若密码设置简单，则会弹出温馨提醒，点击【我就是任性】继续完成注册）</p>
              <figure class="image">
                <img src="~/assets/userguide/01-2.png">
                <img src="~/assets/userguide/01-3.png">
              </figure>
            </div>
            <div v-if="item.key===2">
              <h4>登录</h4>
              <p>验证码登录：输入手机号，获取验证码，登录</p>
              <figure class="image">
                <img src="~/assets/userguide/02-1.png">
              </figure>
              <p>密码登录：输入手机号+密码，登录</p>
              <figure class="image">
                <img src="~/assets/userguide/02-2.png">
              </figure>
            </div>
            <div v-if="item.key===3">
              <h4>实名认证</h4>
              <p>进入我的模块页面。点击【头像】进入个人资料页面。点击【实名认证】项目，进行实名认证页面</p>
              <figure class="image">
                <img src="~/assets/userguide/03-1.png">
                <img src="~/assets/userguide/03-2.png">
              </figure>
              <p>输入【真实姓名、身份证号】，点击【+】号上传个人证件照。点击【申请实名认证】，提交实名申请。</p>
              <figure class="image">
                <img src="~/assets/userguide/03-3.png">
                <img src="~/assets/userguide/03-4.png">
              </figure>
            </div>
            <div v-if="item.key===4">
              <h4>叶酸领取预约流程展示</h4>
              <p>先选择预约医院，再选择预约时间（日期+时段）</p>
              <figure class="image">
                <img src="~/assets/userguide/04-1.png">
                <img src="~/assets/userguide/04-2.png">
              </figure>
              <p>选择申请人后，确认知情同意书</p>
              <figure class="image">
                <img src="~/assets/userguide/04-3.png">
                <img src="~/assets/userguide/04-4.png">
              </figure>
              <p class="strong">注意事项：</p>
              <p>*申请人的户籍属于昌平区，申请人户籍地址街道需与申请医院的街道一致；</p>
              <p>*申请人的户籍不属于昌平区，申请人现住地址街道需与申请医院的街道一致；</p>
              <br />
              <p>预约信息确认后，提示预约成功</p>
              <figure class="image">
                <img src="~/assets/userguide/04-5.png">
                <img src="~/assets/userguide/04-6.png">
              </figure>
            </div>
            <div v-if="item.key===5">
              <h4>母子建档预约流程展示</h4>
              <p>先选择预约医院，再选择预约时间（日期+时段）</p>
              <figure class="image">
                <img src="~/assets/userguide/05-1.png">
                <img src="~/assets/userguide/05-2.png">
              </figure>
              <p>先填写孕妇信息，再填写丈夫信息</p>
              <figure class="image">
                <img src="~/assets/userguide/05-3.png">
                <img src="~/assets/userguide/05-4.png">
              </figure>
              <p class="strong">注意事项：</p>
              <p>*申请人的户籍属于昌平区，孕妇户籍地址街道需与申请医院的街道一致；</p>
              <p>*申请人的户籍不属于昌平区，孕妇现住地址街道需与申请医院的街道一致；</p>
              <br />
              <p>预约信息确认后，提示预约成功</p>
              <figure class="image">
                <img src="~/assets/userguide/05-5.png">
                <img src="~/assets/userguide/05-6.png">
              </figure>
            </div>
            <div v-if="item.key===6">
              <h4>预防接种预约流程展示</h4>
              <p>先选择预约医院，再选择预约时间（日期+时段）</p>
              <figure class="image">
                <img src="~/assets/userguide/06-1.png">
                <img src="~/assets/userguide/06-2.png">
              </figure>
              <p>先选择宝宝，若无宝宝，可以通过【添加宝宝】进行添加；再填写父母信息</p>
              <figure class="image">
                <img src="~/assets/userguide/06-3.png">
                <img src="~/assets/userguide/06-4.png">
              </figure>
              <p class="strong">注意事项：</p>
              <p>宝宝母亲的现住地址街道需与申请医院的街道一致；</p>
              <br />
              <p>预约信息确认后，提示预约成功</p>
              <figure class="image">
                <img src="~/assets/userguide/06-5.png">
                <img src="~/assets/userguide/06-6.png">
              </figure>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userguide',
    data () {
      return {
        list: [{
          key: 1,
          title: '注册账号',
          open: false
        }, {
          key: 2,
          title: '登录',
          open: false
        }, {
          key: 3,
          title: '实名认证',
          open: false
        }, {
          key: 4,
          title: '母子建档预约流程展示',
          open: false
        }, {
          key: 5,
          title: '预防接种预约流程展示',
          open: false
        }, {
          key: 6,
          title: '儿童体检预约流程展示',
          open: false
        }]
      }
    },
    methods: {
      toggle (item) {
        item.open = !item.open
      }
    },
    head () {
      return {
        title: '昌平健康云App居民端用户指南v0.1'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/font-awesome.css';
  .wrap {
    width: 100%;
    height: 100vh;
    background: #fff;
    overflow: auto;
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
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
    line-height: 1.5;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    color: #0786E7;
    line-height: 1.75;
  }

  .strong {
    color: #FF8E22;
  }

  .image {
    padding: 10px 0;
    img {
      width: 47%;
    }
    img:first-child {
      margin-right: 5%;
    }
  }
</style>
