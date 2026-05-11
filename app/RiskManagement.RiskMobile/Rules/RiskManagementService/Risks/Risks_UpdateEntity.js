export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RiskMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action');
    }
}