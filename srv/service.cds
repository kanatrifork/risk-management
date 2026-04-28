using { RiskManagement as my } from '../db/schema.cds';

using { BusinessPartnerA2X } from './external/API_BUSINESS_PARTNER.cds';

@path : '/service/RiskManagementService'
service RiskManagementService
{
    @cds.redirection.target
    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @cds.redirection.target
    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName
        };
}

annotate RiskManagementService with @requires :
[
    'authenticated-user'
];

annotate RiskManagementService.Risks with @(restrict: [
    { grant: ['*'], to: 'RiskManager' },
    { grant: ['READ'], to: 'RiskViewer' }
]);

annotate RiskManagementService.Mitigations with @(restrict: [
    { grant: ['*'], to: 'RiskManager' }
]);
