import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  messages: {
    ...(await import(`../messages/${locale}.json`)).default,
    ...(await import(`../messages/general/${locale}.json`)).default,
    ...(await import(`../messages/general/100bagger/${locale}.json`)).default
  }
}));