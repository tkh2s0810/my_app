#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { DynamoDBStack } from "../lib/dynamodb-stack";
import { LambdaStack } from "../lib/lambda-stack";

const app = new cdk.App();

new DynamoDBStack(app, "DynamoDBStack");
new LambdaStack(app, "LambdaStack");
