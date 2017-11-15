<template>
  <div id="newnoticejm" class="notice-container">
    <div class="notice-title">
      <span class="t-s1">新</span>
      <span class="t-s2">生</span>
      <span class="t-s3">儿</span>
      <span class="t-s4">办</span>
      <span class="t-s5">本</span>
      <span class="t-s3">须</span>
      <span class="t-s2">知</span>
    </div>
    <ul class="notice-list">
      <li>
        <span class="num one">1</span>
        <p style="padding-bottom: 10px">办本时间</p>
        <p>每周一、三、四下午 1:00-4:00（节假日除外）</p>
      </li>
      <li>
        <span class="num two">2</span>
        <p style="padding-bottom: 10px">需提供的办本材料</p>
        <p><strong>（1）建立儿童体检本所需材料</strong></p>
        <ol class="notice-sublist">
          <li>
            <span class="num none">1</span>
            <p>母子健康档案、儿童保健记录本</p>
          </li>
          <li>
            <span class="num none">2</span>
            <p>听力筛查单</p>
          </li>
          <li>
            <span class="num none">3</span>
            <p>母亲户口不在城南城北的，提供实际居住地证明（房产证、租房合同或居委会证明），外嫁京除外</p>
          </li>
          <li>
            <span class="num none">4</span>
            <p>父母双方为外省市户籍的，提供母亲在本地段居住的北京市居住证或居住卡</p>
          </li>
        </ol>
        <p><strong>（2）办理接种本所需材料</strong></p>
        <ol class="notice-sublist">
          <li>
            <span class="num none">1</span>
            <p>父母双方身份证</p>
          </li>
          <li>
            <span class="num none">2</span>
            <p>母亲出院诊断证明</p>
          </li>
          <li>
            <span class="num none">3</span>
            <p>父母双方为外省市户籍的，提供一方在本地段居住的北京市居住证或居住卡</p>
          </li>
          <li>
            <span class="num none">4</span>
            <p>卡介苗接种证（或未种证明）</p>
          </li>
          <li>
            <span class="num none">5</span>
            <p>首针乙肝疫苗接种证明（或未种证明）</p>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'newnoticejm',
    head () {
      return {
        title: '新生儿办本须知'
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
      padding: 2px 3px;
      margin: 0 3px;
    }
    .t-s1 {
      background: #67e5c0;
      transform: rotate(-10deg);
    }
    .t-s2 {
      background: #9cc0ff;
      transform: rotate(10deg);
    }
    .t-s3 {
      background: #ffcc3e;
      transform: rotate(-10deg);
    }
    .t-s4 {
      background: #b1e57d;
      transform: rotate(10deg);
    }
    .t-s5 {
      background: #ffbcbc;
      transform: rotate(-10deg);
    }
  }

  .notice-title::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 15px;
    width: 10%;
    border-bottom: 1px solid #b1e57d;
    z-index: -1;
  }

  .notice-title::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 15px;
    width: 10%;
    border-bottom: 1px solid #b1e57d;
    z-index: -1;
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
      margin-bottom: 10px;
    }
    .notice-sublist {
      list-style: none;
      margin-left: 25px;
      padding-top: 10px;
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
      background: #6cd5ff;
    }
    .two {
      background: #b1e57d;
    }
    .three {
      background: #ffcc3e;
    }
    .four {
      background: #ff92ac;
    }
    .five {
      background: #f394ed;
    }
    .six {
      background: #6cd5ff;
    }
    .seven {
      background: #9cc0ff;
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
