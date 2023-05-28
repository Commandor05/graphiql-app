import { addedPathFragment } from '../../../../redux/features/docs/docsSlice';
import { useAppDispatch } from '../../../../redux/hooks';

type RewrappedTypeProps = {
  wrappedRawType: string;
};

const RewrappedType = ({ wrappedRawType }: RewrappedTypeProps) => {
  const dispatch = useAppDispatch();
  const type = wrappedRawType.replace(/[\[\]!]/g, '');
  const typeWrapped = wrappedRawType.replace(
    `${type}`,
    `<span class="text-green-800">${type}</span>`
  );

  return (
    <>
      <a
        href="#"
        onClick={() => dispatch(addedPathFragment(type))}
        className="ml-1"
        dangerouslySetInnerHTML={{ __html: typeWrapped }}
      />
    </>
  );
};

export default RewrappedType;
