import { defineFunction, secret } from '@aws-amplify/backend';

export const getrec = defineFunction({
    name: 'getrec',
    entry: './handler.ts',
    environment: {
        OPENAI_API_KEY: secret('OPENAI_API_KEY')
    }
});