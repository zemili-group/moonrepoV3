<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { ModeWatcher } from "mode-watcher";
  import View from "@/views/View.svelte";
  import Home from "@/views/Home.svelte";
  import Login from "@/views/Login.svelte";
  import { App } from "konsta/svelte";

  let theme: "material" | "ios" = "ios";
</script>

<ModeWatcher track />

<Router>
  <App {theme} safeAreas>
      <Route path="/">
        <Login {theme} on:theme={({ detail }) => (theme = detail)} />
    </Route>

    <Route path="/view">
      <View />
    </Route>
  </App>
</Router>
