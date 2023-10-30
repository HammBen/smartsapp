import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, CountDown, Header, Icon, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { spacing } from "app/theme"
import { OtpInput } from "react-native-otp-entry"
// import { Countdown } from "react-native-element-timer"
// import { useStores } from "app/models"

interface OtpVerificationScreenProps extends AppStackScreenProps<"OtpVerification"> {}

export const OtpVerificationScreen: FC<OtpVerificationScreenProps> = observer(
  function OtpVerificationScreen(_props) {
    const [countdownReachedZero, setCountdownReachedZero] = useState(false)

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const handleCountdownFinish = () => {
      setCountdownReachedZero(true)
    }

    const handleResendSms = () => {
      // Add your code here to resend the SMS.
      // navigation.goBack()
      // alert("Hi my name is time")
      navigation.navigate("PasswordVerification")
    }

    // Pull in navigation via hook
    // const navigation = useNavigation()
    const { navigation } = _props

    return (
      <Screen safeAreaEdges={["bottom"]} style={$container}>
        <View style={$mainWrapper}>
          <Header
            // style={$header}
            containerStyle={$header}
            safeAreaEdges={["start"]}
            backgroundColor="#0061E6"
            leftText="Verify phone number"
          />

          <View style={$mainSection}>
            <View style={$infoMessage}>
              <Icon size={16} icon="info" />
              <Text
                text="Enter the short code sent to [020 123 3456]"
                size="xxs"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={$otpWrapper}>
              <OtpInput
                numberOfDigits={6}
                focusColor="green"
                focusStickBlinkingDuration={500}
                onTextChange={(text) => console.log(text)}
                theme={{
                  pinCodeContainerStyle: {
                    // backgroundColor: colors.palette.neutral300,
                    backgroundColor: "#F4F4F6",
                    width: 55,
                    height: 45,
                    borderWidth: 0,
                  },
                  pinCodeTextStyle: {},
                  focusStickStyle: {
                    borderColor: "#0061E6",
                    borderWidth: 0,
                  },
                }}
              />
            </View>
            <View style={$otpConfirmationWrapper}>
              <Text style={$confirmationQuestion} text="Didn't receive sms?" size="xxs" />
              <CountDown initialCountdown={10} onFinish={handleCountdownFinish} />
            </View>
            {countdownReachedZero && (
              <Button
                style={$resendSmsBtn}
                text="Resend SMS"
                textStyle={$resendSmsBtnStyle}
                onPress={handleResendSms}
              />
            )}
          </View>
          <Button
            text="Go Back"
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>
      </Screen>
    )
  },
)

const $container: ViewStyle = {
  flex: 1,
}

const $mainWrapper: ViewStyle = {
  height: "100%",
}

// Welcome Section Start
const $infoMessage: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 10,
  backgroundColor: "#FAFAFA",
  padding: spacing.xs,
}

const $header: ViewStyle = {
  paddingTop: 35,
  paddingBottom: 7,
}

// Welcome Section End

// Main Section Start
const $mainSection: ViewStyle = {
  backgroundColor: "#FFFFFF",
  // backgroundColor: "#E5E5E5",
  paddingHorizontal: 16,
  flexGrow: 1,
  paddingTop: 24,
  alignItems: "center",
}

const $otpWrapper: ViewStyle = {
  marginVertical: spacing.lg,
  // borderWidth: 1,
  width: "100%",
}

const $otpConfirmationWrapper: ViewStyle = {
  // borderWidth: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  columnGap: spacing.xs,
  marginBottom: spacing.xs,
}

const $confirmationQuestion: TextStyle = {
  textAlign: "center",
  color: "#808080",
}

const $resendSmsBtn: ViewStyle = {
  borderColor: "#0061E6",
  borderRadius: spacing.sm,
  maxWidth: 200,
}

const $resendSmsBtnStyle: TextStyle = {
  color: "#0061E6",
}
// Main Section End
