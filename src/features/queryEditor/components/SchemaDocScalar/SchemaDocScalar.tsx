import { GraphQLScalarType } from 'graphql/type';

type SchemaDocScalarProps = {
  type: GraphQLScalarType;
};

const SchemaDocScalar = ({ type }: SchemaDocScalarProps) => {
  return <p className="mb-4 mr-2 mt-2">{type.description}</p>;
};

export default SchemaDocScalar;
