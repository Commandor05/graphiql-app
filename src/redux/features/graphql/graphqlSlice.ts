import { createApi } from '@reduxjs/toolkit/query/react';
import { request, gql, ClientError } from 'graphql-request';
import { apiConfig } from '../../../configs/apiConfig';

import { GraphQLSchema } from 'graphql';

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

export const graphqlSlice = createApi({
  reducerPath: 'graphql',
  baseQuery: graphqlBaseQuery({
    baseUrl: apiConfig.baseUrl,
  }),
  endpoints(builder) {
    return {
      fetchShema: builder.query<GraphQLSchema, string | void>({
        query() {
          return {
            body: gql`
              ${apiConfig.IntrospectionQuery}
            `,
          };
        },
      }),
    };
  },
});

export const { useFetchShemaQuery } = graphqlSlice;
