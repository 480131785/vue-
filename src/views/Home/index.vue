<template>
  <div class="page-home">
      <div class="top">
        <router-view></router-view>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <router-link to = "/films">电影</router-link>
          </li>
          <li>
            <router-link to = "/cinemas">影院</router-link>
          </li>
          <li>
            <router-link to = "/my">我的</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"Home"
}
</script>

<style lang = "scss" scoped>
  .page-home{
    display: flex;
    flex-direction: column;
    height: 100%;
    .top{
      flex: 1;
    }
    .bottom{
      height: 50px;
      ul{
        display: flex;
        height: 100%;
        li{
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
      }
    }
  }
</style>