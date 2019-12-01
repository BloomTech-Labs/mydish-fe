
awsconfig = {
    access_key : 'AKIA35GJTLYLRXJ3V2NC',
    secret_key : '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',
    identityPoolId : 'us-east-1:d66bac86-69a8-453f-849b-ad58b3ffa313',
    bucket : 'recipe-share'
}

awsconfig.region = awsconfig.identityPoolId.match(/us-(\w){4}-[1-9]/)[0]

module.exports = awsconfig;



