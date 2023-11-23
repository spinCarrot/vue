<script>
import { mapState, mapActions } from 'pinia'
import infor from '../stores/count'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(infor, ["gungon", "gginfo"])
    },
    methods: {
        ...mapActions(infor, ["getGungon"])
    }
}
</script>

<template>
    <button type="button" @click="getGungon()">BTN</button>
    <p>{{ this.gginfo }}</p>
</template>

<style scoped lang="scss"></style>