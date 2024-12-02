import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { getrec } from './functions/get-recommendations/resource';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import 'dotenv/config'

const backend = defineBackend({
  auth,
  data,
  getrec,
});

// Add the OpenAI Layer to the getrec function
const getrecLambda = backend.getrec.resources.lambda as lambda.Function
const openaiLayer = lambda.LayerVersion.fromLayerVersionArn(
  getrecLambda, 
  "OpenAILayer", 
  "arn:aws:lambda:us-east-1:798304349963:layer:openai:1"
)
getrecLambda.addLayers(openaiLayer)
