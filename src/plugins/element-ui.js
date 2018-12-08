import Vue from "vue";
import { Select, Option } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Select);
Vue.use(Option);
