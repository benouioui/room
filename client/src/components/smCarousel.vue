<template>
    <div class="relative" style="margin: 0;">
        <img :src="smDisplayImage"/>
    </div>
</template>

<script>
export default {
    data () {
        return {
            smPhotos: [            
                {url: "https://nsa40.casimages.com/img/2020/11/01/201101100904861470.jpg"},
                {url: "https://nsa40.casimages.com/img/2020/11/01/201101100905117222.jpg"},
                {url: "https://nsa40.casimages.com/img/2020/11/01/201101100904752471.jpg"}
            ],
            smDisplayImage: ''
        }
    },
    computed: {
        smImage: {
            get () {
                return smPhotos[0].url
            },
            set (value) {
                this.smDisplayImage = value
            }
        }
    },
    methods: {
        smSetImage () {
            this.smDisplayImage = this.smPhotos[0].url
        },
        showImage (url) {
            this.smImage = url
        },
        smMinusIndex () {
            let pht = this.smPhotos.filter(photo => photo.url == this.smDisplayImage)[0]
            let index = this.smPhotos.indexOf(pht)
            let length = this.smPhotos.length-1
            if (index === 0) {
                this.smImage = this.smPhotos[length].url
            } else {
                this.smImage = this.smPhotos[index-1].url
            }
        },
        smPlusIndex () {
            
            let pht = this.smPhotos.filter(photo => photo.url === this.smDisplayImage)
            let index = this.smPhotos.indexOf(pht[0])
            let length = this.smPhotos.length-1
            if (index === length) {
                this.smImage = this.smPhotos[0].url
            } else {
                this.smImage = this.smPhotos[index+1].url
            }
        }
    },
    mounted () {
        this.smSetImage()
    }
}
</script>