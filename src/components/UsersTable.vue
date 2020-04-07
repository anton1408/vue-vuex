<template>
  <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card>
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <h1 class="md-title">Users</h1>
      </div>

      <md-field md-clearable class="md-toolbar-section-end">
        <md-input v-model="search" placeholder="Search by name..." @input="searchOnTable" />
      </md-field>
    </md-table-toolbar>

    <md-table-row-modified :user-id="item.id" slot="md-table-row" slot-scope="{ item, index }">
      <md-table-cell md-label="№" md-numeric>{{ index + 1 }}</md-table-cell>
      <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
      <md-table-cell md-label="Avatar"><img :src="item.picture" alt="avatar"></md-table-cell>
      <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
    </md-table-row-modified>
  </md-table>
</template>

<script>
import MdTableRowModified from "@/components/MdTable/MdTableRowModified";

const toLower = text => text.toString().toLowerCase();
const searchByName = (items, term) => {
  if (term)
    return items.filter(item => toLower(item.name).includes(toLower(term)));

  return items;
};

export default {
  name: "UsersTable",
  components: {
    MdTableRowModified
  },
  props: {
    data: Array
  },
  mounted() {
    this.searched = this.data;
  },
  data: () => ({
    search: null,
    searched: []
  }),
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.data, this.search);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
