import { Contributor } from './../../models/Contributor';
import { ActionContext, ActionTree } from 'vuex';

import * as githubApi from '@/services/api/github.api';
import * as mutationTypes from './github.mutations.types';
import { GithubState } from './github.state';

// -------------------------------------------------------------------------
// Define Types & Interfaces
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Define Action Types
// -------------------------------------------------------------------------

export const actionTypes = {
  GET_CONTRIBUTORS: 'GET_CONTRIBUTORS',
};

// -------------------------------------------------------------------------
// Define Action Object
// -------------------------------------------------------------------------

export const actions: ActionTree<GithubState, GithubState> = {
  [actionTypes.GET_CONTRIBUTORS]({ commit, state }: ActionContext<GithubState, GithubState>): void {
    commit(mutationTypes.GET_CONTRIBUTORS_REQUESTED);
    githubApi.getContributors()
      .then((contributors: Contributor[]) => commit(mutationTypes.GET_CONTRIBUTORS_SUCCESS, contributors))
      .catch((err: any) => commit(mutationTypes.GET_CONTRIBUTORS_FAILED, err));
  },
};
