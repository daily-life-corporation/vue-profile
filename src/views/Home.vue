<template>
  <div class="home container">
    <img
      alt="Vue logo"
      style="width: -webkit-fill-available;"
      src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/53873334_2266966526657291_6164497054493048832_n.jpg?_nc_cat=110&_nc_ht=scontent.fbkk5-4.fna&oh=173f7b775403f682d731b427e1ee4e73&oe=5D4B8BAC"
    >
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="text-left">

      <dl class="row">
        <dt class="col-sm-3">Description lists</dt>
        <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

        <dt class="col-sm-3">Euismod</dt>
        <dd class="col-sm-9">
          <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
          <p>Donec id elit non mi porta gravida at eget metus.</p>
        </dd>

        <dt class="col-sm-3">Malesuada porta</dt>
        <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

        <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
        <dd
          class="col-sm-9"
        >Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

        <dt class="col-sm-3">Nesting</dt>
        <dd class="col-sm-9">
          <dl class="row">
            <dt class="col-sm-4">Nested definition list</dt>
            <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
          </dl>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
