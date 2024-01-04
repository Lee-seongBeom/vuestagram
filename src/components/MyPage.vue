<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="🔍" />
    <div v-for="(a,i) in follower" :key="i" class="post-header">
      <div class="profile" style="`background-image: url(${a.image})`"></div>
      <span class="profile-name">{{a.name}}</span>
    </div>
  </div>
</template>

<script>
import {  onMounted, ref} from 'vue';
import axios from 'axios';
// import {useStore} from 'vuex'

export default {
    name : "mypage",
    props :{
        one : Number,
    },
    setup() {
        let follower = ref([]);
        let followerOriginal = ref([]);

        // let {one}= toRefs(props);
        // console.log(one.value);

        // let test = reactive({ name : 'kim'});
        // console.log(test);

        function search(e){
            let newFollower = followerOriginal.value.filter((a)=>{
                return a.name.indexOf(e) != -1;
            });
            follower.value = [...newFollower];
            
        }
        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data;
                followerOriginal.value = [...a.data];
            });

        });



        return {follower, search}
    },
    data(){
        return{

        }
    }

};
</script>

<style scoped></style>
