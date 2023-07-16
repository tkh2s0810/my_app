import boto3


def lambda_handler(event, context):
    # DynamoDB オブジェクトを取得
    dynamodb = boto3.resource('dynamodb')

    # テーブルを指定（ここでは'table-name'というテーブル名を仮定）
    table = dynamodb.Table('userInfoTable')

    # データを追加（以下はサンプルデータで、適宜変更してください）
    table.put_item(
        Item={
            'id': '1',
            'attribute': 'value'
        }
    )

    return {
        'statusCode': 200,
        'body': 'Item inserted successfully!'
    }
