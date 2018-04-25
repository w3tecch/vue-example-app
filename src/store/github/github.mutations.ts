import { Contributor } from '@/models/Contributor';
import Vue from 'vue';
import { MutationTree } from 'vuex';

import * as mutationTypes from './github.mutations.types';
import { GithubState } from './github.state';

export const mutations: MutationTree<GithubState> = {
  [mutationTypes.GET_CONTRIBUTORS_REQUESTED](state: GithubState): void {
    state.isFetching = true;
    state.error = undefined;
  },

  [mutationTypes.GET_CONTRIBUTORS_SUCCESS](state: GithubState, contributors: Contributor[]): void {
    state.contributors = contributors;
    state.isFetching = false;
    state.error = undefined;
  },

  [mutationTypes.GET_CONTRIBUTORS_FAILED](state: GithubState, error: any): void {
    state.isFetching = false;
    state.error = error;
  },

};
