/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedMutation<InputType, OutputType> = string & {
    __generatedMutationInput: InputType;
    __generatedMutationOutput: OutputType;
};

export const createDeck = /* GraphQL */ `mutation CreateDeck(
  $input: CreateDeckInput!
  $condition: ModelDeckConditionInput
) {
  createDeck(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateDeckMutationVariables,
    APITypes.CreateDeckMutation
>;
export const updateDeck = /* GraphQL */ `mutation UpdateDeck(
  $input: UpdateDeckInput!
  $condition: ModelDeckConditionInput
) {
  updateDeck(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateDeckMutationVariables,
    APITypes.UpdateDeckMutation
>;
export const deleteDeck = /* GraphQL */ `mutation DeleteDeck(
  $input: DeleteDeckInput!
  $condition: ModelDeckConditionInput
) {
  deleteDeck(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteDeckMutationVariables,
    APITypes.DeleteDeckMutation
>;
export const createCard = /* GraphQL */ `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateCardMutationVariables,
    APITypes.CreateCardMutation
>;
export const updateCard = /* GraphQL */ `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateCardMutationVariables,
    APITypes.UpdateCardMutation
>;
export const deleteCard = /* GraphQL */ `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteCardMutationVariables,
    APITypes.DeleteCardMutation
>;
