<script setup lang="ts">
import { computed } from 'vue'
import { getAllFrameworks } from '../utils/framework-utils'
import { comparisonCriteria } from '../utils/comparison-utils'

const frameworks = getAllFrameworks()
const comparison = computed(() => {
  return comparisonCriteria.map(criteria => ({
    ...criteria,
    values: frameworks.map(framework => framework[criteria.key])
  }))
})
</script>

<template>
  <div class="framework-comparison">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th v-for="framework in frameworks" :key="framework.name">
            {{ framework.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in comparison" :key="row.name">
          <td>{{ row.name }}</td>
          <td v-for="(value, index) in row.values" :key="index">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.framework-comparison {
  margin: 2rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  text-align: left;
}

th {
  background-color: var(--vp-c-bg-soft);
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: var(--vp-c-bg-soft);
}
</style>