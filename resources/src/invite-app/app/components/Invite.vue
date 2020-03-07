<template>
    <div :class="classOpt">
        <div class="invite-card">
            <img v-if="bgImg[`invite${option}`]" class="img-size" :src="bgImg[`invite${option}`]">
            <div class="decor-bg" v-if="isOpt7">
                <img :src="bgImg.decor" class="decor-corner top left"/>
                <img :src="bgImg.decor1" class="decor-corner top right"/>
                <img :src="bgImg.decor1" class="decor-corner bottom left"/>
                <img :src="bgImg.decor" class="decor-corner bottom right"/>
            </div>
            <div class="content-data">
                <div class="content-text">
                    <p class="text-large">Mehata Family</p>
                    <p class="text-normal">Cordially invites you to the</p>
                    <p class="text-normal">Engagement Ceremony</p>
                    <p class="text-normal">Of</p>
                    <p class="text-large">Vishal</p>
                    <p class="text-small">Son of Narendrakumar &amp; Daksha Mehata </p>
                    <p class="text-large"> &amp;</p>
                    <p class="text-large">Meha</p>
                    <p class="text-small">Daughter of Amit &amp; Dimple Damania </p>
                    <p class="text-normal">On 17th May 2020, 6-10pm</p>
                    <p class="text-normal">Do Join us Dinner!!</p>
                </div>
                <flip-countdown deadline="2020-05-17 18:00:00"></flip-countdown>
            </div>
        </div>
        <div class="location-card">
            <div class="decor-bg">
                <img :src="bgImg.decor" class="decor-corner top left"/>
                <img :src="bgImg.decor1" class="decor-corner top right"/>
                <img :src="bgImg.decor1" class="decor-corner bottom left"/>
                <img :src="bgImg.decor" class="decor-corner bottom right"/>
            </div>
            <div class="location-content">
                <h1 class="text-large">Location</h1>
                <p class="text-small">Whispering Palm Club House, Lokhandwala Township</p>
                <p class="text-small">,Akurli Road, Kandivali(East)</p>
                <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.9764105648102!2d72.8711007!3d19.1993232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b715862a3397%3A0x8dea239a3ed1a0f2!2sWhispering%20Palms%20Club%20House!5e0!3m2!1sen!2sin!4v1582557996289!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
</template>
<script>
import FlipCountdown from 'vue2-flip-countdown'
import invite1 from 'commons/asset/img/invite1.png';
import invite2 from 'commons/asset/img/invite2.png';
import invite3 from 'commons/asset/img/invite3.png';
import decor from 'commons/asset/img/decor.png';
import decor1 from 'commons/asset/img/decor1.png';

export default {
    data:function(){
        return {
            option:5,
            bgImg:{
                invite1,
                invite2,
                invite3,
                invite4:'',
                decor,
                decor1,
            }
        }
    },
    computed:{
        classOpt(){
            return `invitation-page option-${this.option}`
        },
        isOpt7(){
            return this.option===7;
        }
    },
    components:{FlipCountdown},
}
</script>
<style lang="scss" scoped>

</style>
