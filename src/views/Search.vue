<template>
    <div class="search_page">
        <div class="wrap_container">
            <h2>尋找浪浪</h2>
            <Filter @confirm="getCity"></Filter>
            <section class="content">
                <Card v-for="pet in pets" :key="pet.animal_id" :pet="pet"></Card>
            </section>
            <nav aria-label="Page navigation ">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="##">第一頁</a></li>
                    <li class="page-item"><a class="page-link active" href="##">1</a></li>
                    <li class="page-item"><a class="page-link" href="##">2</a></li>
                    <li class="page-item"><a class="page-link" href="##">3</a></li>
                    <li class="page-item"><a class="page-link" href="##">最後一頁</a></li>
                </ul>
            </nav>
        </div>
    </div>

    <footer>
        <p>@2021GoodIdeas.All rights reserved</p>
    </footer>
</template>

<script>
import Card from '@/components/Card';
import Api from '@/services/Api';
import Filter from '@/components/Filter';
export default {
    name: 'Search',
    components: {
        Card,
        Filter,
    },
    data() {
        return {
            pets: null,
            cities: [],
        };
    },
    created() {
        Api.getPets()
            .then((response) => {
                this.pets = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        getCity(city) {
            console.log('parent', city);
        },
    },
};
</script>

<style lang="scss" scope>
.search_page {
    background: color.$primary;
}

.wrap_container {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0px 100px 60px 100px;
}

h2 {
    color: color.$text_dark;
    margin-bottom: 26px;
    font-size: 50px;
}

.wrap_container {
    .pagination {
        justify-content: center;
        font-size: 18px;
        a {
            color: #e5e5e5;
            border: 0;
            background: none;
            &:focus {
                box-shadow: none;
            }
            &:hover {
                color: color.$text_dark;
            }
        }
    }
}
.content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
}

footer {
    p {
        color: color.$secondary;
        padding: 20px 0;
        text-align: center;
        font-weight: 900;
    }
    background: #fff;
}
</style>
