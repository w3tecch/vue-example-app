import { Contributor } from '@/app/models/Contributor';
import { GithubState } from './github.state';

// -------------------------------------------------------------------------
// Define Getter Types
// -------------------------------------------------------------------------

export const getterTypes = {
  CONTRIBUTORS: 'CONTRIBUTORS',
};

// -------------------------------------------------------------------------
// Define Getter Object
// -------------------------------------------------------------------------

export const getters = {
  [getterTypes.CONTRIBUTORS](state: GithubState): Contributor[] {
    return state.contributors;
  },
};
