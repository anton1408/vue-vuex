<template>
  <div class="home">
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item, index }">
        <md-table-cell md-label="№" md-numeric>{{ index + 1 }}</md-table-cell>
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Avatar"><img :src="item.picture" alt=""></md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>

<script>
// @ is an alias to /src

const toLower = text => text.toString().toLowerCase();
const searchByName = (items, term) => {
  if (term)
    return items.filter(item => toLower(item.name).includes(toLower(term)));

  return items;
};

export default {
  name: "home",
  components: {},
  created() {
    this.usersListData = this.$store.getters.USERS_LIST;
    this.searched = this.usersListData;
  },
  mounted() {},
  computed: {},
  data: () => ({
    usersListData: [],
    search: null,
    searched: []
  }),
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.usersListData, this.search);
    }
  }
};
</script>
