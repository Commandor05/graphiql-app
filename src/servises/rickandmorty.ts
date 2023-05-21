import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';
import { request, gql, ClientError } from 'graphql-request';

export const BASE_URL = 'https://rickandmortyapi.com/graphql';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

export const rickAndMortyApi = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getQueryByGraphQL: builder.query({
      query: (query: string) => ({
        body: gql`
          ${query}
        `,
      }),
      //   transformResponse: (response: GraphQLResponse) => response.data,
    }),
  }),
});
