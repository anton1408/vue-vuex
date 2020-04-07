<template>
  <div class="home">
    <UsersTable :data="this.usersListData" />
  </div>
</template>

<script>
// @ is an alias to /src
import UsersTable from "../components/UsersTable";

export default {
  name: "home",
  components: {
    UsersTable
  },
  created() {
    this.usersListData = this.$store.getters.USERS_LIST;
  },
  data: () => ({
    usersListData: []
  })
};
</script>
