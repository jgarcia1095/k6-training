import * as auth from './authentication.js'
import * as parametrization_data from '../../../resources/services/authentication.js'
import { check, group, sleep, fail } from 'k6';

export let options = parametrization_data.parametrization_test[__ENV.TYPE_TEST]

export default () => {
  let res = auth.execute()
  check(res, { 'status was 201': r => r.status == 201 })
  console.log(res.body)
  sleep(1)
}
