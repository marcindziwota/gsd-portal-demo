interface AuthConfiguration {
    clientID: string,
    domain: string,
    options: {
        auth: {
            redirect: boolean
        }
    }
}

export const myConfig: AuthConfiguration = {
    clientID: 'WHMxSQJBa8uuGcu6IDcVfJCVsiEgyr9r',
    domain: 'mdziwota.eu.auth0.com',
    options: {
        auth: {
            redirect: false
        }
    }
};
