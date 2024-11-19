import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Button, Textfield } from '@forge/react';
import { invoke } from '@forge/bridge';
import { FileUtil, ValidationUtil } from '../utils';

const App = () => {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    invoke<string>('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);


  const getIssueDetails = async (issueId: string) => {
    const issueData = await invoke('getIssueDetails', { issueId });
    console.log(issueData);
  }

  const [file, setFile] = useState<any>(null);

  const onAddFile = async (event: any) => {
    const file = (event.target as HTMLInputElement).files?.[0]
    console.log('file',file)
    if (!file) return
    try {
      const content = await FileUtil.readFile(file)
      const parsedContent = JSON.parse(content)
      console.log('parsedContent', parsedContent)
      if (ValidationUtil.isValidMapping(parsedContent)) {
        setFile(parsedContent);
      } else {
      }
    } catch (error) {
      console.error('File processing error:', error)
    }
  }

  return (
    <>
      <Text>Hello world!</Text>
      <Button onClick={() => getIssueDetails('SCRUM-4')}>Get Issue Details</Button>
      <Text>{data ? data : 'Loading...'}</Text>
      <Textfield type='file' onChange={onAddFile}/>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
