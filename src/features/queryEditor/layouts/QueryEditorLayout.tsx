import { BookOpenIcon as BookOpenSolid } from '@heroicons/react/24/solid';
import { BookOpenIcon as BookOpenOutline } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { Suspense, useState } from 'react';
import { SchemaDoc } from '..';
import { QueryOptions } from '../components/queryOptions/QueryOptions';
import { QueryEditor, QueryResult } from '../index';

const QueryEditorLayout = () => {
  const [docIsOpen, setDocIsOpen] = useState(false);
  const nandleShowDocuments = () => {
    setDocIsOpen(!docIsOpen);
  };

  return (
    <div className="qeditor-container mt-2 flex h-full w-full gap-1 overflow-hidden bg-neutral-100 p-1">
      <div
        className={classNames('qeditor-sidebar flex flex-col  bg-neutral-100 sm:flex-row', {
          'border-r-2 border-gray-300': docIsOpen,
        })}
      >
        <button className="m-1 h-10 w-10" onClick={nandleShowDocuments}>
          {docIsOpen ? <BookOpenSolid /> : <BookOpenOutline />}
        </button>
      </div>
      <div className="qeditor-main flex min-w-0 flex-1 flex-col gap-1 sm:flex-row">
        <div
          className={classNames('qeditor-docs min-w-200 bg-neutral-100 transition-all', {
            hidden: !docIsOpen,
            'flex flex-[0.33_1_0%] flex-col overflow-y-auto sm:flex-row': docIsOpen,
          })}
        >
          <Suspense fallback={<div>Suspense Loading...</div>}>
            <SchemaDoc />
          </Suspense>
        </div>
        <div className="qeditor-section flex min-w-0 flex-1 flex-col gap-8 bg-neutral-100 sm:flex-row">
          <div className="qeditor-general flex flex-1 flex-row">
            <div className="wrapper flex h-full w-full flex-col gap-1 ">
              <div className="qeditor-editor flex flex-[3_1_0%] flex-col rounded-lg bg-white p-2">
                <QueryEditor></QueryEditor>
              </div>
              <QueryOptions />
            </div>
          </div>
          <div className="qeditor-results flex flex-1 flex-row rounded-lg bg-white p-2">
            <QueryResult></QueryResult>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryEditorLayout;
