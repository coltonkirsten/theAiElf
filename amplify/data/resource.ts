import { type ClientSchema, a, defineData } from "@aws-amplify/backend"
import { getrec } from "../functions/get-recommendations/resource"

const schema = a.schema({
  getrec: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())
    .handler(a.handler.function(getrec))
    .authorization(allow => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
})