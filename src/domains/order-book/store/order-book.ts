// stores/binanceStream.js
import { defineStore } from 'pinia';
import {useStorage} from "@vueuse/core";
import {CurrencyLog} from "@/domains/order-book/types/currency-log.interface";
import {binance} from "@/api";
import {DepthDataInterface} from "@/domains/order-book/types/depth-data.interface";
import {CurrencyEnum} from "@/api/currency.enum";

export const useOrderBookStore = defineStore('binanceStream',  () => {
  const currency = useStorage('currency', Object.keys(CurrencyEnum)[0] as string)
  const currencyList = reactive(Object.keys(CurrencyEnum))
  const currencyLogList = useStorage('currencyLog', [] as CurrencyLog[])


  const updateStreamData = (data: any) => {
    streamData.value = data
  }

  const bids = ref<DepthDataInterface[]>([])
  const asks = ref<DepthDataInterface[]>([])
  const convertDepthData = (data: string[][]): DepthDataInterface[] => {
    return data.map(el => {
      const price = Number(el[0]);
      const quantity = Number(el[1]);
      return {price, quantity, total: price * quantity}
    })
  }
  const getBinanceDepthList = async () => {
    const {data} = await binance.api.v3DepthList({symbol: String(currency.value), limit: 1000})
    bids.value = convertDepthData(data.bids);
    asks.value = convertDepthData(data.asks)
  }

  const streamData = ref(null)

  let ws: WebSocket;
  const isConnected = ref<boolean>(false);
  const startStream = () => {
      stopStream();
      console.log('start stream');
      ws = new WebSocket(`wss://stream.binance.com:9443/ws/${currency.value?.toLowerCase()}@depth`);
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data) as {a: string[][], b: string[][]};
        bids.value.unshift(...convertDepthData(data.b));
        asks.value.unshift(...convertDepthData(data.a));
      };
  };

  const stopStream = () => {
    ws?.close()
  };

  watch(() => currency.value, async (value) => {
    currencyLogList.value.unshift({date: new Date().getTime(), value})

    await getBinanceDepthList();
    startStream();
  })

  getBinanceDepthList();
  startStream();

  return {
    streamData,
    currency,
    currencyList,
    currencyLogList,
    updateStreamData,
    startStream,
    stopStream,
    bids,
    asks,
    isConnected
  }
});
