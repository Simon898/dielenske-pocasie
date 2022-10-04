<template>
  <div>
    <v-app>
      <v-content
      align="center">
      <h1>Dielenske pocasie</h1>
      <router-link to="/">
        <v-btn color="blue lighten-2">Home</v-btn>
      </router-link>
      <router-link to="/About">
        <v-btn color="blue lighten-2">About</v-btn>
      </router-link>

      <v-btn
        v-if="isAuthenticated"
        @click="logout"
        >Log out</v-btn
      >
      <v-btn v-else @click="login"
        >Login</v-btn
      >
    </v-content>
    </v-app>
  </div>
</template>
<script setup lang="ts">
import auth from "~/authfile";
const isAuthenticated = await auth.isAuthenticated();

const logout = async () => {
  await auth.logout({
    returnTo: window.location.origin,
  });
};
const login = async () => {
  await auth.loginWithRedirect();
};
</script>
