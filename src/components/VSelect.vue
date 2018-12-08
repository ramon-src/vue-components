<template>
  <el-select v-model="fieldValue" v-bind="$attrs" v-on="$listeners">
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option[customKey]"
      :value="option[customValueKey]"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    customKey: {
      type: String,
      default: "value"
    },
    customValueKey: {
      type: String,
      default: "label"
    },
    value: {}
  },
  data() {
    return {
      fieldValue: null
    };
  },
  watch: {
    value(newValue) {
      this.fieldValue = newValue;
    },
    fieldValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
