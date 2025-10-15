# Changelog

All notable changes to this project will be documented in this file.

## 1.7.0

### Added

- Added delegation events:
  - `DelegationContractAdded`
  - `DelegationSignedContractAdded`
- Added agreement events:
  - `AgreementContractAdded`
  - `AgreementSignedContractAdded`
- Added purpose events:
  - `RiskAnalysisDocumentAdded`
  - `RiskAnalysisSignedDocumentAdded`

## 1.6.9

- Removed `who` from `PurposeVersionStamp`

## 1.6.8

### Updated

- Renamed `EServicePersonalDataUpdatedAfterPublish` into `EServicePersonalDataFlagUpdatedAfterPublication`
- Renamed `EServicePersonalDataUpdatedByTemplateUpdate` into `EServicePersonalDataFlagUpdatedByTemplateUpdate`
- Renamed `EServiceTemplatePersonalDataUpdatedAfterPublish` into `EServiceTemplatePersonalDataFlagUpdatedAfterPublication`

## 1.6.7

### Added

- Added `personalData` in EServiceTemplate
- Added `EServiceTemplatePersonalDataUpdatedAfterPublish` eservice-template event
- Added `EServicePersonalDataUpdatedByTemplateUpdate` eservice event

## 1.6.6

### Added

- Added `personalData` in EService
- Added `EServicePersonalDataUpdatedAfterPublish` eservice event

## 1.6.5

### Added

- Added `PurposeVersionStamps`

## 1.6.4

### Added

- Added `EServiceSignalHubEnabled` and `EServiceSignalHubDisabled` eservice event

## 1.6.3

### Fixed

- Fixed deployment problem by deploying the correct version

## 1.6.2

### Updated

- Updated vitest from 2.0.4 to 2.1.9

## 1.6.1

### Updated

- Updated e-service data model removing `templateRef` in favor of `templateId`

## 1.6.0

### Added

- Added `EServiceDescriptorAgreementApprovalPolicyUpdated` eservice event

## 1.5.4

### Added

- Added `EServiceNameUpdatedByTemplateUpdate` eservice event

## 1.5.3

### Fixed

- Fixed missing `optional` keywords in `TemplateInstanceInterfaceMetadataV2` proto model properties

## 1.5.2

### Removed

- Removed `serverUrls` from `TemplateInstanceInterfaceMetadataV2`

## 1.5.1

### Fixed

- Fixed missing delegation export

## 1.5.0

### Added

- Added `EServiceTemplate` data models
- Added eservice-template events:
  - `EServiceTemplateAddedV2`
  - `EServiceTemplateDraftUpdatedV2`
  - `EServiceTemplateDraftVersionUpdatedV2`
  - `EServiceTemplateDraftVersionDeletedV2`
  - `EServiceTemplateDeletedV2`
  - `EServiceTemplateVersionInterfaceAddedV2`
  - `EServiceTemplateVersionDocumentAddedV2`
  - `EServiceTemplateVersionInterfaceDeletedV2`
  - `EServiceTemplateVersionDocumentDeletedV2`
  - `EServiceTemplateVersionInterfaceUpdatedV2`
  - `EServiceTemplateVersionDocumentUpdatedV2`
  - `EServiceTemplateVersionPublishedV2`
  - `EServiceTemplateNameUpdatedV2`
  - `EServiceTemplateIntendedTargetUpdatedV2`
  - `EServiceTemplateDescriptionUpdatedV2`
  - `EServiceTemplateVersionQuotasUpdatedV2`
  - `EServiceTemplateVersionAddedV2`
  - `EServiceTemplateVersionAttributesUpdatedV2`
  - `EServiceTemplateVersionSuspendedV2`
  - `EServiceTemplateVersionActivatedV2`
- Added eservice events:
  - `EServiceDescriptionUpdatedByTemplateUpdateV2`
  - `EServiceDescriptorQuotasUpdatedByTemplateUpdateV2`
  - `EServiceDescriptorAttributesUpdatedByTemplateUpdateV2`
  - `EServiceDescriptorDocumentAddedByTemplateUpdateV2`
  - `EServiceDescriptorDocumentUpdatedByTemplateUpdateV2`
  - `EServiceDescriptorDocumentDeletedByTemplateUpdateV2`

### Updated

- Updated `EServiceDescriptorV2` data model with optional `templateVersionRef` property
- Updated `EServiceV2` data model with optional `templateRef` property

## 1.4.2

### Updated

- Updated the structure of `delegationV2` message

## 1.4.1

### Changed

- Renamed `isDelegable` flag to `isConsumerDelegable`
- Renamed events `EServiceIsDelegableEnabledV2` and `EServiceIsDelegableDisabledV2` to `EServiceIsConsumerDelegableEnabledV2` and `EServiceIsConsumerDelegableDisabledV2`

## 1.4.0

### Added

- Added agreement events: `AgreementDeletedByRevokedDelegationV2` and `AgreementArchivedByRevokedDelegationV2`
- Added purpose evenets: `PurposeDeletedByRevokedDelegationV2` and `PurposeVersionArchivedByRevokedDelegationV2`

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
