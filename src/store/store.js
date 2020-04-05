import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state: {
    usersList: []
  },
  getters: {
    USERS_LIST: state => {
      return state.usersList;
    }
  },
  mutations: {
    SET_USERS_LIST: (state, payload) => {
      // state.usersList = payload;
      payload.map(el => {
        state.usersList.push({
          name: `${el.name.first} ${el.name.last}`,
          email: el.email,
          picture: el.picture.thumbnail,
          id: el.login.uuid
        });
      });
      console.log(payload);
    }
  },
  actions: {
    GET_USERS_LIST: async context => {
      let {
        data: { results }
      } = await axios.get(
        "https://randomuser.me/api/?results=20&inc=login,picture,name,location,email,gender,dob,phone&noinfo"
      );
      context.commit("SET_USERS_LIST", results);
    }
  }
});
