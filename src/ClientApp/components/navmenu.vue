<template>
    <div class="main-nav">
        <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Locus Portal</a>
            </div>
            <div class="clearfix"></div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/" :exact="true">
                            <span class="glyphicon glyphicon-home"></span> Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/counter">
                            <span class="glyphicon glyphicon-education"></span> Counter
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/fetchdata">
                            <span class="glyphicon glyphicon-th-list"></span> Fetch data
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
/* Keep the nav menu independent of scrolling and on top of other items */
.main-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    li a.router-link-active {
        &:hover, &:focus {
            background-color: #4189C7;
            color: black;
        }
    }
    li .glyphicon {
        margin-right: 10px;
    }
}

@media (min-width: 768px) {
    /* On small screens, convert the nav menu to a vertical sidebar */
    .main-nav {
        height: 100%;
        width: calc(25% - 20px);
        .navbar {
            border-radius: 0px;
            border-width: 0px;
            height: 100%;
            ul {
                float: none;
            }
            li {
                float: none;
                font-size: 15px;
                margin: 6px;
                a {
                    padding: 10px 16px;
                    border-radius: 4px;
                }
            }
            a {
                /* If a menu item's text is too long, truncate it */
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .navbar-header {
            float: none;
        }
        .navbar-collapse {
            border-top: 1px solid #444;
            padding: 0px;
        }
    }
}
</style>