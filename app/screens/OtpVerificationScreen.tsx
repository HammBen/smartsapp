import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Icon, Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
import { colors, spacing } from "app/theme"
// import { useStores } from "app/models"

interface OtpVerificationScreenProps extends AppStackScreenProps<"OtpVerification"> {}

export const OtpVerificationScreen: FC<OtpVerificationScreenProps> = observer(
  function OtpVerificationScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
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
                text="Enter the shorst code sent to [020 123 3456]"
                size="xxs"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View></View>
            <View style={$otpConfirmation}>
              <Text style={$confirmationQuestion} text="Didn't receive sms?" size="xxs" />
            </View>
          </View>
        </View>
      </Screen>
    )
  },
)

const $container: ViewStyle = {
  flex: 1,
  // backgroundColor: "#0061E6",
  // borderWidth: 2,
  // borderColor: colors.error,
}

const $mainWrapper: ViewStyle = {
  // borderWidth: 2,
  height: "100%",
}

// Welcome Section Start
const $infoMessage: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 10,
  // borderColor: "red",
  // borderWidth: 2,
  backgroundColor: "#FAFAFA",
  padding: spacing.xs,
  // padding: 19,
  // paddingHorizontal: 16,
  // paddingTop: 60,
  // paddingBottom: 24,
  // rowGap: 4,
  // flexGrow: 0.2,
  // flexBasis: "25%",
  // justifyContent: "center",
  // marginBottom: spacing.lg,
}

const $header: ViewStyle = {
  // borderWidth: 1,
  paddingTop: 35,
  paddingBottom: 7,
}

// Welcome Section End

// Main Section Start
const $mainSection: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  // backgroundColor: "red",
  borderColor: "green",
  // borderWidth: 2,
  paddingHorizontal: 16,
  flexGrow: 1,
  paddingTop: 24,
}

const $otpConfirmation: ViewStyle = {
  // borderWidth: 1,
}

const $confirmationQuestion: TextStyle = {
  textAlign: "center",
  color: "#808080",
}
// Main Section End
