export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RiskMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action');
    }
}