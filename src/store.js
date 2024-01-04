import { createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            name : 'kim',
            age : 20,
            likes : 30,
            좋아요눌렀니 : false,
        }
    },

    mutations : {
        이름변경(state){
            state.name = 'park'
        },
        나이변경(state, data){
            state.age+=data;
        },
        좋아요(state, data){
            if(state.좋아요눌렀니 == false){
                state.likes++;
                state.좋아요눌렀니 = true;
            }else{
                state.likes--;
                state.좋아요눌렀니 = false;
            }
            console.log(data);
        }
    }

})

export default store;