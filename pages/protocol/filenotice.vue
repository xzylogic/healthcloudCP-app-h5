<template>
  <div id="filenotice" class="notice-container">
    <div class="notice-title">
      <span class="t-s1">建</span>
      <span class="t-s2">档</span>
      <span class="t-s3">须</span>
      <span class="t-s4">知</span>
    </div>
    <ul class="notice-list">
      <li>
        <span class="num one">1</span>
        <p>携带孕妇本人及丈夫的身份证、户口本原件（集体户带户口页原件和首页复印件）。</p>
      </li>
      <li>
        <span class="num two">2</span>
        <p>夫妻双方均为非本市户籍的，携带女方《北京市工作居住证》，同时需要补充在京实际居住证明；或携带《北京市居住证》或《北京市居住登记卡》办理。</p>
      </li>
      <li>
        <span class="num three">3</span>
        <p>关于集体户的解释</p>
        <ol class="notice-sublist">
          <li>
            <span class="num none">1</span>
            <p>夫妇双方均为本市户籍，但一方为非集体户口、一方为集体户口的，应在非集体户口一方的卫生服务中心建册。</p>
          </li>
          <li>
            <span class="num none">2</span>
            <p>夫妇双方均为本市正式集体户者，在女方集体户口所在地的卫生服务中心建册。</p>
          </li>
          <li>
            <span class="num none">3</span>
            <p>夫妇一方为本市正式集体户、一方为本市临时集体户者，在正式集体户口所在地的卫生服务中心建册。</p>
          </li>
          <li>
            <span class="num none">4</span>
            <p>军人视作集体户者。</p>
          </li>
        </ol>
      </li>
      <li>
        <span class="num four">4</span>
        <p>孕妇由于存在病理原因不能亲自建册者，须出具医疗机构诊断证明（需复印诊断证明）留底存档，可以由家属代建册并在高危因素初筛表上签字。</p>
      </li>
      <li>
        <span class="num five">5</span>
        <p>工作日办理。</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'filenotice',
    head () {
      return {
        title: '建档须知'
      }
    }
  }
</script>

<style lang="scss" scope>
  .notice-container {
    padding: 32px 16px;
  }

  .notice-title {
    position: relative;
    margin: 0 25px 25px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    span {
      display: inline-flex;
      padding: 2px 6px;
      margin: 0 3px;
    }
    .t-s1 {
      background: #B1E57D;
      transform: rotate(-10deg);
    }
    .t-s2 {
      background: #FFBCBC;
      transform: rotate(10deg);
    }
    .t-s3 {
      background: #FFCC3E;
      transform: rotate(-10deg);
    }
    .t-s4 {
      background: #88FDF8;
      transform: rotate(10deg);
    }
  }

  .notice-title::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 15px;
    width: 20%;
    border-bottom: 1px solid #B1E57D;
  }

  .notice-title::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 15px;
    width: 20%;
    border-bottom: 1px solid #B1E57D;
  }

  .notice-list {
    list-style: none;
    margin-left: 25px;
    color: #666;
    line-height: 1.5;
    p {
      font-size: 16px;
    }
    li {
      position: relative;
      margin-bottom: 20px;
    }
    .notice-sublist {
      list-style: none;
      margin-left: 25px;
      padding-top: 20px;
    }
    .num {
      position: absolute;
      left: -25px;
      top: 2px;
      display: block;
      width: 20px;
      height: 20px;
      color: #fff;
      border-radius: 20px;
      text-align: center;
      font-size: 14px;
    }
    .one {
      background: #6CD5FF;
    }
    .two {
      background: #B1E57D;
    }
    .three {
      background: #FFCC3E;
    }
    .four {
      background: #FF92AC;
    }
    .five {
      background: #F394ED;
    }
    .none {
      font-size: 12px;
      width: 18px;
      height: 18px;
      color: #666;
      background: #fff;
      border: 1px solid #999;
    }
  }
</style>
