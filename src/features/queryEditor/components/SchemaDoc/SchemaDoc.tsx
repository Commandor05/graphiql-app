import DocFragment from '../DocFragment/DocFragment';
import RootDocFragment from '../RootDocFragment/RootDocFragment';
import { useAppSelector } from '../../../../redux/hooks';

const SchemaDoc = () => {
  const { docsPath } = useAppSelector((state) => state.docs);

  if (docsPath.length > 1) {
    return <DocFragment />;
  } else {
    return <RootDocFragment />;
  }
};

export default SchemaDoc;
