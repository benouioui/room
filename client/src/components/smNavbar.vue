<template>
    <div class="w-full">
        <div class="items-center flex w-full pl-4" v-show="!showLinks">
            <div class="w-1/3">
                <svg @click="showLinks = true" width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
            </div>
            <div class="text-2xl text-white w-1/3 text-center" style="font-weight: 500;">
                room
            </div>
        </div>
        <div class="bg-white flex pt-4 pb-10 w-full" style="box-shadow: 0px 0px 1px 5000px rgba(0,0,0,0.5);" v-show="showLinks">
            <div class="flex justify-center" style="width: 20%;">
                <svg @click="showLinks = false" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
            </div>
            <div class="flex justify-around text-sm font-bold" style="width: 80%;">
                <p>home</p>
                <p>shop</p>
                <p>about</p>
                <p>contact</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            showLinks: false
        }
    }
}
</script>