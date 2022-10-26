<template>
  <div class="wc-wrapper">
    <div class="wc-content">
      <el-tag
        v-for="item in items"
        :key="item.id"
        effect="plain"
      >
        {{ item.name }}
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webClass',
  data () {
    return {
      items: [
        { type: 'web', name: '网页', id: 1, mode: 'web' },
        { type: 'ui', name: 'ui', id: 2, mode: 'ui' },
        { type: 'vue', name: 'vue', id: 3, mode: 'vue' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' },
        { type: 'react', name: 'react', id: 4, mode: 'react' },
        { type: 'js', name: 'javascript', id: 5, mode: 'javascript' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wc-wrapper {
  width: 80%;
  height: 200px;
  background: red;
  margin: 0 auto;
  margin-bottom: 5px;
  .wc-content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
