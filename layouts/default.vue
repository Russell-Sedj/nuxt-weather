<template>
  <div>
    <header>
      <NuxtLink to="/">Nuxt Weather</NuxtLink>
      <nav>
        <NuxtLink to="/">Home |</NuxtLink>
        <NuxtLink to="/about"> About</NuxtLink>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
* {
  color: rgb(46, 46, 46);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
header {
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgb(46, 46, 46);
}
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header nav a {
  text-decoration: none;
  color: rgb(46, 46, 46);
}
header nav a:hover {
  color: rgb(46, 46, 46);
  text-decoration: underline;
}
</style>
