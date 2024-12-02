import { defineFunction, secret } from '@aws-amplify/backend';

export const getrec = defineFunction({
    // optionally specify a name for the Function (defaults to directory name)
    name: 'getrec',
    // optionally specify a path to your handler (defaults to "./handler.ts")
    entry: './handler.ts',
    environment: {
        OPENAI_API_KEY: secret('OPENAI_API_KEY')
    },

    layers: {
        "@openai":
           "arn:aws:lambda:us-east-1:798304349963:layer:openai:1",
    },
});