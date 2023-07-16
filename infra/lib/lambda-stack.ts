import { Duration, Stack, StackProps } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { aws_iam as iam } from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

interface LambdaStackProps extends StackProps {
  table: dynamodb.Table;
}

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    const { table } = props;

    // IAMを設定
    const iamRoleForLambda = new iam.Role(this, "iamRoleForLambda", {
      roleName: "iamRoleForLambda",
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });

    // lambdaファンクションを定義(APIごとに定義する)
    const fn = new lambda.Function(this, "MyFunction", {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: "lambda_function.lambda_handler",
      code: lambda.Code.fromAsset("lambda"),
      role: iamRoleForLambda,
      timeout: Duration.seconds(30),
      memorySize: 128,
    });

    table.grantReadWriteData(fn);

    // RestAPIを定義
    const myApi = new apigateway.RestApi(this, "myAPI");

    // 上記で定義した RestAPIにlambdaファンクションを配置する。
    const lambdaIntegration = new apigateway.LambdaIntegration(fn);
    myApi.root.addMethod("GET", lambdaIntegration);
  }
}
