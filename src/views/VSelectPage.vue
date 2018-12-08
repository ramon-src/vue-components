<template>
  <v-select v-model="value" :options="options"></v-select>
</template>

<script>
import VSelect from "@/components/VSelect";

export default {
  components: {
    VSelect
  },
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: "Option3"
    };
  }
};
</script>
