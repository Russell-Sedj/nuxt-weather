<template>
  <div>
    <div class="search">
      <span>What's Your Emplacement?</span>
      <input
        @keyup.enter="search_weather"
        type="text"
        v-model="user_search"
        placeholder="Ex: London"
      />
    </div>
    <div class="weather">
      <div v-if="data">
        <h1>{{ data.data.location.name }}</h1>
        <h2>{{ data.data.current.temp_c }}°C</h2>
        <img :src="data.data.current.condition.icon" alt="" />
        <h3>{{ data.data.current.condition.text }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
// const { data } = await useFetch(
//   "http://api.weatherapi.com/v1/current.json?key=37f88c1cda664029938121901231707&q=London&aqi=no");
// console.log(data.value.location.name);

const user_search = ref("");
const data = ref(null);

// the functions
const search_weather = async () => {
  data.value = await useFetch(
    "http://api.weatherapi.com/v1/current.json?key=37f88c1cda664029938121901231707&q=" +
      user_search.value +
      "&aqi=no"
  );

  // attention il faut ajouter data a la fin du data. ca m'a pris des heures pour capter ca
  // le const {data} en haut prenaut deja que le data en fait mais j'avaias pas capté :(
  console.log(data.value.data.location.name);
};
</script>

<style>
* {
  color: rgb(46, 46, 46);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.search * {
  margin: 20px;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(46, 46, 46);
  padding: 5px;
}
.weather {
  display: flex;
  justify-content: center;
  align-items: center;
}
.weather div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(46, 46, 46);
  border-radius: 5px;
  padding: 20px;
}
.weather div img {
  width: 100px;
  height: 100px;
}
</style>
