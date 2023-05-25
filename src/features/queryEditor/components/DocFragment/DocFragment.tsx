import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { removedPathFragment } from '../../../../redux/features/docs/docsSlice';
import { useFetchShemaQuery } from '../../../../redux/features/graphql/graphqlSlice';
import { useEffect, useState } from 'react';
import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  IntrospectionQuery,
  buildClientSchema,
} from 'graphql';
import SchemaDocObject from '../SchemaDocObject/SchemaDocObject';
import SchemaDocScalar from '../SchemaDocScalar/SchemaDocScalar';
import SchemaInputObjectType from '../SchemaInputObjectType/SchemaInputObjectType';
import Spinner from '../spinner/Spinner';

const DocFragment = () => {
  const { data, isLoading } = useFetchShemaQuery();
  const [content, setContent] = useState<JSX.Element | null>(null);
  const dispatch = useAppDispatch();
  const { docsPath } = useAppSelector((state) => state.docs);

  useEffect(() => {
    const generateDocFragmentContent = (schema: GraphQLSchema, pathFragment: string) => {
      const fragmentShemaType = schema.getType(pathFragment);
      const graphqlFragmentType = fragmentShemaType?.[Symbol.toStringTag];
      if (graphqlFragmentType === 'GraphQLObjectType') {
        return <SchemaDocObject type={fragmentShemaType as GraphQLObjectType} />;
      } else if (graphqlFragmentType === 'GraphQLInputObjectType') {
        return <SchemaInputObjectType type={fragmentShemaType as GraphQLInputObjectType} />;
      }

      return <SchemaDocScalar type={fragmentShemaType as GraphQLScalarType} />;
    };

    if (data) {
      setContent(
        generateDocFragmentContent(
          buildClientSchema(data as unknown as IntrospectionQuery),
          docsPath[docsPath.length - 1]
        )
      );
    }
  }, [data, dispatch, docsPath]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="ml-2">
      <a
        href="#"
        onClick={() => dispatch(removedPathFragment())}
        className="mb-2 flex items-center"
      >
        <div>
          <ChevronLeftIcon height={14} width={14} />
        </div>
        <div>
          <span className="text-base text-neutral-500 hover:underline">
            {docsPath[docsPath.length - 2]}
          </span>
        </div>
      </a>
      <h2 className="text-xl font-bold">{docsPath[docsPath.length - 1]}</h2>
      {content}
    </div>
  );
};

export default DocFragment;
