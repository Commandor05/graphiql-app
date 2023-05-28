import { createApi } from '@reduxjs/toolkit/query/react';
import { request, gql, ClientError } from 'graphql-request';
import { Variables, GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types';
import { apiConfig } from '../configs/apiConfig';

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({
    body,
    variables,
    headers,
  }: {
    body: string;
    variables: Variables;
    headers: GraphQLClientRequestHeaders;
  }) => {
    try {
      const result = await request(baseUrl, body, variables, headers);
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
    baseUrl: apiConfig.baseUrl,
  }),
  endpoints: (builder) => ({
    getQueryByGraphQL: builder.query({
      query: ({
        query,
        variables,
        headers,
      }: {
        query: string;
        variables: Variables;
        headers: GraphQLClientRequestHeaders;
      }) => ({
        body: gql`
          ${query}
        `,
        variables: variables,
        headers: headers,
      }),
    }),
  }),
});
