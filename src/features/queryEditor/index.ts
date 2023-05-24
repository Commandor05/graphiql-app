import { lazy } from 'react';
import QueryEditorLayout from './layouts/QueryEditorLayout';

const SchemaDoc = lazy(() => import('./components/SchemaDoc/SchemaDoc'));

export { QueryEditorLayout, SchemaDoc };
