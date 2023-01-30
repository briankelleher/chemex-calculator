<template>
    <div class="chemex-calculator">
        <div class="d-flex justify-space-between fill-height mb-5 flex-row flex-gap flex-wrap">
            <v-btn v-for="preselect in preselections" :key="preselect" color="primary" class="flex-grow-1 text-lowercase" variant="outlined" @click="select_ounces(preselect)">
                {{ preselect }} oz
            </v-btn>
        </div>
        <v-text-field label="Fluid Ounces" variant="outlined" v-model="ounces" type="number"></v-text-field>
        <v-table>
            <tbody>
                <tr>
                    <td><strong>Dose</strong></td>
                    <td>{{ dose }}</td>
                </tr>
                <tr>
                    <td><strong>Total Pour</strong></td>
                    <td>{{ total_pour }} g</td>
                </tr>
                <tr>
                    <td><strong>Bloom</strong></td>
                    <td>{{ bloom }} g</td>
                </tr>
                <tr>
                    <td><strong>First Pour</strong></td>
                    <td>{{ first_pour }} g</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ounces: 0,
            preselections: [8, 16, 32, 64]
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
    },
    methods: {
        select_ounces( num ) {
            this.ounces = num
        }
    }
}
</script>

<style scoped>
.flex-gap {
    column-gap: 10px;
    row-gap: 10px;
}
</style>