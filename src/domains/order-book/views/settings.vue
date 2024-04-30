<template>
  <div class="view__settings">
    <v-card
      title="Currency pair"
    >
      <template v-slot:text>
        <v-select
          label="Choose currency pair"
          :items="currencyList"
          v-model="currency"
        />

        <h3  style="margin-top: 20px">Currency change log</h3>
        <v-data-table :headers="currencyLogHeaders" :items="currencyLogList">
          <template #item.index="{ index }">
            {{ index + 1 }}
          </template>
          <template #item.date="{ item }">
            {{ new Date(item.date).toLocaleString() }}
          </template>
        </v-data-table>
      </template>

    </v-card>
  </div>
</template>
<script setup lang="ts">
import {useOrderBookStore} from "@/domains/order-book/store/order-book";
import {storeToRefs} from "pinia";

const orderBookStore = useOrderBookStore()
const {currency, currencyList, currencyLogList} = storeToRefs((orderBookStore))

const currencyLogHeaders: any[] = [
  { title: '#', value: 'index', align: 'center' },
  { title: 'Date&Time', value: 'date', align: 'start' },
  { title: 'New Value', value: 'value', align: 'end' },
]

</script>
<route lang="yaml">
meta:
  title: 'Settings'
  index: 100
</route>
