import Resolver from '@forge/resolver';
import { getIssueDetails } from '../services/issue-details';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  return 'Hello, world1 2!';
});


resolver.define('getIssueDetails', getIssueDetails);

export const handler = resolver.getDefinitions();
