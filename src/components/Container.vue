<template>
  <div>
    <!-- step0 -->
    <div v-if="tapCnt == 0">
      <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />
    </div>



    <!-- step1 -->
    <!-- 필터선택페이지 -->
    <div v-if="tapCnt == 1">
      <div :class="선택한필터"
        class="upload-image"
        :style="`background-image:url(${이미지})`"
      ></div>
      <div class="filters">
        <FilterBox
          :필터="필터"
          :이미지="이미지"
          v-for="필터 in 필터들"
          :key="필터"
        >
          <template v-slot:a> {{ 필터 }}</template>
          <template v-slot:b> 데이터2</template>
        </FilterBox>
      </div>
    </div>



    <!-- step2 -->
    <!-- 글작성페이지 -->
    <div v-if="tapCnt == 2">
      <div :class="선택한필터" class="upload-image" :style="`background-image:url(${이미지})`"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)"
        >
write!</textarea
        >
      </div>
    </div>

    <!-- step3 -->
    <!-- 마이페이지 -->
    <div v-if="tapCnt == 3">
      <MyPage :one ="1"/>

    </div>


  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  data() {
    return {
      필터들: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2", 
      ],
      선택한필터 : "",
    };
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  props: {
    게시물: Array,
    tapCnt: Number,
    이미지: String,
  },
  methods: {},
  mounted() {
    this.emitter.on("박스클릭함", (a) =>{
      this.선택한필터 = a;
    });
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
