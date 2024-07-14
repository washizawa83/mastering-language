/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeckInput = {
    id?: string | null;
    user_id: string;
    name: string;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type ModelDeckConditionInput = {
    user_id?: ModelStringInput | null;
    name?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelDeckConditionInput | null> | null;
    or?: Array<ModelDeckConditionInput | null> | null;
    not?: ModelDeckConditionInput | null;
};

export type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
    binary = 'binary',
    binarySet = 'binarySet',
    bool = 'bool',
    list = 'list',
    map = 'map',
    number = 'number',
    numberSet = 'numberSet',
    string = 'string',
    stringSet = 'stringSet',
    _null = '_null',
}

export type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};

export type Deck = {
    __typename: 'Deck';
    id: string;
    user_id: string;
    cards?: ModelCardConnection | null;
    name: string;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type ModelCardConnection = {
    __typename: 'ModelCardConnection';
    items: Array<Card | null>;
    nextToken?: string | null;
};

export type Card = {
    __typename: 'Card';
    id: string;
    user_id: string;
    deck?: Deck | null;
    sentence: string;
    meaning: string;
    image?: string | null;
    etymology?: string | null;
    next_answer_date?: string | null;
    previous_answer_date?: string | null;
    retention_state: boolean;
    savings_score: number;
    createdAt?: string | null;
    updatedAt?: string | null;
    deckCardsId?: string | null;
};

export type UpdateDeckInput = {
    id: string;
    user_id?: string | null;
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

export type DeleteDeckInput = {
    id: string;
};

export type CreateCardInput = {
    id?: string | null;
    user_id: string;
    sentence: string;
    meaning: string;
    image?: string | null;
    etymology?: string | null;
    next_answer_date?: string | null;
    previous_answer_date?: string | null;
    retention_state: boolean;
    savings_score: number;
    createdAt?: string | null;
    updatedAt?: string | null;
    deckCardsId?: string | null;
};

export type ModelCardConditionInput = {
    user_id?: ModelStringInput | null;
    sentence?: ModelStringInput | null;
    meaning?: ModelStringInput | null;
    image?: ModelStringInput | null;
    etymology?: ModelStringInput | null;
    next_answer_date?: ModelStringInput | null;
    previous_answer_date?: ModelStringInput | null;
    retention_state?: ModelBooleanInput | null;
    savings_score?: ModelIntInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelCardConditionInput | null> | null;
    or?: Array<ModelCardConditionInput | null> | null;
    not?: ModelCardConditionInput | null;
    deckCardsId?: ModelIDInput | null;
};

export type ModelBooleanInput = {
    ne?: boolean | null;
    eq?: boolean | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type UpdateCardInput = {
    id: string;
    user_id?: string | null;
    sentence?: string | null;
    meaning?: string | null;
    image?: string | null;
    etymology?: string | null;
    next_answer_date?: string | null;
    previous_answer_date?: string | null;
    retention_state?: boolean | null;
    savings_score?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deckCardsId?: string | null;
};

export type DeleteCardInput = {
    id: string;
};

export type ModelDeckFilterInput = {
    id?: ModelIDInput | null;
    user_id?: ModelStringInput | null;
    name?: ModelStringInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelDeckFilterInput | null> | null;
    or?: Array<ModelDeckFilterInput | null> | null;
    not?: ModelDeckFilterInput | null;
};

export enum ModelSortDirection {
    ASC = 'ASC',
    DESC = 'DESC',
}

export type ModelDeckConnection = {
    __typename: 'ModelDeckConnection';
    items: Array<Deck | null>;
    nextToken?: string | null;
};

export type ModelCardFilterInput = {
    id?: ModelIDInput | null;
    user_id?: ModelStringInput | null;
    sentence?: ModelStringInput | null;
    meaning?: ModelStringInput | null;
    image?: ModelStringInput | null;
    etymology?: ModelStringInput | null;
    next_answer_date?: ModelStringInput | null;
    previous_answer_date?: ModelStringInput | null;
    retention_state?: ModelBooleanInput | null;
    savings_score?: ModelIntInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelCardFilterInput | null> | null;
    or?: Array<ModelCardFilterInput | null> | null;
    not?: ModelCardFilterInput | null;
    deckCardsId?: ModelIDInput | null;
};

export type ModelStringKeyConditionInput = {
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
};

export type ModelSubscriptionDeckFilterInput = {
    id?: ModelSubscriptionIDInput | null;
    user_id?: ModelSubscriptionStringInput | null;
    name?: ModelSubscriptionStringInput | null;
    createdAt?: ModelSubscriptionStringInput | null;
    updatedAt?: ModelSubscriptionStringInput | null;
    and?: Array<ModelSubscriptionDeckFilterInput | null> | null;
    or?: Array<ModelSubscriptionDeckFilterInput | null> | null;
    deckCardsId?: ModelSubscriptionIDInput | null;
};

export type ModelSubscriptionIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    in?: Array<string | null> | null;
    notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    in?: Array<string | null> | null;
    notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCardFilterInput = {
    id?: ModelSubscriptionIDInput | null;
    user_id?: ModelSubscriptionStringInput | null;
    sentence?: ModelSubscriptionStringInput | null;
    meaning?: ModelSubscriptionStringInput | null;
    image?: ModelSubscriptionStringInput | null;
    etymology?: ModelSubscriptionStringInput | null;
    next_answer_date?: ModelSubscriptionStringInput | null;
    previous_answer_date?: ModelSubscriptionStringInput | null;
    retention_state?: ModelSubscriptionBooleanInput | null;
    savings_score?: ModelSubscriptionIntInput | null;
    createdAt?: ModelSubscriptionStringInput | null;
    updatedAt?: ModelSubscriptionStringInput | null;
    and?: Array<ModelSubscriptionCardFilterInput | null> | null;
    or?: Array<ModelSubscriptionCardFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
    ne?: boolean | null;
    eq?: boolean | null;
};

export type ModelSubscriptionIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    in?: Array<number | null> | null;
    notIn?: Array<number | null> | null;
};

export type CreateDeckMutationVariables = {
    input: CreateDeckInput;
    condition?: ModelDeckConditionInput | null;
};

export type CreateDeckMutation = {
    createDeck?: {
        __typename: 'Deck';
        id: string;
        user_id: string;
        cards?: {
            __typename: 'ModelCardConnection';
            nextToken?: string | null;
        } | null;
        name: string;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type UpdateDeckMutationVariables = {
    input: UpdateDeckInput;
    condition?: ModelDeckConditionInput | null;
};

export type UpdateDeckMutation = {
    updateDeck?: {
        __typename: 'Deck';
        id: string;
        user_id: string;
        cards?: {
            __typename: 'ModelCardConnection';
            nextToken?: string | null;
        } | null;
        name: string;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type DeleteDeckMutationVariables = {
    input: DeleteDeckInput;
    condition?: ModelDeckConditionInput | null;
};

export type DeleteDeckMutation = {
    deleteDeck?: {
        __typename: 'Deck';
        id: string;
        user_id: string;
        cards?: {
            __typename: 'ModelCardConnection';
            nextToken?: string | null;
        } | null;
        name: string;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type CreateCardMutationVariables = {
    input: CreateCardInput;
    condition?: ModelCardConditionInput | null;
};

export type CreateCardMutation = {
    createCard?: {
        __typename: 'Card';
        id: string;
        user_id: string;
        deck?: {
            __typename: 'Deck';
            id: string;
            user_id: string;
            name: string;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        sentence: string;
        meaning: string;
        image?: string | null;
        etymology?: string | null;
        next_answer_date?: string | null;
        previous_answer_date?: string | null;
        retention_state: boolean;
        savings_score: number;
        createdAt?: string | null;
        updatedAt?: string | null;
        deckCardsId?: string | null;
    } | null;
};

export type UpdateCardMutationVariables = {
    input: UpdateCardInput;
    condition?: ModelCardConditionInput | null;
};

export type UpdateCardMutation = {
    updateCard?: {
        __typename: 'Card';
        id: string;
        user_id: string;
        deck?: {
            __typename: 'Deck';
            id: string;
            user_id: string;
            name: string;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        sentence: string;
        meaning: string;
        image?: string | null;
        etymology?: string | null;
        next_answer_date?: string | null;
        previous_answer_date?: string | null;
        retention_state: boolean;
        savings_score: number;
        createdAt?: string | null;
        updatedAt?: string | null;
        deckCardsId?: string | null;
    } | null;
};

export type DeleteCardMutationVariables = {
    input: DeleteCardInput;
    condition?: ModelCardConditionInput | null;
};

export type DeleteCardMutation = {
    deleteCard?: {
        __typename: 'Card';
        id: string;
        user_id: string;
        deck?: {
            __typename: 'Deck';
            id: string;
            user_id: string;
            name: string;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        sentence: string;
        meaning: string;
        image?: string | null;
        etymology?: string | null;
        next_answer_date?: string | null;
        previous_answer_date?: string | null;
        retention_state: boolean;
        savings_score: number;
        createdAt?: string | null;
        updatedAt?: string | null;
        deckCardsId?: string | null;
    } | null;
};

export type GetDeckQueryVariables = {
    id: string;
};

export type GetDeckQuery = {
    getDeck?: {
        __typename: 'Deck';
        id: string;
        user_id: string;
        cards?: {
            items: [];
            __typename: 'ModelCardConnection';
            nextToken?: string | null;
        } | null;
        name: string;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type ListDecksQueryVariables = {
    id?: string | null;
    filter?: ModelDeckFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    sortDirection?: ModelSortDirection | null;
};

export type ListDecksQuery = {
    listDecks?: {
        __typename: 'ModelDeckConnection';
        items: Array<
            {
                __typename: 'Deck';
                id: string;
                user_id: string;
                name: string;
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null
        >;
        nextToken?: string | null;
    } | null;
};

export type GetCardQueryVariables = {
    id: string;
};

export type GetCardQuery = {
    getCard?: {
        __typename: 'Card';
        id: string;
        user_id: string;
        deck?: {
            __typename: 'Deck';
            id: string;
            user_id: string;
            name: string;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        sentence: string;
        meaning: string;
        image?: string | null;
        etymology?: string | null;
        next_answer_date?: string | null;
        previous_answer_date?: string | null;
        retention_state: boolean;
        savings_score: number;
        createdAt?: string | null;
        updatedAt?: string | null;
        deckCardsId?: string | null;
    } | null;
};

export type ListCardsQueryVariables = {
    filter?: ModelCardFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListCardsQuery = {
    listCards?: {
        __typename: 'ModelCardConnection';
        items: Array<
            {
                __typename: 'Card';
                id: string;
                user_id: string;
                sentence: string;
                meaning: string;
                image?: string | null;
                etymology?: string | null;
                next_answer_date?: string | null;
                previous_answer_date?: string | null;
                retention_state: boolean;
                savings_score: number;
                createdAt?: string | null;
                updatedAt?: string | null;
                deckCardsId?: string | null;
            } | null
        >;
        nextToken?: string | null;
    } | null;
};

export type DecksByUser_idAndUpdatedAtQueryVariables = {
    user_id: string;
    updatedAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelDeckFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type DecksByUser_idAndUpdatedAtQuery = {
    decksByUser_idAndUpdatedAt?: {
        __typename: 'ModelDeckConnection';
        items: Array<
            {
                __typename: 'Deck';
                id: string;
                user_id: string;
                name: string;
                cards: { items: []; };
                createdAt?: string | null;
                updatedAt?: string | null;
            } | null
        >;
        nextToken?: string | null;
    } | null;
};

export type OnCreateDeckSubscriptionVariables = {
    filter?: ModelSubscriptionDeckFilterInput | null;
};

export type OnCreateDeckSubscription = {
    onCreateDeck?: {
        __typename: 'Deck';
        id: string;
        user_id: string;
        cards?: {
            __typename: 'ModelCardConnection';
            nextToken?: string | null;
        } | null;
        name: string;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnUpdateDeckSubscriptionVariables = {
    filter?: ModelSubscriptionDeckFilterInput | null;
};

export type OnUpdateDeckSubscription = {
    onUpdateDeck?: {
        __typename: 'Deck';
        id: string;
        user_id: string;
        cards?: {
            __typename: 'ModelCardConnection';
            nextToken?: string | null;
        } | null;
        name: string;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnDeleteDeckSubscriptionVariables = {
    filter?: ModelSubscriptionDeckFilterInput | null;
};

export type OnDeleteDeckSubscription = {
    onDeleteDeck?: {
        __typename: 'Deck';
        id: string;
        user_id: string;
        cards?: {
            __typename: 'ModelCardConnection';
            nextToken?: string | null;
        } | null;
        name: string;
        createdAt?: string | null;
        updatedAt?: string | null;
    } | null;
};

export type OnCreateCardSubscriptionVariables = {
    filter?: ModelSubscriptionCardFilterInput | null;
};

export type OnCreateCardSubscription = {
    onCreateCard?: {
        __typename: 'Card';
        id: string;
        user_id: string;
        deck?: {
            __typename: 'Deck';
            id: string;
            user_id: string;
            name: string;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        sentence: string;
        meaning: string;
        image?: string | null;
        etymology?: string | null;
        next_answer_date?: string | null;
        previous_answer_date?: string | null;
        retention_state: boolean;
        savings_score: number;
        createdAt?: string | null;
        updatedAt?: string | null;
        deckCardsId?: string | null;
    } | null;
};

export type OnUpdateCardSubscriptionVariables = {
    filter?: ModelSubscriptionCardFilterInput | null;
};

export type OnUpdateCardSubscription = {
    onUpdateCard?: {
        __typename: 'Card';
        id: string;
        user_id: string;
        deck?: {
            __typename: 'Deck';
            id: string;
            user_id: string;
            name: string;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        sentence: string;
        meaning: string;
        image?: string | null;
        etymology?: string | null;
        next_answer_date?: string | null;
        previous_answer_date?: string | null;
        retention_state: boolean;
        savings_score: number;
        createdAt?: string | null;
        updatedAt?: string | null;
        deckCardsId?: string | null;
    } | null;
};

export type OnDeleteCardSubscriptionVariables = {
    filter?: ModelSubscriptionCardFilterInput | null;
};

export type OnDeleteCardSubscription = {
    onDeleteCard?: {
        __typename: 'Card';
        id: string;
        user_id: string;
        deck?: {
            __typename: 'Deck';
            id: string;
            user_id: string;
            name: string;
            createdAt?: string | null;
            updatedAt?: string | null;
        } | null;
        sentence: string;
        meaning: string;
        image?: string | null;
        etymology?: string | null;
        next_answer_date?: string | null;
        previous_answer_date?: string | null;
        retention_state: boolean;
        savings_score: number;
        createdAt?: string | null;
        updatedAt?: string | null;
        deckCardsId?: string | null;
    } | null;
};
