<template>
  <div class="component__order-book-stream">

        <v-card>
          <v-card-title>
            <div class="square green"/>
            Buy Order
          </v-card-title>
          <v-card-subtitle>
            {{ CurrencyEnum[currency] }}
          </v-card-subtitle>
          <v-data-table
            :headers="streamTableHeaders"
            :items="bids"
            :fixed-header="true"
            :fixed-footer="true"
            density="compact"
          />
        </v-card>
        <v-card>
          <v-card-title>
            <div class="square red"/>
            Sale Order
          </v-card-title>
          <v-card-subtitle>
            {{ CurrencyEnum[currency] }}
          </v-card-subtitle>
          <v-data-table
            :headers="streamTableHeaders"
            :items="asks"
            :fixed-header="true"
            :fixed-footer="true"
            density="compact"
          />
        </v-card>
  </div>
</template>

<script setup lang="ts">
import { useOrderBookStore } from '@/domains/order-book/store/order-book';
import { storeToRefs } from "pinia";
import { CurrencyEnum } from "@/api/currency.enum";
import {useDisplay} from "vuetify";

const display = useDisplay();

const streamTableHeaders = computed(() => {
  if(display.smAndDown.value)
    return [
      { title: 'Price', value: 'price', align: 'left', width: 150 },
      { title: 'Total (PxQ)', value: 'total', align: 'left' },
    ]
  return [
    { title: 'Price', value: 'price', align: 'center', width: 150 },
    { title: 'Quantity', value: 'quantity', align: 'center', width: 150 },
    { title: 'Total (PxQ)', value: 'total', align: 'right' },
  ]
})

const orderBookStore = useOrderBookStore();
const { currency, bids, asks } = storeToRefs(orderBookStore);

</script>
<style lang="scss">
.component__order-book-stream {
  height: calc(100vh - 64px);
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 1fr 1fr;
  .v-card-title{
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .square{
    width: 20px;
    height: 20px;
    border-radius: 6px;
    &.green{
      background-color: rgb(0, 197, 130);
    }
    &.red{
      background-color: rgb(255, 3, 114);
    }
  }
  .v-table__wrapper {
    max-height: calc(50vh - 150px);
    overflow-y: auto;
    @media(max-width: 516px){
      max-height: calc(50vh - 190px);
    }
    @media(max-width: 318px){
      max-height: calc(50vh - 210px);
    }
  }
}
</style>
