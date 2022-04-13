<template>
  <div class="q-pa-md">
    <q-table
      title="Github Users"
      :rows="rows"
      :columns="columns"
      row-key="id"
    />
  </div>
</template>
<script>
export default {
  name: 'allUsers',
  setup () {
    return {
      rows: [],
      columns:
      [
        {
          name: 'id',
          label: 'Id',
          field: 'id',
          align: 'center',
          sortable: true
        },
        {
          name: 'login',
          label: 'Login',
          field: 'login',
          align: 'center'
        }
      ]
    }
  },
  mounted () {
    this.getAll()
  },
  methods: {
    async getAll () {
      await this.$axios.get('https://api.github.com/users?since=1').then((response) => {
        this.rows = response.data.map(item => {
          return {
            id: item.id,
            login: item.login
          }
        })
        console.log(this.rows)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
