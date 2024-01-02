<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="tapCnt == 1" @click="tapCnt++">Next</li>
      <li v-if="tapCnt == 2" @click="publish">발행</li>
    </ul>



    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :이미지="이미지" :게시물="게시물" :tapCnt="tapCnt"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>



  <div v-if="tapCnt == 0">내용0</div>
  <div v-if="tapCnt == 1">내용1</div>
  <div v-if="tapCnt == 2">내용2</div>
  <button @click="tapCnt = 0">버튼0</button>
  <button @click="tapCnt = 1">버튼1</button>
  <button @click="tapCnt = 2">버튼2</button>
</template>

<script>
import Container from "./components/Container.vue";
import data from "./data/data.js";
import axios from "axios";

export default {
  name: "App",
  components: {
    Container: Container,
  },
  data() {
    return {
      게시물: data,
      카운트: 0,
      tapCnt : 0,
      이미지 : '',
    };
  },
  methods: {
    more() {
      // axios.post('url', {name: 'kim'}).then().catch((err)=>{
      //   console.log(err);
      // });

      // axios.get('https://codingapple1.github.io/vue/more'+this.카운트+'.json') // 같은 문법
      axios
        .get(`https://codingapple1.github.io/vue/more${this.카운트}.json`) // es6 백틱기호 활용 (템플릿 리터럴)
        .then((결과) => {
          // 요청성공시 실행할 코드
          console.log(결과.data);
          this.게시물.push(결과.data);
          this.카운트++;
        });
    },

    upload(e){
      // 이미지 띄우는법
      // 1. FileReader()
      // 2. URL.createObjectURL()
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      console.log(파일[0].type);
      this.이미지 = url;
      this.tapCnt++;
    },

    publish(){
      let 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: "",
        likes: 36,
        date: "May 15",
        liked: false,
        content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
        filter: "perpetua"
      };
      this.게시물.unshift(내게시물);
      this.tapCnt = 0;
    },

  },
};
</script>

<style>
@import "style.css";
</style>
