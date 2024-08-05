import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  messages: {
    ...(await import(`../messages/${locale}.json`)).default,
    ...(await import(`../messages/general/${locale}.json`)).default,
    ...(await import(`../messages/general/lateralnav/${locale}.json`)).default,
    ...(await import(`../messages/general/100bagger/${locale}.json`)).default,
    ...(await import(`../messages/general/crypto/${locale}.json`)).default,
    ...(await import(`../messages/general/porter/${locale}.json`)).default,
    ...(await import(`../messages/general/compound-interest/${locale}.json`)).default,
    ...(await import(`../messages/value-investing/${locale}.json`)).default,
    ...(await import(`../messages/value-investing/lateralnav/${locale}.json`)).default,
    ...(await import(`../messages/value-investing/dcf/${locale}.json`)).default,
    ...(await import(`../messages/navbar/${locale}.json`)).default,
  }
}));