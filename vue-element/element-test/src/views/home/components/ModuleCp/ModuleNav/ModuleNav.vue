/*
 * @Author: liushuai 
 * @Date: 2019-11-21 14:36:23 
 * @Last Modified by: liushuai
 * @Last Modified time: 2019-11-21 17:35:12
 */
<template>
    <div class="nav-wrap">
        <ul class="nav-icon-list flex-row">
            <li 
                class="flex-grow-0 nav-icon"
                v-for="(item, index) in navData"
                :key="index+item.title"
            >
                <a class="nav-item" :href="item.link">
                    <img class="nav-img" :src="item.img">
                    <p class="nav-title">{{item.title}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
const defaultImg = require('@/assets/images/default_nav.png');
export default {
    data(){
        return {
            navData: [
                {
                    img: defaultImg,
                    title: 'madongdong',
                    link: '#'
                },
                {
                    img: defaultImg,
                    title: 'madongdong',
                    link: '#'
                },
                {
                    img: defaultImg,
                    title: 'madongdong',
                    link: '#'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scope>
    .nav-wrap{
        ul.nav-icon-list{
            background: #fff;
            flex-wrap: wrap;
            border-top: 1px solid #e3e3e3;
            li.nav-icon {
                text-align: center;
                width: 25%;
                font-size: 12px;
                a.nav-item{
                    display: block;
                    padding: 12px 0;
                }
                .nav-img{
                    width: 40px;
                    height: 40px;
                    margin-bottom: 4px;
                }
                .nav-title{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 9pt;
                }
            }
        }
    }
</style>