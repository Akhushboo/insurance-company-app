const dataFormatter = (record) => {
    return {
        policyId: record.policyId,
        dop: record.dop,
        custId: record.custId,
        fuel: record.fuel,
        segment: record.segment,
        premium: record.premium,
        bodyInjury: record.bodyInjury,
        personalInjury: record.personalInjury,
        propDamage: record.propDamage,
        collision: record.collision,
        comprehensive: record.comprehensive,
        gender: record.gender,
        income: record.income,
        region: record.region,
        maritalStatus: record.maritalStatus
    }

} 

export default dataFormatter;