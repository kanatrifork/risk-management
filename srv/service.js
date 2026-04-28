const cds = require('@sap/cds')

class RiskManagementService extends cds.ApplicationService {
    async init() {
        const BPsrv = await cds.connect.to('BusinessPartnerA2X')
        const { A_BusinessPartner } = this.entities

        this.on('READ', A_BusinessPartner, async (req) => {
            return BPsrv.run(req.query)
        })

        return super.init()
    }
}

module.exports = RiskManagementService