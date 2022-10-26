import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default {
  enabled: PropTypes.bool,
  labelStyle: PropTypes.oneOfType([
    Text.style,
    PropTypes.arrayOf(Text.style)
  ]),
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any
}
