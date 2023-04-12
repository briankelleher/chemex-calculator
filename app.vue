<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="mb-3">Chemex Calculator</h1>
          <Calculator />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { $startWakeLock } = useNuxtApp()

$startWakeLock()
</script>
