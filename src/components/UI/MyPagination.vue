<template>
    <div class="pagination">
        <span 
            class="pagination__page"
            v-for="pageNumber in totalPage" 
            :key="pageNumber"
            :class="{'pagination__page_current': page === pageNumber}"
            @click="$emit('changePage', pageNumber)"
        >
            {{ pageNumber }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "my-pagination",
        props: {
            totalPage: {
                type: Number,
                required: true,
                default: 1,
            },
            page: {
                type: Number,
                required: true,
            }
        }
    }
</script>

<style lang="css" scoped>
    .pagination {
        padding-top: 20px;
        padding-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
    .pagination__page {
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        color: #e4e4e7;
        border: 1px solid #262626;
        border-radius: 10px;
        padding: 14px 20px;
        background: #0f0f0f;
        cursor: pointer;
    }
    .pagination__page_current {
        background: #ff3333;
    }
    .pagination__page:hover {
        background-color: #1A1A1A;
    }
</style>
