import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { Contributor } from '@/app/models/Contributor';
import { GithubGetters, GithubActions } from '@/app/store/github';

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
