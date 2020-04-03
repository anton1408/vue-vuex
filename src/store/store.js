import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state: {
    usersList: {}
  },
  getters: {
    USERS_LIST: state => {
      return state.usersList;
    }
  },
  mutations: {
    SET_USERS_LIST: (state, payload) => {
      state.usersList = payload;
    }
  },
  actions: {
    GET_USERS_LIST: async context => {
      let {
        data: { results }
      } = await axios.get(
        "https://randomuser.me/api/?results=20&inc=id,picture,name,location,email,gender,dob,phone&noinfo"
      );
      context.commit("SET_USERS_LIST", results);
    }
  }
});
