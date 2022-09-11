<template>
    <div class="nav">
        <ul id="category-toggle-list" v-for="(categ,idx) in categories " :key="idx">
            <li @click="activate(idx)" class="project-category" :class="{ active : active_idx == idx }">
                <a href="#">{{categ}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            categories: ["Home", "Projects", "About", "Contact"],
            active_idx: 0
        }

    },
    methods: {
        activate(i) {
            this.active_idx = i
        }
    }
}
</script>

<style>
.nav {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;

}

#category-toggle-list {
    
    padding: 0;
    margin: 0;
    max-width: 1000px;
}

#category-toggle-list li {
    
    width: 95%;
    list-style: none;
    color: rgb(255, 255, 255);
    font-family: sans-serif;
    text-transform: uppercase;
    margin-right: 30px;
    padding: 0 5px;
    position: relative;
    margin-bottom: 10px;
    opacity: 0.3;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 13px;
    line-height: 1.3em;
    transition: all ease 0.2s;
}

#category-toggle-list li:hover {
    opacity: 0.6;
}

#category-toggle-list a {
    text-decoration: none;
    color: rgb(255, 255, 255);
}

#category-toggle-list li a:after {
    content: " ";
    background: rgb(148, 3, 3);
    width: 0%;
    height: 2px;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: all ease 0.4s;
}

#category-toggle-list li:hover a:after {
    width: 100%;
    width: 30%;
}

#category-toggle-list li.active {
    opacity: 1;
}

#category-toggle-list li.active a:after {
    content: " ";
    background: rgb(255, 255, 255);
    width: 100%;
    height: 2px;
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>