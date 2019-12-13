import { SAVE_USERS_DATA, SORT_USERS_DATA, SEARCH_USERS } from "../mutations";
import usersData from "../../mocks/users.json";
import _ from "lodash";

const state = {
  users: [],
  search: ""
};

const getters = {
  users: state => {
    if (state.search && state.search.length > 0) return state.filtered;
    return state.users;
  }
};

const actions = {};

const mutations = {
  [SAVE_USERS_DATA](state) {
    state.users = usersData.users;
  },

  [SORT_USERS_DATA](state, type) {
    state.users = _.sortBy(state.users, [type]);
  },

  [SEARCH_USERS](state, payload) {
    payload = payload.toLowerCase();
    state.search = payload;
    state.filtered = _.filter(state.users, getProp);

    function getProp(_object) {
      let is = false;
      for (var prop in _object) {
        if (!is) {
          if (typeof _object[prop] === "object") {
            if (getProp(_object[prop])) {
              is = true;
            }
          } else {
            if (typeof _object[prop] === "string") {
              if (_object[prop].toLowerCase().indexOf(payload) + 1) {
                return true;
              }
            }
          }
        }
      }
      return is;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
