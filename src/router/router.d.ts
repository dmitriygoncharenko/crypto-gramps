import 'vue-router';

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    isLayout: boolean;
    index: number;
  }
}