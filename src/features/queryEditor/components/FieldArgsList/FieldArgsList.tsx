import classNames from 'classnames';
import { GraphQLArgument } from 'graphql';
import RewrappedType from '../RewrappedType/RewrappedType';

type FieldArgsListProps = {
  args: GraphQLArgument[];
};

const FieldArgsList = ({ args }: FieldArgsListProps) => {
  const argsCount = args.length;
  return (
    <>
      {argsCount > 0 && <span>(</span>}
      {args.map((arg, index) => {
        const type = arg.type.toString();
        return (
          <span
            className={classNames({ 'mx-5 block': argsCount > 1 })}
            key={`${arg.name}-${index}`}
          >
            <span className="text-red-600">{arg.name}:</span>
            <RewrappedType wrappedRawType={type} />
          </span>
        );
      })}
      {argsCount > 0 && <span>)</span>}
    </>
  );
};

export default FieldArgsList;
