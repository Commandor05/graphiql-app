export type CustomFetchBaseQueryError = {
  /**
   * * GRAPHQL_PARSING_ERROR
   */
  status: number;
  data: { response: { errors: string[] } };
};

export function isFetchBaseQueryError(error: unknown): error is CustomFetchBaseQueryError {
  return typeof error === 'object' && error != null && 'data' in error;
}
