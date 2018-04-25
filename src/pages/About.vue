<template>
  <div class="about">
    <h1>{{ $t('app.title') }}</h1>

    <h2>Contributors</h2>

    <div class="row justify-content-center">
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <div class="card" v-for="contributor in contributors" v-bind:key="contributor.id">
        <img class="card-img-top" :src="contributor.avatar_url" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ contributor.login }}</h5>
          <a :href="contributor.html_url" class="btn btn-primary">more</a>
        </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { Contributor } from '@/models/Contributor';
import { GithubGetters, GithubActions } from '@/store/github';

@Component
export default class About extends Vue {

  @Getter(GithubGetters.Contributors)
  public contributors: Contributor[];

  @Action(GithubActions.GetContributors)
  public getContributors: () => void;

  public created(): void {
    this.getContributors();
  }
}
</script>
