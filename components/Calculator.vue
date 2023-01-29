<template>
    <div class="chemex-calculator">
        Fluid Ounces: <input type="number" v-model="ounces"> oz
        <p>Dose: {{ dose }}</p>
        <p>Total Pour: {{ total_pour }} g</p>
        <p>Bloom: {{ bloom }} g</p>
        <p>First Pour: {{ first_pour }} g</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ounces: 0
        }
    },
    computed: {
        dose() {
            return this.ounces * 2
        },
        total_pour() {
            return this.dose * 15
        },
        bloom() {
            return this.dose * 2
        },
        first_pour() {
            return this.total_pour * 0.6
        }
    }
}
</script>