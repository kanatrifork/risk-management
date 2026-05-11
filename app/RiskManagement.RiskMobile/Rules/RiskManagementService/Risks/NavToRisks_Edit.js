export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/RiskMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action');
    }
}