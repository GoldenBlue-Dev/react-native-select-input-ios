import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { ViewPropTypes } from 'deprecated-react-native-prop-types'

import selectInputPropTypes from '../AbstractSelectInput/types.js'

export default {
  ...selectInputPropTypes,
  cancelKeyText: PropTypes.string,
  submitKeyText: PropTypes.string,
  buttonsTextStyle: PropTypes.oneOfType([
    Text.style,
    PropTypes.arrayOf(Text.style)
  ]),
  buttonsViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  pickerItemStyle: PropTypes.oneOfType([
    Text.style,
    PropTypes.arrayOf(Text.style)
  ]),
  pickerViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ])
}

export const defaultProps = {
  enabled: true,
  cancelKeyText: 'Cancel',
  options: [{ value: 0, label: '0' }],
  submitKeyText: 'Done',
  value: 0
}
