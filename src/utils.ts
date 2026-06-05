export function createPageUrl(pageName: string): string {
  if (pageName === 'Home') return '/';
  return `/${pageName}`;
}
