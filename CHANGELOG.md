# Changelog

All notable changes to this project will be documented in this file.

## 1.3.2

### Fixed

- Fix converter of EServiceNameUpdated

## 1.3.1

### Fixed

- Corrected release version

## 1.3.0

### Added

- Added delegation events: `ConsumerDelegationSubmittedV2`, `ConsumerDelegationApprovedV2`, `ConsumerDelegationRejectedV2` and `ConsumerDelegationRevokedV2`
- Added eservice events: `EServiceIsDelegableEnabledV2`, `EServiceIsDelegableDisabledV2`, `EServiceIsClientAccessDelegableEnabledV2` and `EServiceIsClientAccessDelegableDisabledV2`
- Added tenant events: `TenantDelegatedConsumerFeatureAddedV2` and `TenantDelegatedConsumerFeatureRemovedV2`
- Added `DelegatedConsumer` data model

### Changed

- Changed `TenantFeature` data model with new feature
- Changed `AgreementStamp` model with optional `delegationId`
- Changed `EService` model with new flags `isDelegable` and `isClientAccessDelegable`
- Changed `Purpose` model with optional `delegationId`and reserved position

## 1.2.0

### Added

- Added `Delegation` data models
- Added delegation events: `ProducerDelegationSubmittedV2`, `ProducerDelegationApprovedV2`, `ProducerDelegationRejectedV2` and `ProducerDelegationRevokedV2`
- Added eservice events: `EServiceDescriptorSubmittedByDelegateV2`, `EServiceDescriptorApprovedByDelegatorV2` and `EServiceDescriptorRejectedByDelegatorV2`
- Added `rejectionReasons` property in `EServiceDescriptorV2` data model

## 1.1.0

### Added

- Added eservice event `EServiceNameUpdated`
