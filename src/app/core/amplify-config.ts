/**
 * Manual configuration of AWS Amplify.
 * @see https://github.com/aws-amplify/docs/issues/766
 */
export const AMPLIFY_CONFIG = {
    aws_project_region: process.env.AWS_COGNITO_REGION,
    aws_cognito_region: process.env.AWS_COGNITO_REGION,
    aws_user_pools_id: process.env.AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
    oauth: {
        domain: process.env.AWS_USER_POOLS_OAUTH_DOMAIN,
        scope: [
            'email',
            'openid',
            'profile'
        ],
        redirectSignIn: `${location.protocol}//${location.host}/app/index.html`,
        redirectSignOut: `${location.protocol}//${location.host}/index.html`,
        /**
         * Make sure not to generate a secret when choosing code flow.
         * https://github.com/amazon-archives/amazon-cognito-auth-js/issues/206#issuecomment-559662930
         */
        responseType: 'code'
    },
    federationTarget: 'COGNITO_USER_POOLS'
};
