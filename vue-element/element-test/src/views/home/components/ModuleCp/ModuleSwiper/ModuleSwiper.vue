<template>
    <div class="swiper-no-swiping modeule">
        <swiper class="swiper-wrap" :options="swiperOption">
            <swiper-slide>
                <div class="img-item">
                    1
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="img-item">
                    2
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="img-item">
                    3
                </div>
            </swiper-slide>
            <div class="swiper-pagination" id="pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    data() {
        return {
            swiperOption:{
                disableOnInteraction: false,
                pagination: {
                    el: '.swiper-pagination'
                },
                centeredSlides: true,
                loop: true,
                speed: 600,
                // autoplay: {
                //     disableOnInteraction: false, //手动滑动之后不打断播放
                //     delay: 2000
                // },
            },
            bannerData: [
                {
                    title: '000',
                    page_url: '/pages/auth/auth',
                    open_type: 'navigate',
                    sort: '100',
                    pic_url: 'http://newshop.bjhzkq.com/web/uploads/image/store_5/4797f7b44a186034e57cf9943721e3572a9b26f4.png'
                }
            ]
        }
    },  
    components: {
        swiper,
        swiperSlide
    },
}
</script>
<style lang="scss">
    .swiper-wrap{
        width: 100%;
        height: 180px;
        .img-item{
            width: 100%;
            height: 180px;
            background: #999;
        }
    }
</style>