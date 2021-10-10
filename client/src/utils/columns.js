/*
columns.js
This module is contains list of columns for policy tables.
*/

import moment from 'moment';

function getPolicy(id) {
fetch(`getPolicy?id=${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
}

const columns = [{
        cell: (row) => <button className="btn btn-dark" onClick={() => getPolicy(row.policy_id)}>Edit</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        wrap: true,
    },
    {
        name: 'Policy ID',
        selector: row => row.policy_id,
        center: true,
        wrap: true,
    },
    {
        name: 'Date of Purchase',
        selector: row => moment(row.dop).format('YYYY-MM-DD'),
        center: true,
        wrap: true,
    },
    {
        name: 'Customer ID',
        selector: row => row.cust_id,
        center: true,
        wrap: true,
    },
    {
        name: 'Fuel',
        selector: row => row.fuel,
        center: true,
    },
    {
        name: 'Vehicle Segment',
        selector: row => row.segment,
        center: true,
        wrap: true,
    },
    {
        name: 'Premium',
        selector: row => row.premium,
        center: true,
    },
    {
        name: 'Bodily Injury Liability',
        selector: row => row.bodyinjury,
        center: true,
        wrap: true,
    },
    {
        name: 'Personal Injury Protection',
        selector: row => row.personalinjury,
        center: true,
        wrap: true,
    },
    {
        name: 'Property Damage Liability',
        selector: row => row.propertydamage,
        center: true,
        wrap: true,
    },
    {
        name: 'Collision',
        selector: row => row.collision,
        center: true,
    },
    {
        name: 'Comprehensive',
        selector: row => row.comprehensive,
        center: true,
        wrap: true,
    },
    {
        name: 'Gender',
        selector: row => row.gender,
        center: true,
    },
    {
        name: 'Income Group',
        selector: row => row.income,
        center: true,
        wrap: true,
    },
    {
        name: 'Region',
        selector: row => row.region,
        center: true,
    },
    {
        name: 'Marital Status',
        selector: row => row.marital_status,
        center: true,
        wrap: true,
    },
];

export default columns;