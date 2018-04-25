import { actions, actionTypes } from './github.actions';
import { getters, getterTypes } from './github.getters';
import { mutations } from './github.mutations';
import { initialState } from './github.state';

// -------------------------------------------------------------------------
// Export Types & Interfaces
// -------------------------------------------------------------------------

export * from './github.state';

// -------------------------------------------------------------------------
// Define Namespace, Actions & Getters
// -------------------------------------------------------------------------

export const GithubNamespace = 'github';

export const GithubActions = {
  GetContributors: `${GithubNamespace}/${actionTypes.GET_CONTRIBUTORS}`,
};

export const GithubGetters = {
  Contributors: `${GithubNamespace}/${getterTypes.CONTRIBUTORS}`,
};

// -------------------------------------------------------------------------
// Export Store
// -------------------------------------------------------------------------

export const github = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
