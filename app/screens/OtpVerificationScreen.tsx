import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text } from "app/components"
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
            leftText="Hi my name is"
          />

          <View style={$mainSection}>
            <Text text="Hi there" onPress={() => navigation.goBack()} />
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
const $topSection: ViewStyle = {
  // borderColor: "red",
  // borderWidth: 2,
  // backgroundColor: "#F5F9FF",
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
  paddingVertical: spacing.lg,
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
// Main Section End
