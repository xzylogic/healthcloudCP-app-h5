<template>
  <div id="config" class="wrap">
    <ul>
      <li>
        <div class="config_card">
          <div class="title">出生</div>
          <p><span class="span">免费</span>卡介苗</p>
          <p><span class="span">免费</span>乙肝</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">一月龄</div>
          <p><span class="span">免费</span>乙肝</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">二月龄</div>
          <p><span class="span">免费</span>IPV</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">三月龄</div>
          <p><span class="span">免费</span>bopv</p>
          <p><span class="span">免费</span>百白破</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">四月龄</div>
          <p><span class="span">免费</span>bopv</p>
          <p><span class="span">免费</span>百白破</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">五月龄</div>
          <p><span class="span">免费</span>百白破</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">六月龄</div>
          <p><span class="span">免费</span>A群流脑</p>
          <p><span class="span">免费</span>乙肝</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">八月龄</div>
          <p><span class="span">免费</span>麻风</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">九月龄</div>
          <p><span class="span">免费</span>A群流脑</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">一岁</div>
          <p><span class="span">免费</span>乙脑</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">一岁半</div>
          <p><span class="span">免费</span>麻风腮</p>
          <p><span class="span">免费</span>甲肝</p>
          <p><span class="span">免费</span>百白破</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">两岁</div>
          <p><span class="span">免费</span>乙脑</p>
          <p><span class="span">免费</span>甲肝</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">三岁</div>
          <p><span class="span">免费</span>流脑A+C</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">四岁</div>
          <p><span class="span">免费</span>bopv</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">六岁</div>
          <p><span class="span">免费</span>麻风腮</p>
          <p><span class="span">免费</span>白破</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">小学四年级</div>
          <p><span class="span">免费</span>流脑A+C</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">初中一年级</div>
          <p><span class="span">免费</span>乙肝</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">初中三年级</div>
          <p><span class="span">免费</span>白破（暂停接种）</p>
        </div>
      </li>
      <li>
        <div class="config_card">
          <div class="title">大一进京新生</div>
          <p><span class="span">免费</span>麻疹</p>
          <p><span class="span">免费</span>白破（暂停接种）</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'config',
    head () {
      return {
        title: '免疫程序'
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    width: 100%;
    height: 100vh;
    background: #f4f4f4;
    overflow: auto;
    font-size: 16px;
    padding-bottom: 15px;
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  .config_card {
    margin: 15px 20px 0 20px;
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    p {
      padding: 15px;
      border-bottom: 1px dotted #eee;
    }
    p:nth-last-child(1) {
      border-bottom: 0;
    }
    .title {
      padding: 15px;
      color: #0786E7;
      background-color: #D6EEFB;
    }
    .span {
      padding: 0 3px;
      margin-right: 10px;
      font-size: 12px;
      color: #07B98C;
      border: 1px solid #07B98C;
      border-radius: 5px;
    }
  }
</style>
