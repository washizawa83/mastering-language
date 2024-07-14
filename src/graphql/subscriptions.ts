/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedSubscription<InputType, OutputType> = string & {
    __generatedSubscriptionInput: InputType;
    __generatedSubscriptionOutput: OutputType;
};

export const onCreateDeck =
    /* GraphQL */ `subscription OnCreateDeck($filter: ModelSubscriptionDeckFilterInput) {
  onCreateDeck(filter: $filter) {
    id
    user_id
    cards {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
        APITypes.OnCreateDeckSubscriptionVariables,
        APITypes.OnCreateDeckSubscription
    >;
export const onUpdateDeck =
    /* GraphQL */ `subscription OnUpdateDeck($filter: ModelSubscriptionDeckFilterInput) {
  onUpdateDeck(filter: $filter) {
    id
    user_id
    cards {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
        APITypes.OnUpdateDeckSubscriptionVariables,
        APITypes.OnUpdateDeckSubscription
    >;
export const onDeleteDeck =
    /* GraphQL */ `subscription OnDeleteDeck($filter: ModelSubscriptionDeckFilterInput) {
  onDeleteDeck(filter: $filter) {
    id
    user_id
    cards {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
        APITypes.OnDeleteDeckSubscriptionVariables,
        APITypes.OnDeleteDeckSubscription
    >;
export const onCreateCard =
    /* GraphQL */ `subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
  onCreateCard(filter: $filter) {
    id
    user_id
    deck {
      id
      user_id
      name
      createdAt
      updatedAt
      __typename
    }
    sentence
    meaning
    image
    etymology
    next_answer_date
    previous_answer_date
    retention_state
    savings_score
    createdAt
    updatedAt
    deckCardsId
    __typename
  }
}
` as GeneratedSubscription<
        APITypes.OnCreateCardSubscriptionVariables,
        APITypes.OnCreateCardSubscription
    >;
export const onUpdateCard =
    /* GraphQL */ `subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
  onUpdateCard(filter: $filter) {
    id
    user_id
    deck {
      id
      user_id
      name
      createdAt
      updatedAt
      __typename
    }
    sentence
    meaning
    image
    etymology
    next_answer_date
    previous_answer_date
    retention_state
    savings_score
    createdAt
    updatedAt
    deckCardsId
    __typename
  }
}
` as GeneratedSubscription<
        APITypes.OnUpdateCardSubscriptionVariables,
        APITypes.OnUpdateCardSubscription
    >;
export const onDeleteCard =
    /* GraphQL */ `subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
  onDeleteCard(filter: $filter) {
    id
    user_id
    deck {
      id
      user_id
      name
      createdAt
      updatedAt
      __typename
    }
    sentence
    meaning
    image
    etymology
    next_answer_date
    previous_answer_date
    retention_state
    savings_score
    createdAt
    updatedAt
    deckCardsId
    __typename
  }
}
` as GeneratedSubscription<
        APITypes.OnDeleteCardSubscriptionVariables,
        APITypes.OnDeleteCardSubscription
    >;
