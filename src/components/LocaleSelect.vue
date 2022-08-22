<script setup>
  import { allLocales, setLocale } from "../i18n";
</script>

<template>
  <label for="locale">Locale: </label>
  <select
      :value="$i18n.locale"
      @change="setLocale($event.target.value)"
      id="locale"
  >
    <option v-for="locale in allLocales" :value="locale">{{ locale }}</option>
  </select>
</template>

<style scoped>
  label, select {
    width: 100%;
  }
  select {
    height: 25px;
  }
</style>