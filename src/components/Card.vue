<template>
    <div class="pet_card">
        <div class="wrap_img">
            <img src="./../assets/images/dog-brown.jpg" alt="" />
        </div>
        <div class="introduce">
            <p>{{ type }}</p>
            <p>{{ color }}</p>
            <p>{{ gender }}</p>
        </div>
        <div class="address">
            <img src="./../assets/images/map.png" alt="" />
            <span>{{ address }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    data() {
        return {
            type: '貓',
            color: '灰白色',
            gender: '男生',
            address: '澎湖縣流浪動物收容中心',
        };
    },
};
</script>
<style lang="scss" scoped>
.pet_card {
    padding: 16px;
    width: 400px;
    height: 426px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: color.$text_dark;
    margin-bottom: 20px;
}
.wrap_img {
    width: 368px;
    height: 301px;
    background: color.$primary;
    text-align: center;
    margin-bottom: 24px;
    margin-right: 36px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.introduce {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}
.address img {
    margin-right: 16px;
}
</style>
