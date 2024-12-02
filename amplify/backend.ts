import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { getrec } from './functions/get-recommendations/resource'

defineBackend({
  auth,
  data,
  getrec,
});
