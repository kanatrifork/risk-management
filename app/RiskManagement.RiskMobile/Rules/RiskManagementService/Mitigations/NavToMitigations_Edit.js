export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/RiskMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action');
    }
}