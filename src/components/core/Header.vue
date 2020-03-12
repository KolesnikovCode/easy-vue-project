<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                <router-link to="/" class="logo">EASY</router-link>
                <nav>
                    <router-link to="/">Главная</router-link>
                    <router-link to="/catalog">Каталог</router-link>
                    <router-link to="/cabinet">Кабинет</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.header {
    background: #000;
    color: #fff;
    user-select: none;
    &-content {
        display: flex;
        justify-content: space-between;
        padding: 18px 0;
    }
    .logo {
        text-decoration: none;
        color: #fff;
        letter-spacing: 3px;
        transition: all .2s ease;
        &:hover {
            letter-spacing: 10px;
        }
    }
    nav {
        display: flex;
        align-items: center;
        a {
            padding: 3px 0;
            text-decoration: none;
            color: #fff;
            letter-spacing: 3px;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: bold;
            transition: all .2s ease;
            &:hover {
                color: #ffd666;
            }
            &:not(:last-child) {
                margin-right: 10px;
            }
        }
        .router-link-exact-active {
            color: #ffbb00;
            pointer-events: none;
            &:hover {
                color: #ffbb00;
            }
        }
    }
}
</style>
