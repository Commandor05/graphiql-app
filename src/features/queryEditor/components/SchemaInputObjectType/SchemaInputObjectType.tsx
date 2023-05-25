import { GraphQLInputObjectType } from 'graphql/type';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import RewrappedType from '../RewrappedType/RewrappedType';

type SchemaInputObjectTypeProps = {
  type: GraphQLInputObjectType;
};

const SchemaInputObjectType = ({ type }: SchemaInputObjectTypeProps) => {
  const fields = type.getFields();
  if (fields) {
    return (
      <>
        <div className="my-2 flex">
          <div className="">
            <DocumentPlusIcon height={24} width={24} />
          </div>
          <div>
            <span className="ml-2 text-xs">Fields</span>
          </div>
        </div>

        {Object.entries(fields).map(([key, value]) => {
          return (
            <div key={`${key}-${value.name}`}>
              <p className="my-2">
                <span className="text-purple-600">{value.name}</span>
                <span>:</span>
                <RewrappedType wrappedRawType={value.type.toString()} />
              </p>
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
};

export default SchemaInputObjectType;
