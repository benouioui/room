<template>
  <div class="grid lg:grid-cols-5 lg:grid-cols-1">    
    <navbar class="absolute" style="z-index: 1"/>
    <div class="lg:col-span-3 sm:col-span-1">
      <img id="lgImg" :src="displayImage" class="w-full" style="position: relative; z-index:-1;"/>
      <div  id="smImg" class="hidden relative">
        <smCarousel class="w-full relative" style="z-index: -1"/>
        <div class="absolute flex" style="bottom: 0; right: 0; z-index: 10;">    
            <div @click="smMinusIndex" class="bg-black py-4 px-6">
              <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
            </div>
            <div @click="smPlusIndex" class="bg-black py-4 px-6">
              <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
            </div>
          </div>
      </div>
    </div>
    <div id="text" class="lg:col-span-2 sm:col-span-1 px-24 flex flex-col items-center justify-center relative w-full">
      <h1 id="title1" class="font-semibold mb-8 title">Discover innovative ways to decorate</h1>
      <p id="subText" class="mb-8 subtext">We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflexion of you and what you love.</p>
      <div class="flex self-start items-center">
        <p id="shop" class="text-left self-start text-sm mr-10" style="letter-spacing: 0.9em; font-weight: 500px;"> SHOP NOW </p>
        <img id="arrow" src="..\assets\images\icon-arrow.svg" alt="">
      </div>
      <div id="lgChev" class="absolute flex" style="bottom: 0; left: 0;">
        <div @click="minusIndex" id="chvL" class="bg-black chv" style="padding-top: 100%; padding-bottom: 100%;">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <div @click="plusIndex" id="chvR" class="bg-black chv" style="padding-top: 100%; padding-bottom: 100%;">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import navbar from './navbar'
import smCarousel from './smCarousel'

export default {
  components: {
    navbar,
    smCarousel
  },
    data () {
        return {
            photos: [            
                {url: "https://nsa40.casimages.com/img/2020/11/01/201101100351975513.jpg"},
                {url: "https://nsa40.casimages.com/img/2020/11/01/201101100352230172.jpg"},
                {url: "https://nsa40.casimages.com/img/2020/11/01/201101100351833560.jpg"}
            ],
            displayImage: ''
        }
    },
    computed: {
        image: {
            get () {
                return photos[0].url
            },
            set (value) {
                this.displayImage = value
            }
        }
    },
    methods: {
        setImage () {
            this.displayImage = this.photos[0].url
        },
        showImage (url) {
            this.image = url
        },
        minusIndex () {
          console.log(this.displayImage)
            let pht = this.photos.filter(photo => photo.url === this.displayImage)
            let index = this.photos.indexOf(pht[0])
            let length = this.photos.length-1
            if (index === 0) {
                this.image = this.photos[length].url
            } else {
                this.image = this.photos[index-1].url
            }
        },
        plusIndex () {
            
            let pht = this.photos.filter(photo => photo.url === this.displayImage)
            let index = this.photos.indexOf(pht[0])
            let length = this.photos.length-1
            if (index === length) {
                this.image = this.photos[0].url
            } else {
                this.image = this.photos[index+1].url
            }
        },
        smMinusIndex () {
          this.$children[1].smMinusIndex()
        },
        smPlusIndex () {
          this.$children[1].smPlusIndex()
        }
    },
    mounted () {
        this.setImage()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
  line-height: 110%; 
  font-size: 2.2em
}

.subtext{
  color: hsl(0, 0%, 63%);
  font-size: 0.85em
}

.chv{
  padding-right: 130%; padding-left:130%;
}

@media (max-width: 400px) {
  #lgImg {
    display: none
  }

  #smImg {
    display: block;
  }

  #lgChev {
    display: none
  }

  #text {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 90px;
    padding-right: 30px;
    padding-left: 30px;
  }

  #title1 {
    font-size: 1.8em;
  }

  #subText {
    font-size: 0.73em;    
    line-height: 180%;
  }

  #shop {
    font-size: 0.55em;
    font-weight: 500;
    margin-right: 30px;
  }

  #arrow {    
    margin-bottom: 90px;
  }
}

@media (max-width: 1460px){
  #chvL, #chvR{
    padding-right: 122%; padding-left:122%;
  }  
}
</style>
