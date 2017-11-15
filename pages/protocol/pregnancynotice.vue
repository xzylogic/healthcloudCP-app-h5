<template>
  <div id="pregnancynotice" class="notice-container">
    <div class="notice-title">
      <span class="t-s1">温</span>
      <span class="t-s2">馨</span>
      <span class="t-s3">提</span>
      <span class="t-s4">示</span>
    </div>
    <ul class="notice-list">
      <li>
        <span class="num one">1</span>
        <p>禁止性生活：人流后一月内切忌同房。</p>
      </li>
      <li>
        <span class="num two">2</span>
        <p>注意休息：流产后应卧床休息2～3天，以后逐渐增加活动时间。在流产后半月内不要从事重体力劳动，避免接触冷水。人子宫需要一个月左右复原。</p>
      </li>
      <li>
        <span class="num three">3</span>
        <p>保持外阴清洁卫生：人流后子宫口还没有闭合，子宫内膜也有一个修复的过程，在这段时间内，需特别注意保持外阴部的清洁卫生，术后半月内不要盆浴，以免不洁水进入阴道，导致细菌侵袭，引起感染。</p>
      </li>
      <li>
        <span class="num four">4</span>
        <p>注意饮食，加强营养：首先要保证优质蛋白质、充足的维生素和无机盐的供给，尤其是应补充足够的铁质，以预防贫血的发生。食物选择既要讲究营养，又要容易消化吸收。应多吃易于消化的食物，以加快身体的康复。</p>
      </li>
      <li>
        <span class="num five">5</span>
        <p>如术后阴道多量出血、腹痛、发烧随时就诊。术后14天仍有阴道出血，应进一步检查治疗。一个月后随诊一次。</p>
      </li>
      <li>
        <span class="num six">6</span>
        <p>坚持避孕：不坚持做好避孕，很快又会怀孕。有的妇女做堕胎的当月便又怀孕了，这对身体影响更大。</p>
      </li>
      <li>
        <span class="num seven">7</span>
        <p>流产后3-6个月再准备怀孕，提前每天服用0.4mg的叶酸。</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'pregnancynotice',
    head () {
      return {
        title: '温馨提示'
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
