/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
    __generatedQueryInput: InputType;
    __generatedQueryOutput: OutputType;
};

// export const getDeck = /* GraphQL */ `query GetDeck($id: ID!) {
//   getDeck(id: $id) {
//     id
//     user_id
//     cards {
//       nextToken
//       __typename
//     }
//     name
//     createdAt
//     updatedAt
//     __typename
//   }
// }
// ` as GeneratedQuery<APITypes.GetDeckQueryVariables, APITypes.GetDeckQuery>;
export const getDeck = /* GraphQL */ `query GetDeck($id: ID!) {
  getDeck(id: $id) {
    id
    user_id
    cards {
      items {
        id
        user_id
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
        __typename
      }
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDeckQueryVariables, APITypes.GetDeckQuery>;

export const listDecks = /* GraphQL */ `query ListDecks(
  $id: ID
  $filter: ModelDeckFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDecks(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      user_id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDecksQueryVariables, APITypes.ListDecksQuery>;
export const getCard = /* GraphQL */ `query GetCard($id: ID!) {
  getCard(id: $id) {
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
` as GeneratedQuery<APITypes.GetCardQueryVariables, APITypes.GetCardQuery>;
export const listCards = /* GraphQL */ `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user_id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCardsQueryVariables, APITypes.ListCardsQuery>;
// export const decksByUser_idAndUpdatedAt = /* GraphQL */ `query DecksByUser_idAndUpdatedAt(
//   $user_id: String!
//   $updatedAt: ModelStringKeyConditionInput
//   $sortDirection: ModelSortDirection
//   $filter: ModelDeckFilterInput
//   $limit: Int
//   $nextToken: String
// ) {
//   decksByUser_idAndUpdatedAt(
//     user_id: $user_id
//     updatedAt: $updatedAt
//     sortDirection: $sortDirection
//     filter: $filter
//     limit: $limit
//     nextToken: $nextToken
//   ) {
//     items {
//       id
//       user_id
//       name
//       createdAt
//       updatedAt
//       __typename
//     }
//     nextToken
//     __typename
//   }
// }
// ` as GeneratedQuery<
//   APITypes.DecksByUser_idAndUpdatedAtQueryVariables,
//   APITypes.DecksByUser_idAndUpdatedAtQuery
// >;

export const decksByUser_idAndUpdatedAt =
    /* GraphQL */ `query DecksByUser_idAndUpdatedAt(
  $user_id: String!
  $updatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDeckFilterInput
  $limit: Int
  $nextToken: String
) {
  decksByUser_idAndUpdatedAt(
    user_id: $user_id
    updatedAt: $updatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user_id
      name
      createdAt
      updatedAt
      cards {
        items {
          id
        }
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
        APITypes.DecksByUser_idAndUpdatedAtQueryVariables,
        APITypes.DecksByUser_idAndUpdatedAtQuery
    >;
