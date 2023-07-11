#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { DynamoDbStack } from "../lib/dynamodb-stack";

const app = new cdk.App();
new DynamoDbStack(app, "InfraStack");
