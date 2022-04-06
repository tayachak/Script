let body = $response.body

body = JSON.parse(body)
body['data']['records'][0]['显示时间'] = '2022-04-06 09:18'

body['data']['records'][0]['检测日期'] = '2022-04-06 09:18:00'

body['data']['records'][0]['申报时间'] = '2022-04-06 09:18:00'

body['data']['records'][0]['采样日期'] = '2022-04-05 17:18:09'

body = JSON.stringify(body)
$done({ body })
