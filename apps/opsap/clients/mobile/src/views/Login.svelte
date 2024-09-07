<script lang="ts">
  import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem,
    Radio,
    Toggle,
    ListInput,
    Card,
    MenuList
  } from "konsta/svelte";
  import { setMode } from "mode-watcher";
  import { createEventDispatcher, onMount } from "svelte";
  import { Link } from "svelte-routing";
  // import {db} from '../lib/data/index'

  export let theme: "ios" | "material";

  // $effect(() => {
  //   console.log('data db', Object.keys(db))
  // })

  onMount(() => {
    setMode('light')
  })
  const dispatch = createEventDispatcher<{ theme: "ios" | "material" }>();
</script>

<Page>
  <div class="flex flex-col justify-center h-full">
  <List strong inset>
      <MenuList> 
        <ListInput title="Email" placeholder="Email" />
      </MenuList>
      <MenuList> 
        <ListInput title="Password" placeholder="Password" type="password" />
      </MenuList>
    </List>

  <List strong inset>
    <Link to="/view">
      <ListItem title="Navigate" label link />
    </Link>
  </List>
  </div>
</Page>
