import api, { route } from "@forge/api";
import type { JiraRequest } from '../types'

export const getIssueDetails = async ({
  payload,
}: JiraRequest): Promise<Record<string, string>> => {
  const issueId = payload.issueId;
  const response = await api
    .asApp()
    .requestJira(route`/rest/api/3/issue/${issueId}`);
  const data = await response.json();
  return data;
};
