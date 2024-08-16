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
    ...(await import(`../messages/value-investing/gordon/${locale}.json`)).default,
    ...(await import(`../messages/value-investing/liquidation/${locale}.json`)).default,
    ...(await import(`../messages/value-investing/graham/${locale}.json`)).default,
    ...(await import(`../messages/real-estate/${locale}.json`)).default,
    ...(await import(`../messages/real-estate/lateralnav/${locale}.json`)).default,
    ...(await import(`../messages/real-estate/sales/${locale}.json`)).default,
    ...(await import(`../messages/real-estate/cost/${locale}.json`)).default,
    ...(await import(`../messages/real-estate/income/${locale}.json`)).default,
    ...(await import(`../messages/real-estate/flip/${locale}.json`)).default,
    ...(await import(`../messages/investors/${locale}.json`)).default,
    ...(await import(`../messages/investors/wb/${locale}.json`)).default,
    ...(await import(`../messages/investors/peter/${locale}.json`)).default,
    ...(await import(`../messages/investors/fisher/${locale}.json`)).default,
    ...(await import(`../messages/investors/terry/${locale}.json`)).default,
    ...(await import(`../messages/navbar/${locale}.json`)).default,
    ...(await import(`../messages/contact/${locale}.json`)).default,
  }
}));