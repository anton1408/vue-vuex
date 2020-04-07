<template>
  <div class="user-page">
    <router-link tag="a" :to="'/'" class="user-page__back-link">
      Back to the users list
    </router-link>

    <UserProfile :user-data="userData" />
  </div>
</template>

<script>
// @ is an alias to /src
import "@/components/UserProfile";
import UserProfile from "@/components/UserProfile";

export default {
  name: "UserPage",
  components: {
    UserProfile
  },
  created() {
    this.getUserData();
  },
  data: () => ({
    userData: {}
  }),
  methods: {
    getUserData() {
      const index = this.$store.state.usersList.findIndex(
        el => el.id === this.$router.currentRoute.params["id"]
      );
      const user = this.$store.state.usersList[index];

      this.userData = {
        name: user.name,
        gender: user.gender,
        birthday: user.birthday.slice(0, 10),
        city: user.city,
        street: user.address,
        phone: user.phone,
        email: user.email,
        pictureLarge: user.pictureLarge
      };
    }
  }
};
</script>

<style lang="scss">
.user-page {
  &__back-link {
    color: #448aff;
    display: block;
    font-size: 18px;
    margin: 24px;
  }
}
</style>
