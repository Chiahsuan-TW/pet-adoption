<template>
    <div class="wrap_container">
        <h2>尋找浪浪</h2>
        <div class="choose">
            <p>動物品種</p>
            <div class="dropdown">
                <a
                    class="btn dropdown-toggle bg-white"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    請選擇
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">犬</a></li>
                    <li><a class="dropdown-item" href="#">貓</a></li>
                    <li><a class="dropdown-item" href="#">鼠</a></li>
                </ul>
            </div>
            <p>收容所</p>
            <div class="dropdown">
                <a
                    class="btn dropdown-toggle bg-white"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    請選擇
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">澎湖</a></li>
                    <li><a class="dropdown-item" href="#">高雄</a></li>
                    <li><a class="dropdown-item" href="#">台南</a></li>
                </ul>
            </div>
        </div>
        <section><p>test</p></section>
        <nav aria-label="Page navigation ">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">第一頁</a></li>
                <li class="page-item"><a class="page-link active" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">最後一頁</a></li>
            </ul>
        </nav>
    </div>
    <footer>
        <p>@2021GoodIdeas.All rights reserved</p>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
// * {
//     outline: 1px solid red;
// }
.wrap_container {
    margin: 0 auto;
    min-width: 1000px;
    margin-top: 36px;
    padding: 0px 100px;
    background: color.$primary;
}

h2 {
    color: color.$text_dark;
    margin-bottom: 26px;
    font-size: 50px;
}
.choose {
    display: flex;
    margin-bottom: 63px;

    p {
        margin-right: 24px;
        font-size: 30px;
        color: color.$text_light;
    }
}
.dropdown {
    &:nth-of-type(1) {
        margin-right: 40px;
    }
    a {
        padding: 9px 16px;
        width: 250px;
        text-align: left;
        color: color.$text_light;
        border: 2px solid color.$secondary;
        &:focus {
            box-shadow: none;
        }

        &:hover {
            color: color.$text_light;
        }
    }
    .dropdown-menu {
        padding: 0;
        a {
            font-size: 18px;
            text-align: center;
            color: color.$text_light;
            &:hover {
                background: color.$secondary;
                color: #fff;
            }
        }
    }
}
.wrap_container {
    .pagination {
        justify-content: center;
        font-size: 18px;
        a {
            color: #e5e5e5;
        }
    }
}

%pagination {
    background: color.$secondary;
    color: #ffff;
}
.pagination li {
    &:first-child a {
        @extend %pagination;
    }
    &:last-child a {
        @extend %pagination;
    }
    .active {
        color: color.$text_dark;
    }
}

footer {
    p {
        color: color.$secondary;
        padding: 20px 0;
        text-align: center;
    }
    background: #fff;
}
</style>
