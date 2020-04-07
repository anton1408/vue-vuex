<template>
  <div class="user-profile">
    <div class="user-profile__avatar">
      <img :src="userData.pictureLarge" alt="avatar">
    </div>
    <md-list class="user-profile__description">
      <md-list-item
        v-for="(value, name, index) in userData"
        v-if="name !== 'pictureLarge'"
        :key="index"
      >
        <span class="md-list-item-text">{{name}}: {{ value }}</span>
      </md-list-item>
    </md-list>
  </div>
  
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    userData: Object
  }
};
</script>

<style lang="scss">
.user-profile {
  display: flex;
  flex-wrap: wrap;
  padding-left: 24px;
  padding-right: 24px;

  &__avatar {
    display: flex;
    width: 200px;
    margin-right: 24px;

    img {
      border-radius: 100%;
      width: 200px;
      height: 200px !important;
    }
  }
}
</style>