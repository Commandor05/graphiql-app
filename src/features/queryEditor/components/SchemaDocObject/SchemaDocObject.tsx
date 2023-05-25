import { GraphQLObjectType } from 'graphql/type';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import FieldArgsList from '../FieldArgsList/FieldArgsList';
import RewrappedType from '../RewrappedType/RewrappedType';

type SchemaDocObjectProps = {
  type: GraphQLObjectType;
};

const SchemaDocObject = ({ type }: SchemaDocObjectProps) => {
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
              <p>
                <span className="text-purple-600">{value.name}</span>
                <FieldArgsList args={[...value.args]} />
                <span>:</span>
                <RewrappedType wrappedRawType={value.type.toString()} />
              </p>
              <p className="mb-4 mt-2">{value.description}</p>
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
};

export default SchemaDocObject;
