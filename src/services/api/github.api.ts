import Vue from 'vue';

import { plainToClass } from 'class-transformer';

import { Contributor } from '@/models/Contributor';

/**
 * @name getContributors
 * @description Gets all the contributors of this repository.
 * @returns List of contributors.
 */
export async function getContributors(): Promise<Contributor[]> {
  const response = await Vue.$http.get('/repos/w3tecch/vue-example-app/contributors', {
    baseURL: 'https://api.github.com',
  });
  return plainToClass<Contributor, Contributor[]>(Contributor, response.data);
}
