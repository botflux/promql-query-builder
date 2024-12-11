# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.3.0](https://github.com/botflux/promql-query-builder/compare/v1.2.0...v1.3.0) (2024-12-11)


### Features

* support quoted (utf8) metric name ([8d2a440](https://github.com/botflux/promql-query-builder/commit/8d2a440fe2b54dd291648a979257b8f0c4266a56))

## [1.2.0](https://github.com/botflux/promql-query-builder/compare/v1.1.1...v1.2.0) (2024-12-06)


### Features

* accept buildable as range duration to support grafana variable ([d7b886f](https://github.com/botflux/promql-query-builder/commit/d7b886f02848d74bb14e255138bdbe9668673473))
* add clamp() ([20e7768](https://github.com/botflux/promql-query-builder/commit/20e7768f835920233d50cdb644214d947c5786ca))
* add day_of_month() ([5566c22](https://github.com/botflux/promql-query-builder/commit/5566c22e107126e2a1ff0cc728a87f0d6d978723))
* add day_of_week() ([6dc7b6d](https://github.com/botflux/promql-query-builder/commit/6dc7b6d5c8d90226e62b789ecdd49a12edb4aa06))
* add day_of_year() ([e14bdad](https://github.com/botflux/promql-query-builder/commit/e14bdad650c1bbed20c02cf086aa66e4d70d357e))
* add double_exponential_smoothing() ([be8b537](https://github.com/botflux/promql-query-builder/commit/be8b5371f5f5fd8b295e42ea4f7ecedad6856873))
* add histogram_fraction() ([157c178](https://github.com/botflux/promql-query-builder/commit/157c178ff3bebfdebf0ae1fc7eed18156f13e78c))
* add histogram_sum() ([d8984af](https://github.com/botflux/promql-query-builder/commit/d8984afe1d44cac20d2461d2ba0c1bcf50aa3c36))
* add hour() ([27e9399](https://github.com/botflux/promql-query-builder/commit/27e9399d1ce3c3fb91861fdeffbab057582e4a61))
* expose an abstraction to build any prometheus function ([3e85acf](https://github.com/botflux/promql-query-builder/commit/3e85acf645ca92006023e746fb834efa82f2467c))
* support histogram_avg() ([2e811f7](https://github.com/botflux/promql-query-builder/commit/2e811f7deec65209b9eadb52711977e1cf51be4d))
* support histogram_count() ([c572d7f](https://github.com/botflux/promql-query-builder/commit/c572d7fc423e596094c5e28279aab610b8e4167b))
* support optional arg with day_of_week, day_of_month, day_in_months, day_of_year ([aaf3878](https://github.com/botflux/promql-query-builder/commit/aaf38781344563f99592ba240eb33049b3a1dea3))

## [1.1.1](https://github.com/botflux/promql-query-builder/compare/v1.1.0...v1.1.1) (2024-12-03)


### Bug Fixes

* expose time function in the barrel file ([84d82e9](https://github.com/botflux/promql-query-builder/commit/84d82e9eb242edfc9eb48dbb43937a4fe6770c73))

## [1.1.0](https://github.com/botflux/promql-query-builder/compare/v1.0.5...v1.1.0) (2024-12-03)


### Features

* add time function ([46e99e1](https://github.com/botflux/promql-query-builder/commit/46e99e175cb8269b77b8659b415fd685853b88db))
* support parenthesis ([5b81890](https://github.com/botflux/promql-query-builder/commit/5b818902a494d6dd18223208112c2d671991d7c0))

## [1.0.5](https://github.com/botflux/promql-query-builder/compare/v1.0.4...v1.0.5) (2024-11-29)


### Bug Fixes

* add missing export in the barrel file ([de50ee2](https://github.com/botflux/promql-query-builder/commit/de50ee2c2f0055c69496291733eb8c62a8fb65ec))

## [1.0.4](https://github.com/botflux/promql-query-builder/compare/v1.0.3...v1.0.4) (2024-11-28)

## [1.0.3](https://github.com/botflux/promql-query-builder/compare/v1.0.2...v1.0.3) (2024-11-28)

## [1.0.2](https://github.com/botflux/promql-query-builder/compare/v1.0.1...v1.0.2) (2024-11-28)

## [1.0.1](https://github.com/botflux/promql-query-builder/compare/v1.0.0...v1.0.1) (2024-11-28)

## 1.0.0 (2024-11-28)


### Features

* add aggregation functions, instant vector functions, range vector functions and split files ([d42beb2](https://github.com/botflux/promql-query-builder/commit/d42beb2abe730ff7fbfcbc04611b33d87e299301))
