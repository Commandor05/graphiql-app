import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '../../../../redux/hooks';
import { addedPathFragment } from '../../../../redux/features/docs/docsSlice';

const RootDocFragment = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="ml-2">
      <h2 className="text-xl font-bold">Docs</h2>
      <p className="text-base">A GraphQL schema provides a root type for each kind of operation.</p>
      <div className="my-2 flex">
        <div className="">
          <EllipsisHorizontalCircleIcon height={24} width={24} />
        </div>
        <div>
          <span className="ml-2 text-xs">Root Types</span>
        </div>
      </div>
      <p className="ml-2 text-purple-600">
        query:
        <a
          href="#"
          onClick={() => dispatch(addedPathFragment('Query'))}
          className="ml-2 text-green-800"
        >
          Query
        </a>
      </p>
    </div>
  );
};

export default RootDocFragment;
