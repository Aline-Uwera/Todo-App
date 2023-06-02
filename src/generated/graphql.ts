import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  aal_level: { input: any; output: any; }
  bigint: { input: any; output: any; }
  code_challenge_method: { input: any; output: any; }
  factor_status: { input: any; output: any; }
  factor_type: { input: any; output: any; }
  inet: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "aal_level". All fields are combined with logical 'AND'. */
export type Aal_Level_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['aal_level']['input']>;
  _gt?: InputMaybe<Scalars['aal_level']['input']>;
  _gte?: InputMaybe<Scalars['aal_level']['input']>;
  _in?: InputMaybe<Array<Scalars['aal_level']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['aal_level']['input']>;
  _lte?: InputMaybe<Scalars['aal_level']['input']>;
  _neq?: InputMaybe<Scalars['aal_level']['input']>;
  _nin?: InputMaybe<Array<Scalars['aal_level']['input']>>;
};

/** Auth: Audit trail for user actions. */
export type Auth_Audit_Log_Entries = {
  __typename?: 'auth_audit_log_entries';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  instance_id?: Maybe<Scalars['uuid']['output']>;
  ip_address: Scalars['String']['output'];
  payload?: Maybe<Scalars['json']['output']>;
};


/** Auth: Audit trail for user actions. */
export type Auth_Audit_Log_EntriesPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.audit_log_entries" */
export type Auth_Audit_Log_Entries_Aggregate = {
  __typename?: 'auth_audit_log_entries_aggregate';
  aggregate?: Maybe<Auth_Audit_Log_Entries_Aggregate_Fields>;
  nodes: Array<Auth_Audit_Log_Entries>;
};

/** aggregate fields of "auth.audit_log_entries" */
export type Auth_Audit_Log_Entries_Aggregate_Fields = {
  __typename?: 'auth_audit_log_entries_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Audit_Log_Entries_Max_Fields>;
  min?: Maybe<Auth_Audit_Log_Entries_Min_Fields>;
};


/** aggregate fields of "auth.audit_log_entries" */
export type Auth_Audit_Log_Entries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Audit_Log_Entries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.audit_log_entries". All fields are combined with a logical 'AND'. */
export type Auth_Audit_Log_Entries_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Audit_Log_Entries_Bool_Exp>>;
  _not?: InputMaybe<Auth_Audit_Log_Entries_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Audit_Log_Entries_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  ip_address?: InputMaybe<String_Comparison_Exp>;
  payload?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.audit_log_entries" */
export enum Auth_Audit_Log_Entries_Constraint {
  /** unique or primary key constraint on columns "id" */
  AuditLogEntriesPkey = 'audit_log_entries_pkey'
}

/** input type for inserting data into table "auth.audit_log_entries" */
export type Auth_Audit_Log_Entries_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Auth_Audit_Log_Entries_Max_Fields = {
  __typename?: 'auth_audit_log_entries_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Audit_Log_Entries_Min_Fields = {
  __typename?: 'auth_audit_log_entries_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.audit_log_entries" */
export type Auth_Audit_Log_Entries_Mutation_Response = {
  __typename?: 'auth_audit_log_entries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Audit_Log_Entries>;
};

/** on_conflict condition type for table "auth.audit_log_entries" */
export type Auth_Audit_Log_Entries_On_Conflict = {
  constraint: Auth_Audit_Log_Entries_Constraint;
  update_columns?: Array<Auth_Audit_Log_Entries_Update_Column>;
  where?: InputMaybe<Auth_Audit_Log_Entries_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.audit_log_entries". */
export type Auth_Audit_Log_Entries_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  ip_address?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.audit_log_entries */
export type Auth_Audit_Log_Entries_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.audit_log_entries" */
export enum Auth_Audit_Log_Entries_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  Payload = 'payload'
}

/** input type for updating data in table "auth.audit_log_entries" */
export type Auth_Audit_Log_Entries_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['json']['input']>;
};

/** Streaming cursor of the table "auth_audit_log_entries" */
export type Auth_Audit_Log_Entries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Audit_Log_Entries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Audit_Log_Entries_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['json']['input']>;
};

/** update columns of table "auth.audit_log_entries" */
export enum Auth_Audit_Log_Entries_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  Payload = 'payload'
}

export type Auth_Audit_Log_Entries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Audit_Log_Entries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Audit_Log_Entries_Bool_Exp;
};

/** stores metadata for pkce logins */
export type Auth_Flow_State = {
  __typename?: 'auth_flow_state';
  auth_code: Scalars['String']['output'];
  auth_code_issued_at?: Maybe<Scalars['timestamptz']['output']>;
  authentication_method: Scalars['String']['output'];
  code_challenge: Scalars['String']['output'];
  code_challenge_method: Scalars['code_challenge_method']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  provider_access_token?: Maybe<Scalars['String']['output']>;
  provider_refresh_token?: Maybe<Scalars['String']['output']>;
  provider_type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "auth.flow_state" */
export type Auth_Flow_State_Aggregate = {
  __typename?: 'auth_flow_state_aggregate';
  aggregate?: Maybe<Auth_Flow_State_Aggregate_Fields>;
  nodes: Array<Auth_Flow_State>;
};

/** aggregate fields of "auth.flow_state" */
export type Auth_Flow_State_Aggregate_Fields = {
  __typename?: 'auth_flow_state_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Flow_State_Max_Fields>;
  min?: Maybe<Auth_Flow_State_Min_Fields>;
};


/** aggregate fields of "auth.flow_state" */
export type Auth_Flow_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Flow_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.flow_state". All fields are combined with a logical 'AND'. */
export type Auth_Flow_State_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Flow_State_Bool_Exp>>;
  _not?: InputMaybe<Auth_Flow_State_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Flow_State_Bool_Exp>>;
  auth_code?: InputMaybe<String_Comparison_Exp>;
  auth_code_issued_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  authentication_method?: InputMaybe<String_Comparison_Exp>;
  code_challenge?: InputMaybe<String_Comparison_Exp>;
  code_challenge_method?: InputMaybe<Code_Challenge_Method_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider_access_token?: InputMaybe<String_Comparison_Exp>;
  provider_refresh_token?: InputMaybe<String_Comparison_Exp>;
  provider_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.flow_state" */
export enum Auth_Flow_State_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowStatePkey = 'flow_state_pkey'
}

/** input type for inserting data into table "auth.flow_state" */
export type Auth_Flow_State_Insert_Input = {
  auth_code?: InputMaybe<Scalars['String']['input']>;
  auth_code_issued_at?: InputMaybe<Scalars['timestamptz']['input']>;
  authentication_method?: InputMaybe<Scalars['String']['input']>;
  code_challenge?: InputMaybe<Scalars['String']['input']>;
  code_challenge_method?: InputMaybe<Scalars['code_challenge_method']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_access_token?: InputMaybe<Scalars['String']['input']>;
  provider_refresh_token?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Flow_State_Max_Fields = {
  __typename?: 'auth_flow_state_max_fields';
  auth_code?: Maybe<Scalars['String']['output']>;
  auth_code_issued_at?: Maybe<Scalars['timestamptz']['output']>;
  authentication_method?: Maybe<Scalars['String']['output']>;
  code_challenge?: Maybe<Scalars['String']['output']>;
  code_challenge_method?: Maybe<Scalars['code_challenge_method']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  provider_access_token?: Maybe<Scalars['String']['output']>;
  provider_refresh_token?: Maybe<Scalars['String']['output']>;
  provider_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Auth_Flow_State_Min_Fields = {
  __typename?: 'auth_flow_state_min_fields';
  auth_code?: Maybe<Scalars['String']['output']>;
  auth_code_issued_at?: Maybe<Scalars['timestamptz']['output']>;
  authentication_method?: Maybe<Scalars['String']['output']>;
  code_challenge?: Maybe<Scalars['String']['output']>;
  code_challenge_method?: Maybe<Scalars['code_challenge_method']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  provider_access_token?: Maybe<Scalars['String']['output']>;
  provider_refresh_token?: Maybe<Scalars['String']['output']>;
  provider_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.flow_state" */
export type Auth_Flow_State_Mutation_Response = {
  __typename?: 'auth_flow_state_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Flow_State>;
};

/** on_conflict condition type for table "auth.flow_state" */
export type Auth_Flow_State_On_Conflict = {
  constraint: Auth_Flow_State_Constraint;
  update_columns?: Array<Auth_Flow_State_Update_Column>;
  where?: InputMaybe<Auth_Flow_State_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.flow_state". */
export type Auth_Flow_State_Order_By = {
  auth_code?: InputMaybe<Order_By>;
  auth_code_issued_at?: InputMaybe<Order_By>;
  authentication_method?: InputMaybe<Order_By>;
  code_challenge?: InputMaybe<Order_By>;
  code_challenge_method?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_access_token?: InputMaybe<Order_By>;
  provider_refresh_token?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.flow_state */
export type Auth_Flow_State_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.flow_state" */
export enum Auth_Flow_State_Select_Column {
  /** column name */
  AuthCode = 'auth_code',
  /** column name */
  AuthCodeIssuedAt = 'auth_code_issued_at',
  /** column name */
  AuthenticationMethod = 'authentication_method',
  /** column name */
  CodeChallenge = 'code_challenge',
  /** column name */
  CodeChallengeMethod = 'code_challenge_method',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccessToken = 'provider_access_token',
  /** column name */
  ProviderRefreshToken = 'provider_refresh_token',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.flow_state" */
export type Auth_Flow_State_Set_Input = {
  auth_code?: InputMaybe<Scalars['String']['input']>;
  auth_code_issued_at?: InputMaybe<Scalars['timestamptz']['input']>;
  authentication_method?: InputMaybe<Scalars['String']['input']>;
  code_challenge?: InputMaybe<Scalars['String']['input']>;
  code_challenge_method?: InputMaybe<Scalars['code_challenge_method']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_access_token?: InputMaybe<Scalars['String']['input']>;
  provider_refresh_token?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_flow_state" */
export type Auth_Flow_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Flow_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Flow_State_Stream_Cursor_Value_Input = {
  auth_code?: InputMaybe<Scalars['String']['input']>;
  auth_code_issued_at?: InputMaybe<Scalars['timestamptz']['input']>;
  authentication_method?: InputMaybe<Scalars['String']['input']>;
  code_challenge?: InputMaybe<Scalars['String']['input']>;
  code_challenge_method?: InputMaybe<Scalars['code_challenge_method']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_access_token?: InputMaybe<Scalars['String']['input']>;
  provider_refresh_token?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.flow_state" */
export enum Auth_Flow_State_Update_Column {
  /** column name */
  AuthCode = 'auth_code',
  /** column name */
  AuthCodeIssuedAt = 'auth_code_issued_at',
  /** column name */
  AuthenticationMethod = 'authentication_method',
  /** column name */
  CodeChallenge = 'code_challenge',
  /** column name */
  CodeChallengeMethod = 'code_challenge_method',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccessToken = 'provider_access_token',
  /** column name */
  ProviderRefreshToken = 'provider_refresh_token',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Flow_State_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Flow_State_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Flow_State_Bool_Exp;
};

/** Auth: Stores identities associated to a user. */
export type Auth_Identities = {
  __typename?: 'auth_identities';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Auth: Email is a generated column that references the optional email property in the identity_data */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  identity_data: Scalars['jsonb']['output'];
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  provider: Scalars['String']['output'];
  provider_id: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id: Scalars['uuid']['output'];
};


/** Auth: Stores identities associated to a user. */
export type Auth_IdentitiesIdentity_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.identities" */
export type Auth_Identities_Aggregate = {
  __typename?: 'auth_identities_aggregate';
  aggregate?: Maybe<Auth_Identities_Aggregate_Fields>;
  nodes: Array<Auth_Identities>;
};

/** aggregate fields of "auth.identities" */
export type Auth_Identities_Aggregate_Fields = {
  __typename?: 'auth_identities_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Identities_Max_Fields>;
  min?: Maybe<Auth_Identities_Min_Fields>;
};


/** aggregate fields of "auth.identities" */
export type Auth_Identities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Identities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Identities_Append_Input = {
  identity_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.identities". All fields are combined with a logical 'AND'. */
export type Auth_Identities_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Identities_Bool_Exp>>;
  _not?: InputMaybe<Auth_Identities_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Identities_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  identity_data?: InputMaybe<Jsonb_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  provider_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.identities" */
export enum Auth_Identities_Constraint {
  /** unique or primary key constraint on columns "id" */
  IdentitiesPkey = 'identities_pkey',
  /** unique or primary key constraint on columns "provider", "provider_id" */
  IdentitiesProviderIdProviderUnique = 'identities_provider_id_provider_unique'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Identities_Delete_At_Path_Input = {
  identity_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Identities_Delete_Elem_Input = {
  identity_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Identities_Delete_Key_Input = {
  identity_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.identities" */
export type Auth_Identities_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identity_data?: InputMaybe<Scalars['jsonb']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Identities_Max_Fields = {
  __typename?: 'auth_identities_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Auth: Email is a generated column that references the optional email property in the identity_data */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Auth_Identities_Min_Fields = {
  __typename?: 'auth_identities_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Auth: Email is a generated column that references the optional email property in the identity_data */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.identities" */
export type Auth_Identities_Mutation_Response = {
  __typename?: 'auth_identities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Identities>;
};

/** on_conflict condition type for table "auth.identities" */
export type Auth_Identities_On_Conflict = {
  constraint: Auth_Identities_Constraint;
  update_columns?: Array<Auth_Identities_Update_Column>;
  where?: InputMaybe<Auth_Identities_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.identities". */
export type Auth_Identities_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identity_data?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.identities */
export type Auth_Identities_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Identities_Prepend_Input = {
  identity_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.identities" */
export enum Auth_Identities_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityData = 'identity_data',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.identities" */
export type Auth_Identities_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identity_data?: InputMaybe<Scalars['jsonb']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_identities" */
export type Auth_Identities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Identities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Identities_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Auth: Email is a generated column that references the optional email property in the identity_data */
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identity_data?: InputMaybe<Scalars['jsonb']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.identities" */
export enum Auth_Identities_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityData = 'identity_data',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Identities_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Identities_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Identities_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Identities_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Identities_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Identities_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Identities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Identities_Bool_Exp;
};

/** Auth: Manages users across multiple sites. */
export type Auth_Instances = {
  __typename?: 'auth_instances';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  raw_base_config?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  uuid?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "auth.instances" */
export type Auth_Instances_Aggregate = {
  __typename?: 'auth_instances_aggregate';
  aggregate?: Maybe<Auth_Instances_Aggregate_Fields>;
  nodes: Array<Auth_Instances>;
};

/** aggregate fields of "auth.instances" */
export type Auth_Instances_Aggregate_Fields = {
  __typename?: 'auth_instances_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Instances_Max_Fields>;
  min?: Maybe<Auth_Instances_Min_Fields>;
};


/** aggregate fields of "auth.instances" */
export type Auth_Instances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Instances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.instances". All fields are combined with a logical 'AND'. */
export type Auth_Instances_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Instances_Bool_Exp>>;
  _not?: InputMaybe<Auth_Instances_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Instances_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  raw_base_config?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.instances" */
export enum Auth_Instances_Constraint {
  /** unique or primary key constraint on columns "id" */
  InstancesPkey = 'instances_pkey'
}

/** input type for inserting data into table "auth.instances" */
export type Auth_Instances_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  raw_base_config?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uuid?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Instances_Max_Fields = {
  __typename?: 'auth_instances_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  raw_base_config?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  uuid?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Auth_Instances_Min_Fields = {
  __typename?: 'auth_instances_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  raw_base_config?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  uuid?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.instances" */
export type Auth_Instances_Mutation_Response = {
  __typename?: 'auth_instances_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Instances>;
};

/** on_conflict condition type for table "auth.instances" */
export type Auth_Instances_On_Conflict = {
  constraint: Auth_Instances_Constraint;
  update_columns?: Array<Auth_Instances_Update_Column>;
  where?: InputMaybe<Auth_Instances_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.instances". */
export type Auth_Instances_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raw_base_config?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.instances */
export type Auth_Instances_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.instances" */
export enum Auth_Instances_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RawBaseConfig = 'raw_base_config',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "auth.instances" */
export type Auth_Instances_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  raw_base_config?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uuid?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_instances" */
export type Auth_Instances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Instances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Instances_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  raw_base_config?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  uuid?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.instances" */
export enum Auth_Instances_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RawBaseConfig = 'raw_base_config',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

export type Auth_Instances_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Instances_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Instances_Bool_Exp;
};

/** auth: stores authenticator method reference claims for multi factor authentication */
export type Auth_Mfa_Amr_Claims = {
  __typename?: 'auth_mfa_amr_claims';
  authentication_method: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  session_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "auth.mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_Aggregate = {
  __typename?: 'auth_mfa_amr_claims_aggregate';
  aggregate?: Maybe<Auth_Mfa_Amr_Claims_Aggregate_Fields>;
  nodes: Array<Auth_Mfa_Amr_Claims>;
};

/** aggregate fields of "auth.mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_Aggregate_Fields = {
  __typename?: 'auth_mfa_amr_claims_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Mfa_Amr_Claims_Max_Fields>;
  min?: Maybe<Auth_Mfa_Amr_Claims_Min_Fields>;
};


/** aggregate fields of "auth.mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.mfa_amr_claims". All fields are combined with a logical 'AND'. */
export type Auth_Mfa_Amr_Claims_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Bool_Exp>>;
  _not?: InputMaybe<Auth_Mfa_Amr_Claims_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Bool_Exp>>;
  authentication_method?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  session_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.mfa_amr_claims" */
export enum Auth_Mfa_Amr_Claims_Constraint {
  /** unique or primary key constraint on columns "id" */
  AmrIdPk = 'amr_id_pk',
  /** unique or primary key constraint on columns "session_id", "authentication_method" */
  MfaAmrClaimsSessionIdAuthenticationMethodPkey = 'mfa_amr_claims_session_id_authentication_method_pkey'
}

/** input type for inserting data into table "auth.mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_Insert_Input = {
  authentication_method?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Mfa_Amr_Claims_Max_Fields = {
  __typename?: 'auth_mfa_amr_claims_max_fields';
  authentication_method?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Mfa_Amr_Claims_Min_Fields = {
  __typename?: 'auth_mfa_amr_claims_min_fields';
  authentication_method?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_Mutation_Response = {
  __typename?: 'auth_mfa_amr_claims_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Mfa_Amr_Claims>;
};

/** on_conflict condition type for table "auth.mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_On_Conflict = {
  constraint: Auth_Mfa_Amr_Claims_Constraint;
  update_columns?: Array<Auth_Mfa_Amr_Claims_Update_Column>;
  where?: InputMaybe<Auth_Mfa_Amr_Claims_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.mfa_amr_claims". */
export type Auth_Mfa_Amr_Claims_Order_By = {
  authentication_method?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.mfa_amr_claims */
export type Auth_Mfa_Amr_Claims_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.mfa_amr_claims" */
export enum Auth_Mfa_Amr_Claims_Select_Column {
  /** column name */
  AuthenticationMethod = 'authentication_method',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_Set_Input = {
  authentication_method?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "auth_mfa_amr_claims" */
export type Auth_Mfa_Amr_Claims_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Mfa_Amr_Claims_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Mfa_Amr_Claims_Stream_Cursor_Value_Input = {
  authentication_method?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.mfa_amr_claims" */
export enum Auth_Mfa_Amr_Claims_Update_Column {
  /** column name */
  AuthenticationMethod = 'authentication_method',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Mfa_Amr_Claims_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Mfa_Amr_Claims_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Mfa_Amr_Claims_Bool_Exp;
};

/** auth: stores metadata about challenge requests made */
export type Auth_Mfa_Challenges = {
  __typename?: 'auth_mfa_challenges';
  created_at: Scalars['timestamptz']['output'];
  factor_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  ip_address: Scalars['inet']['output'];
  verified_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "auth.mfa_challenges" */
export type Auth_Mfa_Challenges_Aggregate = {
  __typename?: 'auth_mfa_challenges_aggregate';
  aggregate?: Maybe<Auth_Mfa_Challenges_Aggregate_Fields>;
  nodes: Array<Auth_Mfa_Challenges>;
};

/** aggregate fields of "auth.mfa_challenges" */
export type Auth_Mfa_Challenges_Aggregate_Fields = {
  __typename?: 'auth_mfa_challenges_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Mfa_Challenges_Max_Fields>;
  min?: Maybe<Auth_Mfa_Challenges_Min_Fields>;
};


/** aggregate fields of "auth.mfa_challenges" */
export type Auth_Mfa_Challenges_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Mfa_Challenges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.mfa_challenges". All fields are combined with a logical 'AND'. */
export type Auth_Mfa_Challenges_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Mfa_Challenges_Bool_Exp>>;
  _not?: InputMaybe<Auth_Mfa_Challenges_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Mfa_Challenges_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  factor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ip_address?: InputMaybe<Inet_Comparison_Exp>;
  verified_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.mfa_challenges" */
export enum Auth_Mfa_Challenges_Constraint {
  /** unique or primary key constraint on columns "id" */
  MfaChallengesPkey = 'mfa_challenges_pkey'
}

/** input type for inserting data into table "auth.mfa_challenges" */
export type Auth_Mfa_Challenges_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip_address?: InputMaybe<Scalars['inet']['input']>;
  verified_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Mfa_Challenges_Max_Fields = {
  __typename?: 'auth_mfa_challenges_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  factor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  verified_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Mfa_Challenges_Min_Fields = {
  __typename?: 'auth_mfa_challenges_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  factor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  verified_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.mfa_challenges" */
export type Auth_Mfa_Challenges_Mutation_Response = {
  __typename?: 'auth_mfa_challenges_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Mfa_Challenges>;
};

/** on_conflict condition type for table "auth.mfa_challenges" */
export type Auth_Mfa_Challenges_On_Conflict = {
  constraint: Auth_Mfa_Challenges_Constraint;
  update_columns?: Array<Auth_Mfa_Challenges_Update_Column>;
  where?: InputMaybe<Auth_Mfa_Challenges_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.mfa_challenges". */
export type Auth_Mfa_Challenges_Order_By = {
  created_at?: InputMaybe<Order_By>;
  factor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_address?: InputMaybe<Order_By>;
  verified_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.mfa_challenges */
export type Auth_Mfa_Challenges_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.mfa_challenges" */
export enum Auth_Mfa_Challenges_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FactorId = 'factor_id',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  VerifiedAt = 'verified_at'
}

/** input type for updating data in table "auth.mfa_challenges" */
export type Auth_Mfa_Challenges_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip_address?: InputMaybe<Scalars['inet']['input']>;
  verified_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "auth_mfa_challenges" */
export type Auth_Mfa_Challenges_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Mfa_Challenges_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Mfa_Challenges_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip_address?: InputMaybe<Scalars['inet']['input']>;
  verified_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.mfa_challenges" */
export enum Auth_Mfa_Challenges_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FactorId = 'factor_id',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  VerifiedAt = 'verified_at'
}

export type Auth_Mfa_Challenges_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Mfa_Challenges_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Mfa_Challenges_Bool_Exp;
};

/** auth: stores metadata about factors */
export type Auth_Mfa_Factors = {
  __typename?: 'auth_mfa_factors';
  created_at: Scalars['timestamptz']['output'];
  factor_type: Scalars['factor_type']['output'];
  friendly_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  secret?: Maybe<Scalars['String']['output']>;
  status: Scalars['factor_status']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.mfa_factors" */
export type Auth_Mfa_Factors_Aggregate = {
  __typename?: 'auth_mfa_factors_aggregate';
  aggregate?: Maybe<Auth_Mfa_Factors_Aggregate_Fields>;
  nodes: Array<Auth_Mfa_Factors>;
};

/** aggregate fields of "auth.mfa_factors" */
export type Auth_Mfa_Factors_Aggregate_Fields = {
  __typename?: 'auth_mfa_factors_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Mfa_Factors_Max_Fields>;
  min?: Maybe<Auth_Mfa_Factors_Min_Fields>;
};


/** aggregate fields of "auth.mfa_factors" */
export type Auth_Mfa_Factors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Mfa_Factors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.mfa_factors". All fields are combined with a logical 'AND'. */
export type Auth_Mfa_Factors_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Mfa_Factors_Bool_Exp>>;
  _not?: InputMaybe<Auth_Mfa_Factors_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Mfa_Factors_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  factor_type?: InputMaybe<Factor_Type_Comparison_Exp>;
  friendly_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  secret?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Factor_Status_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.mfa_factors" */
export enum Auth_Mfa_Factors_Constraint {
  /** unique or primary key constraint on columns "id" */
  MfaFactorsPkey = 'mfa_factors_pkey',
  /** unique or primary key constraint on columns "user_id", "friendly_name" */
  MfaFactorsUserFriendlyNameUnique = 'mfa_factors_user_friendly_name_unique'
}

/** input type for inserting data into table "auth.mfa_factors" */
export type Auth_Mfa_Factors_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_type?: InputMaybe<Scalars['factor_type']['input']>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['factor_status']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Mfa_Factors_Max_Fields = {
  __typename?: 'auth_mfa_factors_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  factor_type?: Maybe<Scalars['factor_type']['output']>;
  friendly_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['factor_status']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Auth_Mfa_Factors_Min_Fields = {
  __typename?: 'auth_mfa_factors_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  factor_type?: Maybe<Scalars['factor_type']['output']>;
  friendly_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['factor_status']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.mfa_factors" */
export type Auth_Mfa_Factors_Mutation_Response = {
  __typename?: 'auth_mfa_factors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Mfa_Factors>;
};

/** on_conflict condition type for table "auth.mfa_factors" */
export type Auth_Mfa_Factors_On_Conflict = {
  constraint: Auth_Mfa_Factors_Constraint;
  update_columns?: Array<Auth_Mfa_Factors_Update_Column>;
  where?: InputMaybe<Auth_Mfa_Factors_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.mfa_factors". */
export type Auth_Mfa_Factors_Order_By = {
  created_at?: InputMaybe<Order_By>;
  factor_type?: InputMaybe<Order_By>;
  friendly_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  secret?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.mfa_factors */
export type Auth_Mfa_Factors_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.mfa_factors" */
export enum Auth_Mfa_Factors_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FactorType = 'factor_type',
  /** column name */
  FriendlyName = 'friendly_name',
  /** column name */
  Id = 'id',
  /** column name */
  Secret = 'secret',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.mfa_factors" */
export type Auth_Mfa_Factors_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_type?: InputMaybe<Scalars['factor_type']['input']>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['factor_status']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_mfa_factors" */
export type Auth_Mfa_Factors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Mfa_Factors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Mfa_Factors_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_type?: InputMaybe<Scalars['factor_type']['input']>;
  friendly_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['factor_status']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.mfa_factors" */
export enum Auth_Mfa_Factors_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FactorType = 'factor_type',
  /** column name */
  FriendlyName = 'friendly_name',
  /** column name */
  Id = 'id',
  /** column name */
  Secret = 'secret',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Mfa_Factors_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Mfa_Factors_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Mfa_Factors_Bool_Exp;
};

/** Auth: Store of tokens used to refresh JWT tokens once they expire. */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  instance_id?: Maybe<Scalars['uuid']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  revoked?: Maybe<Scalars['Boolean']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  avg?: Maybe<Auth_Refresh_Tokens_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
  stddev?: Maybe<Auth_Refresh_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Refresh_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Refresh_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Refresh_Tokens_Sum_Fields>;
  var_pop?: Maybe<Auth_Refresh_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Refresh_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Auth_Refresh_Tokens_Variance_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Auth_Refresh_Tokens_Avg_Fields = {
  __typename?: 'auth_refresh_tokens_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  parent?: InputMaybe<String_Comparison_Exp>;
  revoked?: InputMaybe<Boolean_Comparison_Exp>;
  session_id?: InputMaybe<Uuid_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey',
  /** unique or primary key constraint on columns "token" */
  RefreshTokensTokenUnique = 'refresh_tokens_token_unique'
}

/** input type for incrementing numeric columns in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns?: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type Auth_Refresh_Tokens_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  revoked?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  Parent = 'parent',
  /** column name */
  Revoked = 'revoked',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Auth_Refresh_Tokens_Stddev_Fields = {
  __typename?: 'auth_refresh_tokens_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Refresh_Tokens_Stddev_Pop_Fields = {
  __typename?: 'auth_refresh_tokens_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Refresh_Tokens_Stddev_Samp_Fields = {
  __typename?: 'auth_refresh_tokens_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "auth_refresh_tokens" */
export type Auth_Refresh_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Refresh_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Refresh_Tokens_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Auth_Refresh_Tokens_Sum_Fields = {
  __typename?: 'auth_refresh_tokens_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  Parent = 'parent',
  /** column name */
  Revoked = 'revoked',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Refresh_Tokens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Refresh_Tokens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Refresh_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Refresh_Tokens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Refresh_Tokens_Var_Pop_Fields = {
  __typename?: 'auth_refresh_tokens_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Auth_Refresh_Tokens_Var_Samp_Fields = {
  __typename?: 'auth_refresh_tokens_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Auth_Refresh_Tokens_Variance_Fields = {
  __typename?: 'auth_refresh_tokens_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Auth: Manages SAML Identity Provider connections. */
export type Auth_Saml_Providers = {
  __typename?: 'auth_saml_providers';
  attribute_mapping?: Maybe<Scalars['jsonb']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  metadata_url?: Maybe<Scalars['String']['output']>;
  metadata_xml: Scalars['String']['output'];
  name_id_format?: Maybe<Scalars['String']['output']>;
  sso_provider_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Auth: Manages SAML Identity Provider connections. */
export type Auth_Saml_ProvidersAttribute_MappingArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.saml_providers" */
export type Auth_Saml_Providers_Aggregate = {
  __typename?: 'auth_saml_providers_aggregate';
  aggregate?: Maybe<Auth_Saml_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Saml_Providers>;
};

/** aggregate fields of "auth.saml_providers" */
export type Auth_Saml_Providers_Aggregate_Fields = {
  __typename?: 'auth_saml_providers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Saml_Providers_Max_Fields>;
  min?: Maybe<Auth_Saml_Providers_Min_Fields>;
};


/** aggregate fields of "auth.saml_providers" */
export type Auth_Saml_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Saml_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Saml_Providers_Append_Input = {
  attribute_mapping?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.saml_providers". All fields are combined with a logical 'AND'. */
export type Auth_Saml_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Saml_Providers_Bool_Exp>>;
  _not?: InputMaybe<Auth_Saml_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Saml_Providers_Bool_Exp>>;
  attribute_mapping?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata_url?: InputMaybe<String_Comparison_Exp>;
  metadata_xml?: InputMaybe<String_Comparison_Exp>;
  name_id_format?: InputMaybe<String_Comparison_Exp>;
  sso_provider_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.saml_providers" */
export enum Auth_Saml_Providers_Constraint {
  /** unique or primary key constraint on columns "entity_id" */
  SamlProvidersEntityIdKey = 'saml_providers_entity_id_key',
  /** unique or primary key constraint on columns "id" */
  SamlProvidersPkey = 'saml_providers_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Saml_Providers_Delete_At_Path_Input = {
  attribute_mapping?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Saml_Providers_Delete_Elem_Input = {
  attribute_mapping?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Saml_Providers_Delete_Key_Input = {
  attribute_mapping?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.saml_providers" */
export type Auth_Saml_Providers_Insert_Input = {
  attribute_mapping?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata_url?: InputMaybe<Scalars['String']['input']>;
  metadata_xml?: InputMaybe<Scalars['String']['input']>;
  name_id_format?: InputMaybe<Scalars['String']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Saml_Providers_Max_Fields = {
  __typename?: 'auth_saml_providers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  metadata_url?: Maybe<Scalars['String']['output']>;
  metadata_xml?: Maybe<Scalars['String']['output']>;
  name_id_format?: Maybe<Scalars['String']['output']>;
  sso_provider_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Saml_Providers_Min_Fields = {
  __typename?: 'auth_saml_providers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  metadata_url?: Maybe<Scalars['String']['output']>;
  metadata_xml?: Maybe<Scalars['String']['output']>;
  name_id_format?: Maybe<Scalars['String']['output']>;
  sso_provider_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.saml_providers" */
export type Auth_Saml_Providers_Mutation_Response = {
  __typename?: 'auth_saml_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Saml_Providers>;
};

/** on_conflict condition type for table "auth.saml_providers" */
export type Auth_Saml_Providers_On_Conflict = {
  constraint: Auth_Saml_Providers_Constraint;
  update_columns?: Array<Auth_Saml_Providers_Update_Column>;
  where?: InputMaybe<Auth_Saml_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.saml_providers". */
export type Auth_Saml_Providers_Order_By = {
  attribute_mapping?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata_url?: InputMaybe<Order_By>;
  metadata_xml?: InputMaybe<Order_By>;
  name_id_format?: InputMaybe<Order_By>;
  sso_provider_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.saml_providers */
export type Auth_Saml_Providers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Saml_Providers_Prepend_Input = {
  attribute_mapping?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.saml_providers" */
export enum Auth_Saml_Providers_Select_Column {
  /** column name */
  AttributeMapping = 'attribute_mapping',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataUrl = 'metadata_url',
  /** column name */
  MetadataXml = 'metadata_xml',
  /** column name */
  NameIdFormat = 'name_id_format',
  /** column name */
  SsoProviderId = 'sso_provider_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.saml_providers" */
export type Auth_Saml_Providers_Set_Input = {
  attribute_mapping?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata_url?: InputMaybe<Scalars['String']['input']>;
  metadata_xml?: InputMaybe<Scalars['String']['input']>;
  name_id_format?: InputMaybe<Scalars['String']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "auth_saml_providers" */
export type Auth_Saml_Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Saml_Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Saml_Providers_Stream_Cursor_Value_Input = {
  attribute_mapping?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata_url?: InputMaybe<Scalars['String']['input']>;
  metadata_xml?: InputMaybe<Scalars['String']['input']>;
  name_id_format?: InputMaybe<Scalars['String']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.saml_providers" */
export enum Auth_Saml_Providers_Update_Column {
  /** column name */
  AttributeMapping = 'attribute_mapping',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataUrl = 'metadata_url',
  /** column name */
  MetadataXml = 'metadata_xml',
  /** column name */
  NameIdFormat = 'name_id_format',
  /** column name */
  SsoProviderId = 'sso_provider_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Saml_Providers_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Saml_Providers_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Saml_Providers_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Saml_Providers_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Saml_Providers_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Saml_Providers_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Saml_Providers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Saml_Providers_Bool_Exp;
};

/** Auth: Contains SAML Relay State information for each Service Provider initiated login. */
export type Auth_Saml_Relay_States = {
  __typename?: 'auth_saml_relay_states';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  flow_state_id?: Maybe<Scalars['uuid']['output']>;
  for_email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  redirect_to?: Maybe<Scalars['String']['output']>;
  request_id: Scalars['String']['output'];
  sso_provider_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "auth.saml_relay_states" */
export type Auth_Saml_Relay_States_Aggregate = {
  __typename?: 'auth_saml_relay_states_aggregate';
  aggregate?: Maybe<Auth_Saml_Relay_States_Aggregate_Fields>;
  nodes: Array<Auth_Saml_Relay_States>;
};

/** aggregate fields of "auth.saml_relay_states" */
export type Auth_Saml_Relay_States_Aggregate_Fields = {
  __typename?: 'auth_saml_relay_states_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Saml_Relay_States_Max_Fields>;
  min?: Maybe<Auth_Saml_Relay_States_Min_Fields>;
};


/** aggregate fields of "auth.saml_relay_states" */
export type Auth_Saml_Relay_States_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Saml_Relay_States_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.saml_relay_states". All fields are combined with a logical 'AND'. */
export type Auth_Saml_Relay_States_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Saml_Relay_States_Bool_Exp>>;
  _not?: InputMaybe<Auth_Saml_Relay_States_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Saml_Relay_States_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_state_id?: InputMaybe<Uuid_Comparison_Exp>;
  for_email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  redirect_to?: InputMaybe<String_Comparison_Exp>;
  request_id?: InputMaybe<String_Comparison_Exp>;
  sso_provider_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.saml_relay_states" */
export enum Auth_Saml_Relay_States_Constraint {
  /** unique or primary key constraint on columns "id" */
  SamlRelayStatesPkey = 'saml_relay_states_pkey'
}

/** input type for inserting data into table "auth.saml_relay_states" */
export type Auth_Saml_Relay_States_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  flow_state_id?: InputMaybe<Scalars['uuid']['input']>;
  for_email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  redirect_to?: InputMaybe<Scalars['String']['input']>;
  request_id?: InputMaybe<Scalars['String']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Saml_Relay_States_Max_Fields = {
  __typename?: 'auth_saml_relay_states_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  flow_state_id?: Maybe<Scalars['uuid']['output']>;
  for_email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  redirect_to?: Maybe<Scalars['String']['output']>;
  request_id?: Maybe<Scalars['String']['output']>;
  sso_provider_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Saml_Relay_States_Min_Fields = {
  __typename?: 'auth_saml_relay_states_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  flow_state_id?: Maybe<Scalars['uuid']['output']>;
  for_email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  redirect_to?: Maybe<Scalars['String']['output']>;
  request_id?: Maybe<Scalars['String']['output']>;
  sso_provider_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.saml_relay_states" */
export type Auth_Saml_Relay_States_Mutation_Response = {
  __typename?: 'auth_saml_relay_states_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Saml_Relay_States>;
};

/** on_conflict condition type for table "auth.saml_relay_states" */
export type Auth_Saml_Relay_States_On_Conflict = {
  constraint: Auth_Saml_Relay_States_Constraint;
  update_columns?: Array<Auth_Saml_Relay_States_Update_Column>;
  where?: InputMaybe<Auth_Saml_Relay_States_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.saml_relay_states". */
export type Auth_Saml_Relay_States_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_state_id?: InputMaybe<Order_By>;
  for_email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  redirect_to?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  sso_provider_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.saml_relay_states */
export type Auth_Saml_Relay_States_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.saml_relay_states" */
export enum Auth_Saml_Relay_States_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowStateId = 'flow_state_id',
  /** column name */
  ForEmail = 'for_email',
  /** column name */
  Id = 'id',
  /** column name */
  RedirectTo = 'redirect_to',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  SsoProviderId = 'sso_provider_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.saml_relay_states" */
export type Auth_Saml_Relay_States_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  flow_state_id?: InputMaybe<Scalars['uuid']['input']>;
  for_email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  redirect_to?: InputMaybe<Scalars['String']['input']>;
  request_id?: InputMaybe<Scalars['String']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "auth_saml_relay_states" */
export type Auth_Saml_Relay_States_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Saml_Relay_States_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Saml_Relay_States_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  flow_state_id?: InputMaybe<Scalars['uuid']['input']>;
  for_email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  redirect_to?: InputMaybe<Scalars['String']['input']>;
  request_id?: InputMaybe<Scalars['String']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.saml_relay_states" */
export enum Auth_Saml_Relay_States_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowStateId = 'flow_state_id',
  /** column name */
  ForEmail = 'for_email',
  /** column name */
  Id = 'id',
  /** column name */
  RedirectTo = 'redirect_to',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  SsoProviderId = 'sso_provider_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Saml_Relay_States_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Saml_Relay_States_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Saml_Relay_States_Bool_Exp;
};

/** Auth: Stores session data associated to a user. */
export type Auth_Sessions = {
  __typename?: 'auth_sessions';
  aal?: Maybe<Scalars['aal_level']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  factor_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  ip?: Maybe<Scalars['inet']['output']>;
  /** Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired. */
  not_after?: Maybe<Scalars['timestamptz']['output']>;
  refreshed_at?: Maybe<Scalars['timestamp']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.sessions" */
export type Auth_Sessions_Aggregate = {
  __typename?: 'auth_sessions_aggregate';
  aggregate?: Maybe<Auth_Sessions_Aggregate_Fields>;
  nodes: Array<Auth_Sessions>;
};

/** aggregate fields of "auth.sessions" */
export type Auth_Sessions_Aggregate_Fields = {
  __typename?: 'auth_sessions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Sessions_Max_Fields>;
  min?: Maybe<Auth_Sessions_Min_Fields>;
};


/** aggregate fields of "auth.sessions" */
export type Auth_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.sessions". All fields are combined with a logical 'AND'. */
export type Auth_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Sessions_Bool_Exp>>;
  _not?: InputMaybe<Auth_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Sessions_Bool_Exp>>;
  aal?: InputMaybe<Aal_Level_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  factor_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ip?: InputMaybe<Inet_Comparison_Exp>;
  not_after?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_agent?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.sessions" */
export enum Auth_Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "auth.sessions" */
export type Auth_Sessions_Insert_Input = {
  aal?: InputMaybe<Scalars['aal_level']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['inet']['input']>;
  /** Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired. */
  not_after?: InputMaybe<Scalars['timestamptz']['input']>;
  refreshed_at?: InputMaybe<Scalars['timestamp']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_agent?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Sessions_Max_Fields = {
  __typename?: 'auth_sessions_max_fields';
  aal?: Maybe<Scalars['aal_level']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  factor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired. */
  not_after?: Maybe<Scalars['timestamptz']['output']>;
  refreshed_at?: Maybe<Scalars['timestamp']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Auth_Sessions_Min_Fields = {
  __typename?: 'auth_sessions_min_fields';
  aal?: Maybe<Scalars['aal_level']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  factor_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired. */
  not_after?: Maybe<Scalars['timestamptz']['output']>;
  refreshed_at?: Maybe<Scalars['timestamp']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.sessions" */
export type Auth_Sessions_Mutation_Response = {
  __typename?: 'auth_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Sessions>;
};

/** on_conflict condition type for table "auth.sessions" */
export type Auth_Sessions_On_Conflict = {
  constraint: Auth_Sessions_Constraint;
  update_columns?: Array<Auth_Sessions_Update_Column>;
  where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.sessions". */
export type Auth_Sessions_Order_By = {
  aal?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  factor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  not_after?: InputMaybe<Order_By>;
  refreshed_at?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_agent?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.sessions */
export type Auth_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.sessions" */
export enum Auth_Sessions_Select_Column {
  /** column name */
  Aal = 'aal',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FactorId = 'factor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  NotAfter = 'not_after',
  /** column name */
  RefreshedAt = 'refreshed_at',
  /** column name */
  Tag = 'tag',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserAgent = 'user_agent',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.sessions" */
export type Auth_Sessions_Set_Input = {
  aal?: InputMaybe<Scalars['aal_level']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['inet']['input']>;
  /** Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired. */
  not_after?: InputMaybe<Scalars['timestamptz']['input']>;
  refreshed_at?: InputMaybe<Scalars['timestamp']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_agent?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_sessions" */
export type Auth_Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Sessions_Stream_Cursor_Value_Input = {
  aal?: InputMaybe<Scalars['aal_level']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  factor_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['inet']['input']>;
  /** Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired. */
  not_after?: InputMaybe<Scalars['timestamptz']['input']>;
  refreshed_at?: InputMaybe<Scalars['timestamp']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_agent?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.sessions" */
export enum Auth_Sessions_Update_Column {
  /** column name */
  Aal = 'aal',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FactorId = 'factor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  NotAfter = 'not_after',
  /** column name */
  RefreshedAt = 'refreshed_at',
  /** column name */
  Tag = 'tag',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserAgent = 'user_agent',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Sessions_Bool_Exp;
};

/** Auth: Manages SSO email address domain mapping to an SSO Identity Provider. */
export type Auth_Sso_Domains = {
  __typename?: 'auth_sso_domains';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  domain: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  sso_provider_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "auth.sso_domains" */
export type Auth_Sso_Domains_Aggregate = {
  __typename?: 'auth_sso_domains_aggregate';
  aggregate?: Maybe<Auth_Sso_Domains_Aggregate_Fields>;
  nodes: Array<Auth_Sso_Domains>;
};

/** aggregate fields of "auth.sso_domains" */
export type Auth_Sso_Domains_Aggregate_Fields = {
  __typename?: 'auth_sso_domains_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Sso_Domains_Max_Fields>;
  min?: Maybe<Auth_Sso_Domains_Min_Fields>;
};


/** aggregate fields of "auth.sso_domains" */
export type Auth_Sso_Domains_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Sso_Domains_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.sso_domains". All fields are combined with a logical 'AND'. */
export type Auth_Sso_Domains_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Sso_Domains_Bool_Exp>>;
  _not?: InputMaybe<Auth_Sso_Domains_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Sso_Domains_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sso_provider_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.sso_domains" */
export enum Auth_Sso_Domains_Constraint {
  /** unique or primary key constraint on columns  */
  SsoDomainsDomainIdx = 'sso_domains_domain_idx',
  /** unique or primary key constraint on columns "id" */
  SsoDomainsPkey = 'sso_domains_pkey'
}

/** input type for inserting data into table "auth.sso_domains" */
export type Auth_Sso_Domains_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Sso_Domains_Max_Fields = {
  __typename?: 'auth_sso_domains_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sso_provider_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Sso_Domains_Min_Fields = {
  __typename?: 'auth_sso_domains_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sso_provider_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.sso_domains" */
export type Auth_Sso_Domains_Mutation_Response = {
  __typename?: 'auth_sso_domains_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Sso_Domains>;
};

/** on_conflict condition type for table "auth.sso_domains" */
export type Auth_Sso_Domains_On_Conflict = {
  constraint: Auth_Sso_Domains_Constraint;
  update_columns?: Array<Auth_Sso_Domains_Update_Column>;
  where?: InputMaybe<Auth_Sso_Domains_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.sso_domains". */
export type Auth_Sso_Domains_Order_By = {
  created_at?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sso_provider_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.sso_domains */
export type Auth_Sso_Domains_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.sso_domains" */
export enum Auth_Sso_Domains_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  SsoProviderId = 'sso_provider_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.sso_domains" */
export type Auth_Sso_Domains_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "auth_sso_domains" */
export type Auth_Sso_Domains_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Sso_Domains_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Sso_Domains_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sso_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.sso_domains" */
export enum Auth_Sso_Domains_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  SsoProviderId = 'sso_provider_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Sso_Domains_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Sso_Domains_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Sso_Domains_Bool_Exp;
};

/** Auth: Manages SSO identity provider information; see saml_providers for SAML. */
export type Auth_Sso_Providers = {
  __typename?: 'auth_sso_providers';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code. */
  resource_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "auth.sso_providers" */
export type Auth_Sso_Providers_Aggregate = {
  __typename?: 'auth_sso_providers_aggregate';
  aggregate?: Maybe<Auth_Sso_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Sso_Providers>;
};

/** aggregate fields of "auth.sso_providers" */
export type Auth_Sso_Providers_Aggregate_Fields = {
  __typename?: 'auth_sso_providers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Sso_Providers_Max_Fields>;
  min?: Maybe<Auth_Sso_Providers_Min_Fields>;
};


/** aggregate fields of "auth.sso_providers" */
export type Auth_Sso_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Sso_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.sso_providers". All fields are combined with a logical 'AND'. */
export type Auth_Sso_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Sso_Providers_Bool_Exp>>;
  _not?: InputMaybe<Auth_Sso_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Sso_Providers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  resource_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.sso_providers" */
export enum Auth_Sso_Providers_Constraint {
  /** unique or primary key constraint on columns "id" */
  SsoProvidersPkey = 'sso_providers_pkey',
  /** unique or primary key constraint on columns  */
  SsoProvidersResourceIdIdx = 'sso_providers_resource_id_idx'
}

/** input type for inserting data into table "auth.sso_providers" */
export type Auth_Sso_Providers_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code. */
  resource_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Sso_Providers_Max_Fields = {
  __typename?: 'auth_sso_providers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code. */
  resource_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Sso_Providers_Min_Fields = {
  __typename?: 'auth_sso_providers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code. */
  resource_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.sso_providers" */
export type Auth_Sso_Providers_Mutation_Response = {
  __typename?: 'auth_sso_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Sso_Providers>;
};

/** on_conflict condition type for table "auth.sso_providers" */
export type Auth_Sso_Providers_On_Conflict = {
  constraint: Auth_Sso_Providers_Constraint;
  update_columns?: Array<Auth_Sso_Providers_Update_Column>;
  where?: InputMaybe<Auth_Sso_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.sso_providers". */
export type Auth_Sso_Providers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.sso_providers */
export type Auth_Sso_Providers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.sso_providers" */
export enum Auth_Sso_Providers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.sso_providers" */
export type Auth_Sso_Providers_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code. */
  resource_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "auth_sso_providers" */
export type Auth_Sso_Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Sso_Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Sso_Providers_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code. */
  resource_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.sso_providers" */
export enum Auth_Sso_Providers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Sso_Providers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Sso_Providers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Sso_Providers_Bool_Exp;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_Users = {
  __typename?: 'auth_users';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  is_anonymous: Scalars['Boolean']['output'];
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user: Scalars['Boolean']['output'];
  is_super_admin?: Maybe<Scalars['Boolean']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  raw_app_meta_data?: Maybe<Scalars['jsonb']['output']>;
  raw_user_meta_data?: Maybe<Scalars['jsonb']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_App_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_User_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Append_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  aud?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_change?: InputMaybe<String_Comparison_Exp>;
  email_change_confirm_status?: InputMaybe<Smallint_Comparison_Exp>;
  email_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email_change_token_current?: InputMaybe<String_Comparison_Exp>;
  email_change_token_new?: InputMaybe<String_Comparison_Exp>;
  email_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  invited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  is_sso_user?: InputMaybe<Boolean_Comparison_Exp>;
  is_super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_change?: InputMaybe<String_Comparison_Exp>;
  phone_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone_change_token?: InputMaybe<String_Comparison_Exp>;
  phone_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  raw_app_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_user_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  reauthentication_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  reauthentication_token?: InputMaybe<String_Comparison_Exp>;
  recovery_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  recovery_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint on columns "confirmation_token" */
  ConfirmationTokenIdx = 'confirmation_token_idx',
  /** unique or primary key constraint on columns "email_change_token_current" */
  EmailChangeTokenCurrentIdx = 'email_change_token_current_idx',
  /** unique or primary key constraint on columns "email_change_token_new" */
  EmailChangeTokenNewIdx = 'email_change_token_new_idx',
  /** unique or primary key constraint on columns "reauthentication_token" */
  ReauthenticationTokenIdx = 'reauthentication_token_idx',
  /** unique or primary key constraint on columns "recovery_token" */
  RecoveryTokenIdx = 'recovery_token_idx',
  /** unique or primary key constraint on columns "email" */
  UsersEmailPartialKey = 'users_email_partial_key',
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Users_Delete_At_Path_Input = {
  raw_app_meta_data?: InputMaybe<Array<Scalars['String']['input']>>;
  raw_user_meta_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Users_Delete_Elem_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['Int']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Users_Delete_Key_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['String']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** on_conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  aud?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_change?: InputMaybe<Order_By>;
  email_change_confirm_status?: InputMaybe<Order_By>;
  email_change_sent_at?: InputMaybe<Order_By>;
  email_change_token_current?: InputMaybe<Order_By>;
  email_change_token_new?: InputMaybe<Order_By>;
  email_confirmed_at?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  invited_at?: InputMaybe<Order_By>;
  is_anonymous?: InputMaybe<Order_By>;
  is_sso_user?: InputMaybe<Order_By>;
  is_super_admin?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_change?: InputMaybe<Order_By>;
  phone_change_sent_at?: InputMaybe<Order_By>;
  phone_change_token?: InputMaybe<Order_By>;
  phone_confirmed_at?: InputMaybe<Order_By>;
  raw_app_meta_data?: InputMaybe<Order_By>;
  raw_user_meta_data?: InputMaybe<Order_By>;
  reauthentication_sent_at?: InputMaybe<Order_By>;
  reauthentication_token?: InputMaybe<Order_By>;
  recovery_sent_at?: InputMaybe<Order_By>;
  recovery_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Prepend_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "auth_users" */
export type Auth_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Users_Stream_Cursor_Value_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "code_challenge_method". All fields are combined with logical 'AND'. */
export type Code_Challenge_Method_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['code_challenge_method']['input']>;
  _gt?: InputMaybe<Scalars['code_challenge_method']['input']>;
  _gte?: InputMaybe<Scalars['code_challenge_method']['input']>;
  _in?: InputMaybe<Array<Scalars['code_challenge_method']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['code_challenge_method']['input']>;
  _lte?: InputMaybe<Scalars['code_challenge_method']['input']>;
  _neq?: InputMaybe<Scalars['code_challenge_method']['input']>;
  _nin?: InputMaybe<Array<Scalars['code_challenge_method']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "factor_status". All fields are combined with logical 'AND'. */
export type Factor_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['factor_status']['input']>;
  _gt?: InputMaybe<Scalars['factor_status']['input']>;
  _gte?: InputMaybe<Scalars['factor_status']['input']>;
  _in?: InputMaybe<Array<Scalars['factor_status']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['factor_status']['input']>;
  _lte?: InputMaybe<Scalars['factor_status']['input']>;
  _neq?: InputMaybe<Scalars['factor_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['factor_status']['input']>>;
};

/** Boolean expression to compare columns of type "factor_type". All fields are combined with logical 'AND'. */
export type Factor_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['factor_type']['input']>;
  _gt?: InputMaybe<Scalars['factor_type']['input']>;
  _gte?: InputMaybe<Scalars['factor_type']['input']>;
  _in?: InputMaybe<Array<Scalars['factor_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['factor_type']['input']>;
  _lte?: InputMaybe<Scalars['factor_type']['input']>;
  _neq?: InputMaybe<Scalars['factor_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['factor_type']['input']>>;
};

/** Boolean expression to compare columns of type "inet". All fields are combined with logical 'AND'. */
export type Inet_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['inet']['input']>;
  _gt?: InputMaybe<Scalars['inet']['input']>;
  _gte?: InputMaybe<Scalars['inet']['input']>;
  _in?: InputMaybe<Array<Scalars['inet']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['inet']['input']>;
  _lte?: InputMaybe<Scalars['inet']['input']>;
  _neq?: InputMaybe<Scalars['inet']['input']>;
  _nin?: InputMaybe<Array<Scalars['inet']['input']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.audit_log_entries" */
  delete_auth_audit_log_entries?: Maybe<Auth_Audit_Log_Entries_Mutation_Response>;
  /** delete single row from the table: "auth.audit_log_entries" */
  delete_auth_audit_log_entries_by_pk?: Maybe<Auth_Audit_Log_Entries>;
  /** delete data from the table: "auth.flow_state" */
  delete_auth_flow_state?: Maybe<Auth_Flow_State_Mutation_Response>;
  /** delete single row from the table: "auth.flow_state" */
  delete_auth_flow_state_by_pk?: Maybe<Auth_Flow_State>;
  /** delete data from the table: "auth.identities" */
  delete_auth_identities?: Maybe<Auth_Identities_Mutation_Response>;
  /** delete single row from the table: "auth.identities" */
  delete_auth_identities_by_pk?: Maybe<Auth_Identities>;
  /** delete data from the table: "auth.instances" */
  delete_auth_instances?: Maybe<Auth_Instances_Mutation_Response>;
  /** delete single row from the table: "auth.instances" */
  delete_auth_instances_by_pk?: Maybe<Auth_Instances>;
  /** delete data from the table: "auth.mfa_amr_claims" */
  delete_auth_mfa_amr_claims?: Maybe<Auth_Mfa_Amr_Claims_Mutation_Response>;
  /** delete single row from the table: "auth.mfa_amr_claims" */
  delete_auth_mfa_amr_claims_by_pk?: Maybe<Auth_Mfa_Amr_Claims>;
  /** delete data from the table: "auth.mfa_challenges" */
  delete_auth_mfa_challenges?: Maybe<Auth_Mfa_Challenges_Mutation_Response>;
  /** delete single row from the table: "auth.mfa_challenges" */
  delete_auth_mfa_challenges_by_pk?: Maybe<Auth_Mfa_Challenges>;
  /** delete data from the table: "auth.mfa_factors" */
  delete_auth_mfa_factors?: Maybe<Auth_Mfa_Factors_Mutation_Response>;
  /** delete single row from the table: "auth.mfa_factors" */
  delete_auth_mfa_factors_by_pk?: Maybe<Auth_Mfa_Factors>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.saml_providers" */
  delete_auth_saml_providers?: Maybe<Auth_Saml_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.saml_providers" */
  delete_auth_saml_providers_by_pk?: Maybe<Auth_Saml_Providers>;
  /** delete data from the table: "auth.saml_relay_states" */
  delete_auth_saml_relay_states?: Maybe<Auth_Saml_Relay_States_Mutation_Response>;
  /** delete single row from the table: "auth.saml_relay_states" */
  delete_auth_saml_relay_states_by_pk?: Maybe<Auth_Saml_Relay_States>;
  /** delete data from the table: "auth.sessions" */
  delete_auth_sessions?: Maybe<Auth_Sessions_Mutation_Response>;
  /** delete single row from the table: "auth.sessions" */
  delete_auth_sessions_by_pk?: Maybe<Auth_Sessions>;
  /** delete data from the table: "auth.sso_domains" */
  delete_auth_sso_domains?: Maybe<Auth_Sso_Domains_Mutation_Response>;
  /** delete single row from the table: "auth.sso_domains" */
  delete_auth_sso_domains_by_pk?: Maybe<Auth_Sso_Domains>;
  /** delete data from the table: "auth.sso_providers" */
  delete_auth_sso_providers?: Maybe<Auth_Sso_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.sso_providers" */
  delete_auth_sso_providers_by_pk?: Maybe<Auth_Sso_Providers>;
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "auth.audit_log_entries" */
  insert_auth_audit_log_entries?: Maybe<Auth_Audit_Log_Entries_Mutation_Response>;
  /** insert a single row into the table: "auth.audit_log_entries" */
  insert_auth_audit_log_entries_one?: Maybe<Auth_Audit_Log_Entries>;
  /** insert data into the table: "auth.flow_state" */
  insert_auth_flow_state?: Maybe<Auth_Flow_State_Mutation_Response>;
  /** insert a single row into the table: "auth.flow_state" */
  insert_auth_flow_state_one?: Maybe<Auth_Flow_State>;
  /** insert data into the table: "auth.identities" */
  insert_auth_identities?: Maybe<Auth_Identities_Mutation_Response>;
  /** insert a single row into the table: "auth.identities" */
  insert_auth_identities_one?: Maybe<Auth_Identities>;
  /** insert data into the table: "auth.instances" */
  insert_auth_instances?: Maybe<Auth_Instances_Mutation_Response>;
  /** insert a single row into the table: "auth.instances" */
  insert_auth_instances_one?: Maybe<Auth_Instances>;
  /** insert data into the table: "auth.mfa_amr_claims" */
  insert_auth_mfa_amr_claims?: Maybe<Auth_Mfa_Amr_Claims_Mutation_Response>;
  /** insert a single row into the table: "auth.mfa_amr_claims" */
  insert_auth_mfa_amr_claims_one?: Maybe<Auth_Mfa_Amr_Claims>;
  /** insert data into the table: "auth.mfa_challenges" */
  insert_auth_mfa_challenges?: Maybe<Auth_Mfa_Challenges_Mutation_Response>;
  /** insert a single row into the table: "auth.mfa_challenges" */
  insert_auth_mfa_challenges_one?: Maybe<Auth_Mfa_Challenges>;
  /** insert data into the table: "auth.mfa_factors" */
  insert_auth_mfa_factors?: Maybe<Auth_Mfa_Factors_Mutation_Response>;
  /** insert a single row into the table: "auth.mfa_factors" */
  insert_auth_mfa_factors_one?: Maybe<Auth_Mfa_Factors>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.saml_providers" */
  insert_auth_saml_providers?: Maybe<Auth_Saml_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.saml_providers" */
  insert_auth_saml_providers_one?: Maybe<Auth_Saml_Providers>;
  /** insert data into the table: "auth.saml_relay_states" */
  insert_auth_saml_relay_states?: Maybe<Auth_Saml_Relay_States_Mutation_Response>;
  /** insert a single row into the table: "auth.saml_relay_states" */
  insert_auth_saml_relay_states_one?: Maybe<Auth_Saml_Relay_States>;
  /** insert data into the table: "auth.sessions" */
  insert_auth_sessions?: Maybe<Auth_Sessions_Mutation_Response>;
  /** insert a single row into the table: "auth.sessions" */
  insert_auth_sessions_one?: Maybe<Auth_Sessions>;
  /** insert data into the table: "auth.sso_domains" */
  insert_auth_sso_domains?: Maybe<Auth_Sso_Domains_Mutation_Response>;
  /** insert a single row into the table: "auth.sso_domains" */
  insert_auth_sso_domains_one?: Maybe<Auth_Sso_Domains>;
  /** insert data into the table: "auth.sso_providers" */
  insert_auth_sso_providers?: Maybe<Auth_Sso_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.sso_providers" */
  insert_auth_sso_providers_one?: Maybe<Auth_Sso_Providers>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "auth.audit_log_entries" */
  update_auth_audit_log_entries?: Maybe<Auth_Audit_Log_Entries_Mutation_Response>;
  /** update single row of the table: "auth.audit_log_entries" */
  update_auth_audit_log_entries_by_pk?: Maybe<Auth_Audit_Log_Entries>;
  /** update multiples rows of table: "auth.audit_log_entries" */
  update_auth_audit_log_entries_many?: Maybe<Array<Maybe<Auth_Audit_Log_Entries_Mutation_Response>>>;
  /** update data of the table: "auth.flow_state" */
  update_auth_flow_state?: Maybe<Auth_Flow_State_Mutation_Response>;
  /** update single row of the table: "auth.flow_state" */
  update_auth_flow_state_by_pk?: Maybe<Auth_Flow_State>;
  /** update multiples rows of table: "auth.flow_state" */
  update_auth_flow_state_many?: Maybe<Array<Maybe<Auth_Flow_State_Mutation_Response>>>;
  /** update data of the table: "auth.identities" */
  update_auth_identities?: Maybe<Auth_Identities_Mutation_Response>;
  /** update single row of the table: "auth.identities" */
  update_auth_identities_by_pk?: Maybe<Auth_Identities>;
  /** update multiples rows of table: "auth.identities" */
  update_auth_identities_many?: Maybe<Array<Maybe<Auth_Identities_Mutation_Response>>>;
  /** update data of the table: "auth.instances" */
  update_auth_instances?: Maybe<Auth_Instances_Mutation_Response>;
  /** update single row of the table: "auth.instances" */
  update_auth_instances_by_pk?: Maybe<Auth_Instances>;
  /** update multiples rows of table: "auth.instances" */
  update_auth_instances_many?: Maybe<Array<Maybe<Auth_Instances_Mutation_Response>>>;
  /** update data of the table: "auth.mfa_amr_claims" */
  update_auth_mfa_amr_claims?: Maybe<Auth_Mfa_Amr_Claims_Mutation_Response>;
  /** update single row of the table: "auth.mfa_amr_claims" */
  update_auth_mfa_amr_claims_by_pk?: Maybe<Auth_Mfa_Amr_Claims>;
  /** update multiples rows of table: "auth.mfa_amr_claims" */
  update_auth_mfa_amr_claims_many?: Maybe<Array<Maybe<Auth_Mfa_Amr_Claims_Mutation_Response>>>;
  /** update data of the table: "auth.mfa_challenges" */
  update_auth_mfa_challenges?: Maybe<Auth_Mfa_Challenges_Mutation_Response>;
  /** update single row of the table: "auth.mfa_challenges" */
  update_auth_mfa_challenges_by_pk?: Maybe<Auth_Mfa_Challenges>;
  /** update multiples rows of table: "auth.mfa_challenges" */
  update_auth_mfa_challenges_many?: Maybe<Array<Maybe<Auth_Mfa_Challenges_Mutation_Response>>>;
  /** update data of the table: "auth.mfa_factors" */
  update_auth_mfa_factors?: Maybe<Auth_Mfa_Factors_Mutation_Response>;
  /** update single row of the table: "auth.mfa_factors" */
  update_auth_mfa_factors_by_pk?: Maybe<Auth_Mfa_Factors>;
  /** update multiples rows of table: "auth.mfa_factors" */
  update_auth_mfa_factors_many?: Maybe<Array<Maybe<Auth_Mfa_Factors_Mutation_Response>>>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_many?: Maybe<Array<Maybe<Auth_Refresh_Tokens_Mutation_Response>>>;
  /** update data of the table: "auth.saml_providers" */
  update_auth_saml_providers?: Maybe<Auth_Saml_Providers_Mutation_Response>;
  /** update single row of the table: "auth.saml_providers" */
  update_auth_saml_providers_by_pk?: Maybe<Auth_Saml_Providers>;
  /** update multiples rows of table: "auth.saml_providers" */
  update_auth_saml_providers_many?: Maybe<Array<Maybe<Auth_Saml_Providers_Mutation_Response>>>;
  /** update data of the table: "auth.saml_relay_states" */
  update_auth_saml_relay_states?: Maybe<Auth_Saml_Relay_States_Mutation_Response>;
  /** update single row of the table: "auth.saml_relay_states" */
  update_auth_saml_relay_states_by_pk?: Maybe<Auth_Saml_Relay_States>;
  /** update multiples rows of table: "auth.saml_relay_states" */
  update_auth_saml_relay_states_many?: Maybe<Array<Maybe<Auth_Saml_Relay_States_Mutation_Response>>>;
  /** update data of the table: "auth.sessions" */
  update_auth_sessions?: Maybe<Auth_Sessions_Mutation_Response>;
  /** update single row of the table: "auth.sessions" */
  update_auth_sessions_by_pk?: Maybe<Auth_Sessions>;
  /** update multiples rows of table: "auth.sessions" */
  update_auth_sessions_many?: Maybe<Array<Maybe<Auth_Sessions_Mutation_Response>>>;
  /** update data of the table: "auth.sso_domains" */
  update_auth_sso_domains?: Maybe<Auth_Sso_Domains_Mutation_Response>;
  /** update single row of the table: "auth.sso_domains" */
  update_auth_sso_domains_by_pk?: Maybe<Auth_Sso_Domains>;
  /** update multiples rows of table: "auth.sso_domains" */
  update_auth_sso_domains_many?: Maybe<Array<Maybe<Auth_Sso_Domains_Mutation_Response>>>;
  /** update data of the table: "auth.sso_providers" */
  update_auth_sso_providers?: Maybe<Auth_Sso_Providers_Mutation_Response>;
  /** update single row of the table: "auth.sso_providers" */
  update_auth_sso_providers_by_pk?: Maybe<Auth_Sso_Providers>;
  /** update multiples rows of table: "auth.sso_providers" */
  update_auth_sso_providers_many?: Maybe<Array<Maybe<Auth_Sso_Providers_Mutation_Response>>>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update multiples rows of table: "auth.users" */
  update_auth_users_many?: Maybe<Array<Maybe<Auth_Users_Mutation_Response>>>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update multiples rows of table: "todos" */
  update_todos_many?: Maybe<Array<Maybe<Todos_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Audit_Log_EntriesArgs = {
  where: Auth_Audit_Log_Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Audit_Log_Entries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Flow_StateArgs = {
  where: Auth_Flow_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Flow_State_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_IdentitiesArgs = {
  where: Auth_Identities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Identities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_InstancesArgs = {
  where: Auth_Instances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Instances_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Mfa_Amr_ClaimsArgs = {
  where: Auth_Mfa_Amr_Claims_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Mfa_Amr_Claims_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Mfa_ChallengesArgs = {
  where: Auth_Mfa_Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Mfa_Challenges_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Mfa_FactorsArgs = {
  where: Auth_Mfa_Factors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Mfa_Factors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Saml_ProvidersArgs = {
  where: Auth_Saml_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Saml_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Saml_Relay_StatesArgs = {
  where: Auth_Saml_Relay_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Saml_Relay_States_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_SessionsArgs = {
  where: Auth_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Sessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Sso_DomainsArgs = {
  where: Auth_Sso_Domains_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Sso_Domains_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Sso_ProvidersArgs = {
  where: Auth_Sso_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Sso_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Audit_Log_EntriesArgs = {
  objects: Array<Auth_Audit_Log_Entries_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Audit_Log_Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Audit_Log_Entries_OneArgs = {
  object: Auth_Audit_Log_Entries_Insert_Input;
  on_conflict?: InputMaybe<Auth_Audit_Log_Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Flow_StateArgs = {
  objects: Array<Auth_Flow_State_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Flow_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Flow_State_OneArgs = {
  object: Auth_Flow_State_Insert_Input;
  on_conflict?: InputMaybe<Auth_Flow_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_IdentitiesArgs = {
  objects: Array<Auth_Identities_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Identities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Identities_OneArgs = {
  object: Auth_Identities_Insert_Input;
  on_conflict?: InputMaybe<Auth_Identities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_InstancesArgs = {
  objects: Array<Auth_Instances_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Instances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Instances_OneArgs = {
  object: Auth_Instances_Insert_Input;
  on_conflict?: InputMaybe<Auth_Instances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Mfa_Amr_ClaimsArgs = {
  objects: Array<Auth_Mfa_Amr_Claims_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Mfa_Amr_Claims_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Mfa_Amr_Claims_OneArgs = {
  object: Auth_Mfa_Amr_Claims_Insert_Input;
  on_conflict?: InputMaybe<Auth_Mfa_Amr_Claims_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Mfa_ChallengesArgs = {
  objects: Array<Auth_Mfa_Challenges_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Mfa_Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Mfa_Challenges_OneArgs = {
  object: Auth_Mfa_Challenges_Insert_Input;
  on_conflict?: InputMaybe<Auth_Mfa_Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Mfa_FactorsArgs = {
  objects: Array<Auth_Mfa_Factors_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Mfa_Factors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Mfa_Factors_OneArgs = {
  object: Auth_Mfa_Factors_Insert_Input;
  on_conflict?: InputMaybe<Auth_Mfa_Factors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Saml_ProvidersArgs = {
  objects: Array<Auth_Saml_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Saml_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Saml_Providers_OneArgs = {
  object: Auth_Saml_Providers_Insert_Input;
  on_conflict?: InputMaybe<Auth_Saml_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Saml_Relay_StatesArgs = {
  objects: Array<Auth_Saml_Relay_States_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Saml_Relay_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Saml_Relay_States_OneArgs = {
  object: Auth_Saml_Relay_States_Insert_Input;
  on_conflict?: InputMaybe<Auth_Saml_Relay_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_SessionsArgs = {
  objects: Array<Auth_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Sessions_OneArgs = {
  object: Auth_Sessions_Insert_Input;
  on_conflict?: InputMaybe<Auth_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Sso_DomainsArgs = {
  objects: Array<Auth_Sso_Domains_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Sso_Domains_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Sso_Domains_OneArgs = {
  object: Auth_Sso_Domains_Insert_Input;
  on_conflict?: InputMaybe<Auth_Sso_Domains_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Sso_ProvidersArgs = {
  objects: Array<Auth_Sso_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Sso_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Sso_Providers_OneArgs = {
  object: Auth_Sso_Providers_Insert_Input;
  on_conflict?: InputMaybe<Auth_Sso_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Audit_Log_EntriesArgs = {
  _set?: InputMaybe<Auth_Audit_Log_Entries_Set_Input>;
  where: Auth_Audit_Log_Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Audit_Log_Entries_By_PkArgs = {
  _set?: InputMaybe<Auth_Audit_Log_Entries_Set_Input>;
  pk_columns: Auth_Audit_Log_Entries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Audit_Log_Entries_ManyArgs = {
  updates: Array<Auth_Audit_Log_Entries_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Flow_StateArgs = {
  _set?: InputMaybe<Auth_Flow_State_Set_Input>;
  where: Auth_Flow_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Flow_State_By_PkArgs = {
  _set?: InputMaybe<Auth_Flow_State_Set_Input>;
  pk_columns: Auth_Flow_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Flow_State_ManyArgs = {
  updates: Array<Auth_Flow_State_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_IdentitiesArgs = {
  _append?: InputMaybe<Auth_Identities_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Identities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Identities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Identities_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Identities_Prepend_Input>;
  _set?: InputMaybe<Auth_Identities_Set_Input>;
  where: Auth_Identities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Identities_By_PkArgs = {
  _append?: InputMaybe<Auth_Identities_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Identities_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Identities_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Identities_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Identities_Prepend_Input>;
  _set?: InputMaybe<Auth_Identities_Set_Input>;
  pk_columns: Auth_Identities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Identities_ManyArgs = {
  updates: Array<Auth_Identities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_InstancesArgs = {
  _set?: InputMaybe<Auth_Instances_Set_Input>;
  where: Auth_Instances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Instances_By_PkArgs = {
  _set?: InputMaybe<Auth_Instances_Set_Input>;
  pk_columns: Auth_Instances_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Instances_ManyArgs = {
  updates: Array<Auth_Instances_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_Amr_ClaimsArgs = {
  _set?: InputMaybe<Auth_Mfa_Amr_Claims_Set_Input>;
  where: Auth_Mfa_Amr_Claims_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_Amr_Claims_By_PkArgs = {
  _set?: InputMaybe<Auth_Mfa_Amr_Claims_Set_Input>;
  pk_columns: Auth_Mfa_Amr_Claims_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_Amr_Claims_ManyArgs = {
  updates: Array<Auth_Mfa_Amr_Claims_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_ChallengesArgs = {
  _set?: InputMaybe<Auth_Mfa_Challenges_Set_Input>;
  where: Auth_Mfa_Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_Challenges_By_PkArgs = {
  _set?: InputMaybe<Auth_Mfa_Challenges_Set_Input>;
  pk_columns: Auth_Mfa_Challenges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_Challenges_ManyArgs = {
  updates: Array<Auth_Mfa_Challenges_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_FactorsArgs = {
  _set?: InputMaybe<Auth_Mfa_Factors_Set_Input>;
  where: Auth_Mfa_Factors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_Factors_By_PkArgs = {
  _set?: InputMaybe<Auth_Mfa_Factors_Set_Input>;
  pk_columns: Auth_Mfa_Factors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Mfa_Factors_ManyArgs = {
  updates: Array<Auth_Mfa_Factors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _inc?: InputMaybe<Auth_Refresh_Tokens_Inc_Input>;
  _set?: InputMaybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _inc?: InputMaybe<Auth_Refresh_Tokens_Inc_Input>;
  _set?: InputMaybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_ManyArgs = {
  updates: Array<Auth_Refresh_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Saml_ProvidersArgs = {
  _append?: InputMaybe<Auth_Saml_Providers_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Saml_Providers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Saml_Providers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Saml_Providers_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Saml_Providers_Prepend_Input>;
  _set?: InputMaybe<Auth_Saml_Providers_Set_Input>;
  where: Auth_Saml_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Saml_Providers_By_PkArgs = {
  _append?: InputMaybe<Auth_Saml_Providers_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Saml_Providers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Saml_Providers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Saml_Providers_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Saml_Providers_Prepend_Input>;
  _set?: InputMaybe<Auth_Saml_Providers_Set_Input>;
  pk_columns: Auth_Saml_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Saml_Providers_ManyArgs = {
  updates: Array<Auth_Saml_Providers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Saml_Relay_StatesArgs = {
  _set?: InputMaybe<Auth_Saml_Relay_States_Set_Input>;
  where: Auth_Saml_Relay_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Saml_Relay_States_By_PkArgs = {
  _set?: InputMaybe<Auth_Saml_Relay_States_Set_Input>;
  pk_columns: Auth_Saml_Relay_States_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Saml_Relay_States_ManyArgs = {
  updates: Array<Auth_Saml_Relay_States_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_SessionsArgs = {
  _set?: InputMaybe<Auth_Sessions_Set_Input>;
  where: Auth_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sessions_By_PkArgs = {
  _set?: InputMaybe<Auth_Sessions_Set_Input>;
  pk_columns: Auth_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sessions_ManyArgs = {
  updates: Array<Auth_Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sso_DomainsArgs = {
  _set?: InputMaybe<Auth_Sso_Domains_Set_Input>;
  where: Auth_Sso_Domains_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sso_Domains_By_PkArgs = {
  _set?: InputMaybe<Auth_Sso_Domains_Set_Input>;
  pk_columns: Auth_Sso_Domains_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sso_Domains_ManyArgs = {
  updates: Array<Auth_Sso_Domains_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sso_ProvidersArgs = {
  _set?: InputMaybe<Auth_Sso_Providers_Set_Input>;
  where: Auth_Sso_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sso_Providers_By_PkArgs = {
  _set?: InputMaybe<Auth_Sso_Providers_Set_Input>;
  pk_columns: Auth_Sso_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Sso_Providers_ManyArgs = {
  updates: Array<Auth_Sso_Providers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_ManyArgs = {
  updates: Array<Auth_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_ManyArgs = {
  updates: Array<Todos_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "email" */
  ProfilesEmailKey = 'profiles_email_key',
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password'
}

export type Profiles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profiles_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.audit_log_entries" */
  auth_audit_log_entries: Array<Auth_Audit_Log_Entries>;
  /** fetch aggregated fields from the table: "auth.audit_log_entries" */
  auth_audit_log_entries_aggregate: Auth_Audit_Log_Entries_Aggregate;
  /** fetch data from the table: "auth.audit_log_entries" using primary key columns */
  auth_audit_log_entries_by_pk?: Maybe<Auth_Audit_Log_Entries>;
  /** fetch data from the table: "auth.flow_state" */
  auth_flow_state: Array<Auth_Flow_State>;
  /** fetch aggregated fields from the table: "auth.flow_state" */
  auth_flow_state_aggregate: Auth_Flow_State_Aggregate;
  /** fetch data from the table: "auth.flow_state" using primary key columns */
  auth_flow_state_by_pk?: Maybe<Auth_Flow_State>;
  /** fetch data from the table: "auth.identities" */
  auth_identities: Array<Auth_Identities>;
  /** fetch aggregated fields from the table: "auth.identities" */
  auth_identities_aggregate: Auth_Identities_Aggregate;
  /** fetch data from the table: "auth.identities" using primary key columns */
  auth_identities_by_pk?: Maybe<Auth_Identities>;
  /** fetch data from the table: "auth.instances" */
  auth_instances: Array<Auth_Instances>;
  /** fetch aggregated fields from the table: "auth.instances" */
  auth_instances_aggregate: Auth_Instances_Aggregate;
  /** fetch data from the table: "auth.instances" using primary key columns */
  auth_instances_by_pk?: Maybe<Auth_Instances>;
  /** fetch data from the table: "auth.mfa_amr_claims" */
  auth_mfa_amr_claims: Array<Auth_Mfa_Amr_Claims>;
  /** fetch aggregated fields from the table: "auth.mfa_amr_claims" */
  auth_mfa_amr_claims_aggregate: Auth_Mfa_Amr_Claims_Aggregate;
  /** fetch data from the table: "auth.mfa_amr_claims" using primary key columns */
  auth_mfa_amr_claims_by_pk?: Maybe<Auth_Mfa_Amr_Claims>;
  /** fetch data from the table: "auth.mfa_challenges" */
  auth_mfa_challenges: Array<Auth_Mfa_Challenges>;
  /** fetch aggregated fields from the table: "auth.mfa_challenges" */
  auth_mfa_challenges_aggregate: Auth_Mfa_Challenges_Aggregate;
  /** fetch data from the table: "auth.mfa_challenges" using primary key columns */
  auth_mfa_challenges_by_pk?: Maybe<Auth_Mfa_Challenges>;
  /** fetch data from the table: "auth.mfa_factors" */
  auth_mfa_factors: Array<Auth_Mfa_Factors>;
  /** fetch aggregated fields from the table: "auth.mfa_factors" */
  auth_mfa_factors_aggregate: Auth_Mfa_Factors_Aggregate;
  /** fetch data from the table: "auth.mfa_factors" using primary key columns */
  auth_mfa_factors_by_pk?: Maybe<Auth_Mfa_Factors>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.saml_providers" */
  auth_saml_providers: Array<Auth_Saml_Providers>;
  /** fetch aggregated fields from the table: "auth.saml_providers" */
  auth_saml_providers_aggregate: Auth_Saml_Providers_Aggregate;
  /** fetch data from the table: "auth.saml_providers" using primary key columns */
  auth_saml_providers_by_pk?: Maybe<Auth_Saml_Providers>;
  /** fetch data from the table: "auth.saml_relay_states" */
  auth_saml_relay_states: Array<Auth_Saml_Relay_States>;
  /** fetch aggregated fields from the table: "auth.saml_relay_states" */
  auth_saml_relay_states_aggregate: Auth_Saml_Relay_States_Aggregate;
  /** fetch data from the table: "auth.saml_relay_states" using primary key columns */
  auth_saml_relay_states_by_pk?: Maybe<Auth_Saml_Relay_States>;
  /** fetch data from the table: "auth.sessions" */
  auth_sessions: Array<Auth_Sessions>;
  /** fetch aggregated fields from the table: "auth.sessions" */
  auth_sessions_aggregate: Auth_Sessions_Aggregate;
  /** fetch data from the table: "auth.sessions" using primary key columns */
  auth_sessions_by_pk?: Maybe<Auth_Sessions>;
  /** fetch data from the table: "auth.sso_domains" */
  auth_sso_domains: Array<Auth_Sso_Domains>;
  /** fetch aggregated fields from the table: "auth.sso_domains" */
  auth_sso_domains_aggregate: Auth_Sso_Domains_Aggregate;
  /** fetch data from the table: "auth.sso_domains" using primary key columns */
  auth_sso_domains_by_pk?: Maybe<Auth_Sso_Domains>;
  /** fetch data from the table: "auth.sso_providers" */
  auth_sso_providers: Array<Auth_Sso_Providers>;
  /** fetch aggregated fields from the table: "auth.sso_providers" */
  auth_sso_providers_aggregate: Auth_Sso_Providers_Aggregate;
  /** fetch data from the table: "auth.sso_providers" using primary key columns */
  auth_sso_providers_by_pk?: Maybe<Auth_Sso_Providers>;
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};


export type Query_RootAuth_Audit_Log_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Audit_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Audit_Log_Entries_Order_By>>;
  where?: InputMaybe<Auth_Audit_Log_Entries_Bool_Exp>;
};


export type Query_RootAuth_Audit_Log_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Audit_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Audit_Log_Entries_Order_By>>;
  where?: InputMaybe<Auth_Audit_Log_Entries_Bool_Exp>;
};


export type Query_RootAuth_Audit_Log_Entries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Flow_StateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Flow_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Flow_State_Order_By>>;
  where?: InputMaybe<Auth_Flow_State_Bool_Exp>;
};


export type Query_RootAuth_Flow_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Flow_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Flow_State_Order_By>>;
  where?: InputMaybe<Auth_Flow_State_Bool_Exp>;
};


export type Query_RootAuth_Flow_State_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_IdentitiesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Identities_Order_By>>;
  where?: InputMaybe<Auth_Identities_Bool_Exp>;
};


export type Query_RootAuth_Identities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Identities_Order_By>>;
  where?: InputMaybe<Auth_Identities_Bool_Exp>;
};


export type Query_RootAuth_Identities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_InstancesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Instances_Order_By>>;
  where?: InputMaybe<Auth_Instances_Bool_Exp>;
};


export type Query_RootAuth_Instances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Instances_Order_By>>;
  where?: InputMaybe<Auth_Instances_Bool_Exp>;
};


export type Query_RootAuth_Instances_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Mfa_Amr_ClaimsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Amr_Claims_Bool_Exp>;
};


export type Query_RootAuth_Mfa_Amr_Claims_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Amr_Claims_Bool_Exp>;
};


export type Query_RootAuth_Mfa_Amr_Claims_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Mfa_ChallengesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Challenges_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Challenges_Bool_Exp>;
};


export type Query_RootAuth_Mfa_Challenges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Challenges_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Challenges_Bool_Exp>;
};


export type Query_RootAuth_Mfa_Challenges_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Mfa_FactorsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Factors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Factors_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Factors_Bool_Exp>;
};


export type Query_RootAuth_Mfa_Factors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Factors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Factors_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Factors_Bool_Exp>;
};


export type Query_RootAuth_Mfa_Factors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootAuth_Saml_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Providers_Order_By>>;
  where?: InputMaybe<Auth_Saml_Providers_Bool_Exp>;
};


export type Query_RootAuth_Saml_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Providers_Order_By>>;
  where?: InputMaybe<Auth_Saml_Providers_Bool_Exp>;
};


export type Query_RootAuth_Saml_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Saml_Relay_StatesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Relay_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Relay_States_Order_By>>;
  where?: InputMaybe<Auth_Saml_Relay_States_Bool_Exp>;
};


export type Query_RootAuth_Saml_Relay_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Relay_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Relay_States_Order_By>>;
  where?: InputMaybe<Auth_Saml_Relay_States_Bool_Exp>;
};


export type Query_RootAuth_Saml_Relay_States_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_SessionsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
  where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};


export type Query_RootAuth_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
  where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};


export type Query_RootAuth_Sessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Sso_DomainsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Domains_Order_By>>;
  where?: InputMaybe<Auth_Sso_Domains_Bool_Exp>;
};


export type Query_RootAuth_Sso_Domains_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Domains_Order_By>>;
  where?: InputMaybe<Auth_Sso_Domains_Bool_Exp>;
};


export type Query_RootAuth_Sso_Domains_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Sso_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Providers_Order_By>>;
  where?: InputMaybe<Auth_Sso_Providers_Bool_Exp>;
};


export type Query_RootAuth_Sso_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Providers_Order_By>>;
  where?: InputMaybe<Auth_Sso_Providers_Bool_Exp>;
};


export type Query_RootAuth_Sso_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.audit_log_entries" */
  auth_audit_log_entries: Array<Auth_Audit_Log_Entries>;
  /** fetch aggregated fields from the table: "auth.audit_log_entries" */
  auth_audit_log_entries_aggregate: Auth_Audit_Log_Entries_Aggregate;
  /** fetch data from the table: "auth.audit_log_entries" using primary key columns */
  auth_audit_log_entries_by_pk?: Maybe<Auth_Audit_Log_Entries>;
  /** fetch data from the table in a streaming manner: "auth.audit_log_entries" */
  auth_audit_log_entries_stream: Array<Auth_Audit_Log_Entries>;
  /** fetch data from the table: "auth.flow_state" */
  auth_flow_state: Array<Auth_Flow_State>;
  /** fetch aggregated fields from the table: "auth.flow_state" */
  auth_flow_state_aggregate: Auth_Flow_State_Aggregate;
  /** fetch data from the table: "auth.flow_state" using primary key columns */
  auth_flow_state_by_pk?: Maybe<Auth_Flow_State>;
  /** fetch data from the table in a streaming manner: "auth.flow_state" */
  auth_flow_state_stream: Array<Auth_Flow_State>;
  /** fetch data from the table: "auth.identities" */
  auth_identities: Array<Auth_Identities>;
  /** fetch aggregated fields from the table: "auth.identities" */
  auth_identities_aggregate: Auth_Identities_Aggregate;
  /** fetch data from the table: "auth.identities" using primary key columns */
  auth_identities_by_pk?: Maybe<Auth_Identities>;
  /** fetch data from the table in a streaming manner: "auth.identities" */
  auth_identities_stream: Array<Auth_Identities>;
  /** fetch data from the table: "auth.instances" */
  auth_instances: Array<Auth_Instances>;
  /** fetch aggregated fields from the table: "auth.instances" */
  auth_instances_aggregate: Auth_Instances_Aggregate;
  /** fetch data from the table: "auth.instances" using primary key columns */
  auth_instances_by_pk?: Maybe<Auth_Instances>;
  /** fetch data from the table in a streaming manner: "auth.instances" */
  auth_instances_stream: Array<Auth_Instances>;
  /** fetch data from the table: "auth.mfa_amr_claims" */
  auth_mfa_amr_claims: Array<Auth_Mfa_Amr_Claims>;
  /** fetch aggregated fields from the table: "auth.mfa_amr_claims" */
  auth_mfa_amr_claims_aggregate: Auth_Mfa_Amr_Claims_Aggregate;
  /** fetch data from the table: "auth.mfa_amr_claims" using primary key columns */
  auth_mfa_amr_claims_by_pk?: Maybe<Auth_Mfa_Amr_Claims>;
  /** fetch data from the table in a streaming manner: "auth.mfa_amr_claims" */
  auth_mfa_amr_claims_stream: Array<Auth_Mfa_Amr_Claims>;
  /** fetch data from the table: "auth.mfa_challenges" */
  auth_mfa_challenges: Array<Auth_Mfa_Challenges>;
  /** fetch aggregated fields from the table: "auth.mfa_challenges" */
  auth_mfa_challenges_aggregate: Auth_Mfa_Challenges_Aggregate;
  /** fetch data from the table: "auth.mfa_challenges" using primary key columns */
  auth_mfa_challenges_by_pk?: Maybe<Auth_Mfa_Challenges>;
  /** fetch data from the table in a streaming manner: "auth.mfa_challenges" */
  auth_mfa_challenges_stream: Array<Auth_Mfa_Challenges>;
  /** fetch data from the table: "auth.mfa_factors" */
  auth_mfa_factors: Array<Auth_Mfa_Factors>;
  /** fetch aggregated fields from the table: "auth.mfa_factors" */
  auth_mfa_factors_aggregate: Auth_Mfa_Factors_Aggregate;
  /** fetch data from the table: "auth.mfa_factors" using primary key columns */
  auth_mfa_factors_by_pk?: Maybe<Auth_Mfa_Factors>;
  /** fetch data from the table in a streaming manner: "auth.mfa_factors" */
  auth_mfa_factors_stream: Array<Auth_Mfa_Factors>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  auth_refresh_tokens_stream: Array<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.saml_providers" */
  auth_saml_providers: Array<Auth_Saml_Providers>;
  /** fetch aggregated fields from the table: "auth.saml_providers" */
  auth_saml_providers_aggregate: Auth_Saml_Providers_Aggregate;
  /** fetch data from the table: "auth.saml_providers" using primary key columns */
  auth_saml_providers_by_pk?: Maybe<Auth_Saml_Providers>;
  /** fetch data from the table in a streaming manner: "auth.saml_providers" */
  auth_saml_providers_stream: Array<Auth_Saml_Providers>;
  /** fetch data from the table: "auth.saml_relay_states" */
  auth_saml_relay_states: Array<Auth_Saml_Relay_States>;
  /** fetch aggregated fields from the table: "auth.saml_relay_states" */
  auth_saml_relay_states_aggregate: Auth_Saml_Relay_States_Aggregate;
  /** fetch data from the table: "auth.saml_relay_states" using primary key columns */
  auth_saml_relay_states_by_pk?: Maybe<Auth_Saml_Relay_States>;
  /** fetch data from the table in a streaming manner: "auth.saml_relay_states" */
  auth_saml_relay_states_stream: Array<Auth_Saml_Relay_States>;
  /** fetch data from the table: "auth.sessions" */
  auth_sessions: Array<Auth_Sessions>;
  /** fetch aggregated fields from the table: "auth.sessions" */
  auth_sessions_aggregate: Auth_Sessions_Aggregate;
  /** fetch data from the table: "auth.sessions" using primary key columns */
  auth_sessions_by_pk?: Maybe<Auth_Sessions>;
  /** fetch data from the table in a streaming manner: "auth.sessions" */
  auth_sessions_stream: Array<Auth_Sessions>;
  /** fetch data from the table: "auth.sso_domains" */
  auth_sso_domains: Array<Auth_Sso_Domains>;
  /** fetch aggregated fields from the table: "auth.sso_domains" */
  auth_sso_domains_aggregate: Auth_Sso_Domains_Aggregate;
  /** fetch data from the table: "auth.sso_domains" using primary key columns */
  auth_sso_domains_by_pk?: Maybe<Auth_Sso_Domains>;
  /** fetch data from the table in a streaming manner: "auth.sso_domains" */
  auth_sso_domains_stream: Array<Auth_Sso_Domains>;
  /** fetch data from the table: "auth.sso_providers" */
  auth_sso_providers: Array<Auth_Sso_Providers>;
  /** fetch aggregated fields from the table: "auth.sso_providers" */
  auth_sso_providers_aggregate: Auth_Sso_Providers_Aggregate;
  /** fetch data from the table: "auth.sso_providers" using primary key columns */
  auth_sso_providers_by_pk?: Maybe<Auth_Sso_Providers>;
  /** fetch data from the table in a streaming manner: "auth.sso_providers" */
  auth_sso_providers_stream: Array<Auth_Sso_Providers>;
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table in a streaming manner: "auth.users" */
  auth_users_stream: Array<Auth_Users>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "todos" */
  todos_stream: Array<Todos>;
};


export type Subscription_RootAuth_Audit_Log_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Audit_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Audit_Log_Entries_Order_By>>;
  where?: InputMaybe<Auth_Audit_Log_Entries_Bool_Exp>;
};


export type Subscription_RootAuth_Audit_Log_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Audit_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Audit_Log_Entries_Order_By>>;
  where?: InputMaybe<Auth_Audit_Log_Entries_Bool_Exp>;
};


export type Subscription_RootAuth_Audit_Log_Entries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Audit_Log_Entries_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Audit_Log_Entries_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Audit_Log_Entries_Bool_Exp>;
};


export type Subscription_RootAuth_Flow_StateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Flow_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Flow_State_Order_By>>;
  where?: InputMaybe<Auth_Flow_State_Bool_Exp>;
};


export type Subscription_RootAuth_Flow_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Flow_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Flow_State_Order_By>>;
  where?: InputMaybe<Auth_Flow_State_Bool_Exp>;
};


export type Subscription_RootAuth_Flow_State_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Flow_State_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Flow_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Flow_State_Bool_Exp>;
};


export type Subscription_RootAuth_IdentitiesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Identities_Order_By>>;
  where?: InputMaybe<Auth_Identities_Bool_Exp>;
};


export type Subscription_RootAuth_Identities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Identities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Identities_Order_By>>;
  where?: InputMaybe<Auth_Identities_Bool_Exp>;
};


export type Subscription_RootAuth_Identities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Identities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Identities_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Identities_Bool_Exp>;
};


export type Subscription_RootAuth_InstancesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Instances_Order_By>>;
  where?: InputMaybe<Auth_Instances_Bool_Exp>;
};


export type Subscription_RootAuth_Instances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Instances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Instances_Order_By>>;
  where?: InputMaybe<Auth_Instances_Bool_Exp>;
};


export type Subscription_RootAuth_Instances_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Instances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Instances_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Instances_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_Amr_ClaimsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Amr_Claims_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_Amr_Claims_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Amr_Claims_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Amr_Claims_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_Amr_Claims_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Mfa_Amr_Claims_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Mfa_Amr_Claims_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Mfa_Amr_Claims_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_ChallengesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Challenges_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Challenges_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_Challenges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Challenges_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Challenges_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_Challenges_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Mfa_Challenges_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Mfa_Challenges_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Mfa_Challenges_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_FactorsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Factors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Factors_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Factors_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_Factors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Mfa_Factors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Mfa_Factors_Order_By>>;
  where?: InputMaybe<Auth_Mfa_Factors_Bool_Exp>;
};


export type Subscription_RootAuth_Mfa_Factors_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Mfa_Factors_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Mfa_Factors_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Mfa_Factors_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootAuth_Refresh_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Refresh_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Saml_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Providers_Order_By>>;
  where?: InputMaybe<Auth_Saml_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Saml_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Providers_Order_By>>;
  where?: InputMaybe<Auth_Saml_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Saml_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Saml_Providers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Saml_Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Saml_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Saml_Relay_StatesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Relay_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Relay_States_Order_By>>;
  where?: InputMaybe<Auth_Saml_Relay_States_Bool_Exp>;
};


export type Subscription_RootAuth_Saml_Relay_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Saml_Relay_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Saml_Relay_States_Order_By>>;
  where?: InputMaybe<Auth_Saml_Relay_States_Bool_Exp>;
};


export type Subscription_RootAuth_Saml_Relay_States_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Saml_Relay_States_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Saml_Relay_States_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Saml_Relay_States_Bool_Exp>;
};


export type Subscription_RootAuth_SessionsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
  where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};


export type Subscription_RootAuth_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
  where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};


export type Subscription_RootAuth_Sessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Sessions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};


export type Subscription_RootAuth_Sso_DomainsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Domains_Order_By>>;
  where?: InputMaybe<Auth_Sso_Domains_Bool_Exp>;
};


export type Subscription_RootAuth_Sso_Domains_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Domains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Domains_Order_By>>;
  where?: InputMaybe<Auth_Sso_Domains_Bool_Exp>;
};


export type Subscription_RootAuth_Sso_Domains_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Sso_Domains_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Sso_Domains_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Sso_Domains_Bool_Exp>;
};


export type Subscription_RootAuth_Sso_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Providers_Order_By>>;
  where?: InputMaybe<Auth_Sso_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Sso_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Sso_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Sso_Providers_Order_By>>;
  where?: InputMaybe<Auth_Sso_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Sso_Providers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Sso_Providers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Sso_Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Sso_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTodos_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Todos_Stream_Cursor_Input>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  is_completed: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_completed?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodosPkey = 'todos_pkey'
}

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_completed?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "todos" */
export type Todos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todos_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Todos_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todos_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type InsertProfileMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type InsertProfileMutation = { __typename?: 'mutation_root', insert_profiles_one?: { __typename?: 'profiles', name?: string | null, email: string, password?: string | null } | null };

export type ClearCompletedMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearCompletedMutation = { __typename?: 'mutation_root', delete_todos?: { __typename?: 'todos_mutation_response', returning: Array<{ __typename?: 'todos', id: any, title: string, description: string }> } | null };

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
  is_completed: Scalars['Boolean']['input'];
  user_id: Scalars['uuid']['input'];
}>;


export type CreateTodoMutation = { __typename?: 'mutation_root', insert_todos_one?: { __typename?: 'todos', id: any, title: string, description: string, is_completed: boolean, user_id?: any | null } | null };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'mutation_root', delete_todos_by_pk?: { __typename?: 'todos', id: any, title: string, description: string } | null };

export type GetActiveTodoQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetActiveTodoQuery = { __typename?: 'query_root', todos: Array<{ __typename?: 'todos', id: any, title: string, description: string, is_completed: boolean }> };

export type GetAllTodosQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetAllTodosQuery = { __typename?: 'query_root', todos: Array<{ __typename?: 'todos', id: any, title: string, is_completed: boolean, description: string }> };

export type GetCompletedTodoQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetCompletedTodoQuery = { __typename?: 'query_root', todos: Array<{ __typename?: 'todos', id: any, title: string, description: string, is_completed: boolean }> };

export type GetProfileQueryVariables = Exact<{
  userEmail: Scalars['String']['input'];
}>;


export type GetProfileQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: any, email: string }> };

export type GetTodoByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetTodoByIdQuery = { __typename?: 'query_root', todos_by_pk?: { __typename?: 'todos', id: any, is_completed: boolean, title: string, description: string } | null };

export type MarkAsCompleteMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type MarkAsCompleteMutation = { __typename?: 'mutation_root', update_todos_by_pk?: { __typename?: 'todos', title: string, description: string, is_completed: boolean } | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  description: Scalars['String']['input'];
  is_completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
}>;


export type UpdateTodoMutation = { __typename?: 'mutation_root', update_todos_by_pk?: { __typename?: 'todos', id: any, description: string, is_completed: boolean, title: string } | null };


export const InsertProfileDocument = `
    mutation InsertProfile($id: uuid!, $name: String!, $email: String!, $password: String!) {
  insert_profiles_one(
    object: {id: $id, name: $name, email: $email, password: $password}
  ) {
    name
    email
    password
  }
}
    `;
export const useInsertProfileMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertProfileMutation, TError, InsertProfileMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertProfileMutation, TError, InsertProfileMutationVariables, TContext>(
      ['InsertProfile'],
      (variables?: InsertProfileMutationVariables) => fetcher<InsertProfileMutation, InsertProfileMutationVariables>(client, InsertProfileDocument, variables, headers)(),
      options
    );
export const ClearCompletedDocument = `
    mutation ClearCompleted {
  delete_todos(where: {is_completed: {_eq: true}}) {
    returning {
      id
      title
      description
    }
  }
}
    `;
export const useClearCompletedMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ClearCompletedMutation, TError, ClearCompletedMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ClearCompletedMutation, TError, ClearCompletedMutationVariables, TContext>(
      ['ClearCompleted'],
      (variables?: ClearCompletedMutationVariables) => fetcher<ClearCompletedMutation, ClearCompletedMutationVariables>(client, ClearCompletedDocument, variables, headers)(),
      options
    );
export const CreateTodoDocument = `
    mutation CreateTodo($title: String!, $description: String!, $is_completed: Boolean!, $user_id: uuid!) {
  insert_todos_one(
    object: {title: $title, description: $description, is_completed: $is_completed, user_id: $user_id}
  ) {
    id
    title
    description
    is_completed
    user_id
  }
}
    `;
export const useCreateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>(
      ['CreateTodo'],
      (variables?: CreateTodoMutationVariables) => fetcher<CreateTodoMutation, CreateTodoMutationVariables>(client, CreateTodoDocument, variables, headers)(),
      options
    );
export const DeleteTodoDocument = `
    mutation DeleteTodo($id: uuid!) {
  delete_todos_by_pk(id: $id) {
    id
    title
    description
  }
}
    `;
export const useDeleteTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>(
      ['DeleteTodo'],
      (variables?: DeleteTodoMutationVariables) => fetcher<DeleteTodoMutation, DeleteTodoMutationVariables>(client, DeleteTodoDocument, variables, headers)(),
      options
    );
export const GetActiveTodoDocument = `
    query GetActiveTodo($userId: uuid!) {
  todos(where: {user_id: {_eq: $userId}, is_completed: {_eq: false}}) {
    id
    title
    description
    is_completed
  }
}
    `;
export const useGetActiveTodoQuery = <
      TData = GetActiveTodoQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetActiveTodoQueryVariables,
      options?: UseQueryOptions<GetActiveTodoQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetActiveTodoQuery, TError, TData>(
      ['GetActiveTodo', variables],
      fetcher<GetActiveTodoQuery, GetActiveTodoQueryVariables>(client, GetActiveTodoDocument, variables, headers),
      options
    );
export const GetAllTodosDocument = `
    query GetAllTodos($userId: uuid!) {
  todos(where: {user_id: {_eq: $userId}}) {
    id
    title
    is_completed
    description
  }
}
    `;
export const useGetAllTodosQuery = <
      TData = GetAllTodosQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllTodosQueryVariables,
      options?: UseQueryOptions<GetAllTodosQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllTodosQuery, TError, TData>(
      ['GetAllTodos', variables],
      fetcher<GetAllTodosQuery, GetAllTodosQueryVariables>(client, GetAllTodosDocument, variables, headers),
      options
    );
export const GetCompletedTodoDocument = `
    query GetCompletedTodo($userId: uuid!) {
  todos(where: {user_id: {_eq: $userId}, is_completed: {_eq: true}}) {
    id
    title
    description
    is_completed
  }
}
    `;
export const useGetCompletedTodoQuery = <
      TData = GetCompletedTodoQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCompletedTodoQueryVariables,
      options?: UseQueryOptions<GetCompletedTodoQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCompletedTodoQuery, TError, TData>(
      ['GetCompletedTodo', variables],
      fetcher<GetCompletedTodoQuery, GetCompletedTodoQueryVariables>(client, GetCompletedTodoDocument, variables, headers),
      options
    );
export const GetProfileDocument = `
    query GetProfile($userEmail: String!) {
  profiles(where: {email: {_eq: $userEmail}}) {
    id
    email
  }
}
    `;
export const useGetProfileQuery = <
      TData = GetProfileQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetProfileQueryVariables,
      options?: UseQueryOptions<GetProfileQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetProfileQuery, TError, TData>(
      ['GetProfile', variables],
      fetcher<GetProfileQuery, GetProfileQueryVariables>(client, GetProfileDocument, variables, headers),
      options
    );
export const GetTodoByIdDocument = `
    query getTodoById($id: uuid!) {
  todos_by_pk(id: $id) {
    id
    is_completed
    title
    description
  }
}
    `;
export const useGetTodoByIdQuery = <
      TData = GetTodoByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTodoByIdQueryVariables,
      options?: UseQueryOptions<GetTodoByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTodoByIdQuery, TError, TData>(
      ['getTodoById', variables],
      fetcher<GetTodoByIdQuery, GetTodoByIdQueryVariables>(client, GetTodoByIdDocument, variables, headers),
      options
    );
export const MarkAsCompleteDocument = `
    mutation MarkAsComplete($id: uuid!, $is_completed: Boolean) {
  update_todos_by_pk(pk_columns: {id: $id}, _set: {is_completed: $is_completed}) {
    title
    description
    is_completed
  }
}
    `;
export const useMarkAsCompleteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<MarkAsCompleteMutation, TError, MarkAsCompleteMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<MarkAsCompleteMutation, TError, MarkAsCompleteMutationVariables, TContext>(
      ['MarkAsComplete'],
      (variables?: MarkAsCompleteMutationVariables) => fetcher<MarkAsCompleteMutation, MarkAsCompleteMutationVariables>(client, MarkAsCompleteDocument, variables, headers)(),
      options
    );
export const UpdateTodoDocument = `
    mutation UpdateTodo($id: uuid!, $description: String!, $is_completed: Boolean!, $title: String!) {
  update_todos_by_pk(
    pk_columns: {id: $id}
    _set: {description: $description, is_completed: $is_completed, title: $title}
  ) {
    id
    description
    is_completed
    title
  }
}
    `;
export const useUpdateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>(
      ['UpdateTodo'],
      (variables?: UpdateTodoMutationVariables) => fetcher<UpdateTodoMutation, UpdateTodoMutationVariables>(client, UpdateTodoDocument, variables, headers)(),
      options
    );