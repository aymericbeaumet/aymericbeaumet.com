# aymericbeaumet.com

## Tests

### Tools

- [Google Search Console](https://search.google.com/search-console?resource_id=https%3A%2F%2Faymericbeaumet.com%2F)

### Performance / Accessibility

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/run)
- [Google Mobile-Friendly](https://search.google.com/test/mobile-friendly?url=https%3A%2F%2Faymericbeaumet.com%2F)
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Faymericbeaumet.com)
- [GTmetrix](https://gtmetrix.com/reports/aymericbeaumet.com/0dYIusp6)
- [Pingdom](https://tools.pingdom.com/#59da531f00400000)

### Security

- [Sophos Security Headers](https://securityheaders.com/?q=https%3A%2F%2Faymericbeaumet.com&followRedirects=on)

### DNS

| Domain             | GSuite Toolbox Check MX                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| aymericbeaumet.me  | [check](https://toolbox.googleapps.com/apps/checkmx/check?domain=aymericbeaumet.me&dkim_selector=)  |
| aymericbeaumet.com | [check](https://toolbox.googleapps.com/apps/checkmx/check?domain=aymericbeaumet.com&dkim_selector=) |
| beaumet.fr         | [check](https://toolbox.googleapps.com/apps/checkmx/check?domain=beaumet.fr&dkim_selector=)         |
| beaumet.me         | [check](https://toolbox.googleapps.com/apps/checkmx/check?domain=beaumet.me&dkim_selector=)         |
| ------------------ | --------------------------------------------------------------------------------------------------- |

## Commands

### Development

```
yarn
yarn develop
```

## Environment variables

The following variables must be set in the [GitLab interface](https://gitlab.com/aymericbeaumet/aymericbeaumet.com/settings/ci_cd):

- `NETLIFY_SITE_ID`: get the _API ID_ [here](https://app.netlify.com/sites/aymericbeaumet/settings/general)
- `NETLIFY_AUTH_TOKEN`: generate a _Personal access token_ [here](https://app.netlify.com/account/applications)
- `ALGOLIA_APPLICATION_ID`: get it [here](https://www.algolia.com/apps/O8NJP2H5DA/api-keys/all)
- `ALGOLIA_ADMIN_API_KEY`: _see above_
- `ALGOLIA_SEARCH_ONLY_API_KEY`: _see above_
- `ALGOLIA_INDEX_NAME`: get it [here](https://www.algolia.com/apps/O8NJP2H5DA/explorer/browse)
