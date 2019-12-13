<template lang="pug">
  #app
    .main
      h1 Рейтинг участников
      .top
        .title  Поиск:
        input.search(
          type="text"
          v-model="searchInput"
          @input="liveSearch(searchInput)"
        )
      .sort
        .title Сортировки 
        .buttons
          button(
            @click="sort('rating')"
          ) По рейтингу
          button(
            @click="sort('age')"
          ) По возрасту
      .users
        user(
          v-for="user, index in users"
          :key="'user' + index"
          :user="user"
        )
      
</template>

<script>
import User from "@/components/User.vue";
import {
  SAVE_USERS_DATA,
  SORT_USERS_DATA,
  SEARCH_USERS
} from "./store/mutations";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    User
  },

  data: () => ({
    searchInput: ""
  }),

  watch: {
    searchInput(nVal) {
      this.liveSearch(nVal);
    }
  },

  computed: {
    ...mapGetters(["users"])
  },

  created() {
    this[SAVE_USERS_DATA]();
  },

  methods: {
    ...mapMutations([SAVE_USERS_DATA, SORT_USERS_DATA, SEARCH_USERS]),

    sort(type) {
      this[SORT_USERS_DATA](type);
    },

    liveSearch(searchInput) {
      this[SEARCH_USERS](searchInput);
    }
  }
};
</script>

<style lang="scss">
.main {
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1000px;
  margin: 0 auto;
  & > .top {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    & > .title {
      margin-right: 0.5rem;
    }
    & > .search {
      flex: 1;
    }
  }
  & > .sort {
    text-align: center;
    & > .title {
      margin-bottom: 0.2rem;
    }
    button {
      margin: 0 0.5rem;
    }
  }
  & > .users {
    width: 100%;
  }
}
</style>
