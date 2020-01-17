<template>
    <div class="navbar flex-row">
        <div class="nav-item" v-for="(item, index) in navbarData" :key="item.id">
            <a href="#">
                <div>
                    <img class="navbar-icon" :src="item.src" />
                    <p class="navbar-text" :style="{color: item.color}">{{item.text}}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navbarData: [
                {
                    id: 1,
                    src: '',
                    color: '#fff',
                    text: 'madongdong'
                },
                {
                    id: 2,
                    src: '',
                    color: '#fff',
                    text: 'madongdong'
                },
                {
                    id: 3,
                    src: '',
                    color: '#fff',
                    text: 'madongdong'
                },
                {
                    id: 4,
                    src: '',
                    color: '#fff',
                    text: 'madongdong'
                }
            ],
        }
    }
}
</script>
<style lang="scss" scope>
    .navbar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        color: #555;
        z-index: 2000;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        background: #000;
        justify-content: space-around;
        a {
            display: inline-block;
            height: 58px;
            width: 100%;
            &>div {
                width: 100%;
                padding-top: 4px;
            }
        }
        .navbar-icon {
            width: 32px;
            height: 32px;
            display: block;
            margin: 0 auto;
        }
        .navbar-text {
            width: 60px;
            font-size: 12px;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }

</style>