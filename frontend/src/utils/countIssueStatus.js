export function countIssueStatus(issueList) {
  let openCount = 0;
  let closeCount = 0;

  for (const issue of issueList) {
    if (issue.status === 'open') {
      openCount++;
    } else if (issue.status === 'close') {
      closeCount++;
    }
  }

  return {
    open: openCount,
    close: closeCount,
  };
}
