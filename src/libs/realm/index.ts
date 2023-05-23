import { createRealmContext } from "@realm/react";

import { Historic } from "./schemas/Historic";

export const { RealmProvider, useQuery, useObject, useRealm } =
  createRealmContext({
    schema: [Historic],
  });
