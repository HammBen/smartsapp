import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"

export interface CountDownProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * The initial countdown value in seconds.
   */
  initialCountdown: number
  onFinish?: () => void
}

/**
 * Countdown component that displays the remaining time.
 */
export const CountDown = observer(function CountDown(props: CountDownProps) {
  const { style, initialCountdown } = props
  const [countdown, setCountdown] = React.useState(initialCountdown)

  React.useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      } else {
        clearInterval(countdownInterval)
        if (typeof props.onFinish === "function") {
          props.onFinish() // Call the onFinish function
        }
      }
    }, 1000)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(countdownInterval)
  }, [countdown, props.onFinish])

  const formattedCountdown = formatCountdown(countdown)

  // Function to format the countdown value as "00:00"
  function formatCountdown(countdown: number): string {
    const minutes = Math.floor(countdown / 60)
    const seconds = countdown % 60
    const formattedMinutes = String(minutes).padStart(2, "0")
    const formattedSeconds = String(seconds).padStart(2, "0")
    return `${formattedMinutes}:${formattedSeconds}`
  }

  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Text style={$text}>{formattedCountdown}</Text>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
