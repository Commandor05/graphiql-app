import { lazy } from 'react';
import QueryEditorLayout from './layouts/QueryEditorLayout';
import QueryEditor from './components/queryEditor/QueryEditor';
import QueryResult from './components/queryResult/QueryResult';

const SchemaDoc = lazy(() => import('./components/SchemaDoc/SchemaDoc'));

export { QueryEditorLayout, SchemaDoc, QueryEditor, QueryResult };
