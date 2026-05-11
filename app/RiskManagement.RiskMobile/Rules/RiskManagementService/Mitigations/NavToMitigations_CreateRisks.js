export default function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/RiskMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action');
    }
}