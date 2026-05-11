export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/RiskMobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/CloseModalPage_Cancel.action');
    }
}