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
      payload.map(el => {
        state.usersList.push({
          name: `${el.name.first} ${el.name.last}`,
          email: el.email,
          picture: el.picture.thumbnail,
          pictureLarge: el.picture.large,
          id: el.login.uuid,
          city: el.location.city,
          address: `${el.location.street.name} ${el.location.street.number}`,
          phone: el.phone,
          gender: el.gender,
          birthday: el.dob.date
        });
      });
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
