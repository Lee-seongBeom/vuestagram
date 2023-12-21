<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :게시물="게시물" />
  <button @click="more" >더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import Container from "./components/Container.vue";
import data from "./data/data.js";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Container: Container,
  },
  data() {
    return {
      게시물 : data,
      카운트 : 0,
    };
  },
  methods: {
    more(){
      // axios.post('url', {name: 'kim'}).then().catch((err)=>{
      //   console.log(err);
      // });

      // axios.get('https://codingapple1.github.io/vue/more'+this.카운트+'.json') // 같은 문법
      axios.get(`https://codingapple1.github.io/vue/more${this.카운트}.json`) // es6 백틱기호 활용 (템플릿 리터럴)
      .then((결과) => {
        // 요청성공시 실행할 코드
        console.log(결과.data);
        this.게시물.push(결과.data);
        this.카운트++;
      })
    }
  },
};
</script>

<style>
@import "style.css";
</style>
