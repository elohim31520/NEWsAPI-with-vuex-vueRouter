<template lang='pug'>
    .card_wrapper
        .card
            .icon(:style='icon_img')
            .img-wrapper
                .tag 募資中
                .img(:style='bgImg')
            .desc
                h1 {{data.title}}
                .price 預購價
                    span.orange NT${{data.price}} 
                    span 剩
                        span.orange {{remaining_day}}天
                .prgress-bar
                    .now_prgress(:style='progress_now')
                .now_sold 已募資
                    span {{data.numSoldTickets}}人

</template>

<script>

export default {
    props: ['data'],
    computed:{
        bgImg(){
            return {'background-image': `url('${this.data.coverImage.url}')`}    
        },

        icon_img(){
            return {'background-image': `url('${this.data.owner.profileImageUrl}')`}
        },

        progress_now(){
            let successCriteria = this.data.successCriteria.numSoldTickets;
            let nowSold = this.data.numSoldTickets;

            let percentage =  parseInt(nowSold / successCriteria * 100)
            return {
                'width': `${percentage}%`
            }
        },

        remaining_day(){
            let start = this.data.proposalDueTime;
            let end = this.data.incubateTime;

            let remain_day = parseInt((new Date(this.data.proposalDueTime) - new Date(this.data.incubateTime)) / (1000*60*60*24));
            return remain_day - parseInt(Math.random()*25)
        }
    },
}
</script>

<style lang='sass'>
// debug
// .card_wrapper >*
//     border: 1px solid #000


@mixin size($w ,$h:$w)
    width: $w
    height: $h

//顏色定義區(橘/灰/深橘)
$color_orange: #FA8B00
$color_grey: #f3f3f1
$color_dark_orange: #EB5E00
$color_yellow: #FFE18D
$color_dark_yellow: #FFDA71
$color_dark_grey: #4F4C4B

//尺寸定義區 (標題/內文/書籤按鈕/書籤icon/老師icon)
$size_title: 25px
$size_para: 15px
$size_bookbtn: 42px
$size_icon: 22px
$size_teacher: 55px

//尺寸(課程/上下半部/進度條/預購價/底部橘條)
$width_class: 260px
$height_toppart: 160px
$height_bottompart: 184px
$height_progressbar: 10px
$height_pricerow: 22px
$height_bottomorange: 5px

//尺寸(課程框框的padding)
$padding_class: 15px

//預設圖片Url
$url_teacher: "https://hahow.in/images/57ab3d5585b097070042067a"
$url_class: "https://hahow.in/images/574fab4f206cd60900c52a67?width=300"

.card
    width: $width_class
    border-radius: 10px
    margin: 16px
    box-shadow: 0 0 10px rgba(black,0.2)
    border-bottom: 5px solid $color_dark_orange
    position: relative
    transition: 0.5s
    margin-bottom: 5rem
    &:hover
        transform: translateY(-10px)


    .icon
        +size(59px)
        background-size: cover
        border-radius: 50%
        position: absolute
        left: 13px
        transform: translateY(-50%)
        border: 5px solid #eee
        box-shadow: 0 0 1px rgba(black,0.2)
        z-index: 10

    .img-wrapper
        +size(100%,$height_toppart)
        overflow: hidden
        position: relative
        

        .tag
            +size(70%,20px)
            color: #eee
            background-color: $color_dark_orange
            text-align: center
            transform:  translate(80%,80%) rotate(45deg)  
            padding: 5px 0
            position: absolute

        .img
            +size(100%)
            background-size: cover
            background-position: center

    .desc
        padding: 15px
        background-color: #fff
        
        h1
            font-size: $size_title

        .price
            span
                &:first-child
                    margin-right: 2rem
            .orange
                color: $color_orange

        .prgress-bar
            +size(230px,10px)
            border-radius: 5px
            background-color: $color_grey
            box-shadow: 0 0 1px rgba(black,0.3)
            margin: 0.5rem 0
            overflow: hidden

            .now_prgress
                height: 100%
                background-color: $color_dark_orange

        .now_sold
            text-align: center
            span
                color: $color_orange
                margin-left: 1rem
                
</style>
