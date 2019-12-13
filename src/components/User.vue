<template lang="pug">
  .user
    .id(
      v-text="user.id"
    )
    .avatar(
      v-text="firstLettersName"
    )
    .desc
      .name(
        v-text="fullName"
      )
      .age
       span Возраст:&nbsp; 
       span(
         v-text="user.age"
       )
    .score
      .title(
        v-text="user.rating"
      )
      .text(
        v-text="titleScore"
      )
    
</template>

<script>
export default {
  props: {
    user: Object
  },

  computed: {
    firstLettersName() {
      const letters = this.user.name[0] + this.user.secondName[0];
      return letters.toUpperCase();
    },

    fullName() {
      return this.user.name + " " + this.user.secondName;
    },

    titleScore() {
      return window.pluralize(this.user.rating, "Балл", "Балла", "Баллов");
    }
  }
};
</script>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  & > .id {
    margin-right: 1rem;
  }
  & > .avatar {
    width: 3rem;
    height: 3rem;
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    margin-right: 1rem;
  }
  & > .score {
    margin-left: auto;
  }
}
</style>
