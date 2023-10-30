import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Text, Screen, TextField } from "../components"
// import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import Modal from "react-native-modal"
import { WebView } from "react-native-webview"
// import { useHeader } from "../utils/useHeader"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const [isModalVisible, setModalVisible] = useState(false)
  const [isTermsWebViewVisible, setTermsWebViewVisible] = useState(false)
  const [isPrivacyWebViewVisible, setPrivacyWebViewVisible] = useState(false)

  const showModal = () => {
    setModalVisible(true)
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  const showTermsWebView = () => {
    setTermsWebViewVisible(true)
  }

  const hideTermsWebView = () => {
    setTermsWebViewVisible(false)
  }

  const showPrivacyWebView = () => {
    setPrivacyWebViewVisible(true)
  }

  const hidePrivacyWebView = () => {
    setPrivacyWebViewVisible(false)
  }

  const { navigation } = _props

  // const {
  //   authenticationStore: { logout },
  // } = useStores()

  // function goNext() {
  //   navigation.navigate("Demo", { screen: "DemoShowroom" })
  // }

  // useHeader(
  //   {
  //     rightTx: "common.logOut",
  //     onRightPress: logout,
  //   },
  //   [logout],
  // )
  // @demo remove-block-end

  // const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <Screen safeAreaEdges={["bottom"]} style={$container}>
      <View style={$mainWrapper}>
        <View style={$welcomSection}>
          <Text style={$heading} text="Welcome" preset="heading" />
          <Text
            style={$subHeading}
            text="Enter phone number to activate your account"
            // preset="formLabel"
          />
        </View>

        <View style={$mainSection}>
          <TextField
            style={$inputStyle}
            inputWrapperStyle={$textField}
            containerStyle={$textFieldContainer}
            keyboardType="phone-pad"
            // LeftAccessory={() => (
            //   <View>
            //     <CountryPicker
            //       containerButtonStyle={$countryPickerWrapper}
            //       withAlphaFilter
            //       withFlag
            //       withFilter
            //       withCallingCode
            //       withCallingCodeButton
            //       withCloseButton
            //       withEmoji
            //       withModal
            //       countryCode="GH"
            //     />
            //   </View>
            // )}
            label="Phone number"
            placeholder="020 123 4567"
          />
          <Button style={$button} textStyle={$buttonText} text="Continue" onPress={showModal} />
          <Modal isVisible={isModalVisible} backdropColor="black">
            <View style={$modalContent}>
              <View style={$modalTopSection}>
                <Text preset="bold">Create Password</Text>
                <Text>Create a password to activate your account</Text>
              </View>
              <View style={$modalBottomSection}>
                <View style={$modalBtnsWrapper}>
                  <Text text="Cancel" onPress={hideModal} />
                  <Text
                    text="Ok"
                    onPress={() => {
                      navigation.navigate("OtpVerification")
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <Text style={$termsAndPrivacy} size="sm">
            By tapping on continue, you agree to our{" "}
            <Text style={[$termsAndPrivacy, $agreement]} onPress={showTermsWebView}>
              Terms of use
            </Text>{" "}
            and{" "}
            <Text style={[$termsAndPrivacy, $agreement]} onPress={showPrivacyWebView}>
              privacy policy
            </Text>
          </Text>
          <Modal isVisible={isTermsWebViewVisible} backdropColor="black">
            <View style={$modalContentWebView}>
              <WebView source={{ uri: "https://admin.smartsapp.com/legal/terms-of-use" }} />
              <Button
                style={$closeButton}
                textStyle={$closeButtonText}
                text="Close"
                onPress={hideTermsWebView}
              />
            </View>
          </Modal>

          <Modal isVisible={isPrivacyWebViewVisible} backdropColor="black">
            <View style={$modalContentWebView}>
              <WebView source={{ uri: "https://admin.smartsapp.com/legal/privacy-policy" }} />
              <Button
                style={$closeButton}
                textStyle={$closeButtonText}
                text="Close"
                onPress={hidePrivacyWebView}
              />
            </View>
          </Modal>
        </View>
      </View>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#F5F9FF",
  // borderWidth: 2,
  borderColor: colors.error,
}

const $mainWrapper: ViewStyle = {
  height: "100%",
}

// Welcome Section Start
const $welcomSection: ViewStyle = {
  borderColor: "red",
  // borderWidth: 2,
  backgroundColor: "#F5F9FF",
  paddingHorizontal: 16,
  paddingTop: 60,
  paddingBottom: 24,
  rowGap: 4,
  // flexGrow: 0.2,
  // flexBasis: "25%",
  justifyContent: "center",
  // marginBottom: spacing.lg,
}

const $heading: TextStyle = {
  letterSpacing: 0.024,
}

const $subHeading: TextStyle = {
  width: "93%",
  color: colors.palette.neutral500,
}

// Welcome Section End

// Main Section Start
const $mainSection: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: 16,
  flexGrow: 1,
  paddingTop: 24,
}

// this wraps the label and the text input
const $textFieldContainer: ViewStyle = {
  // marginBottom: spacing.xll,
}

const $textField: ViewStyle = {
  borderWidth: 0,
  borderRadius: 8,
  borderColor: "orange",
  paddingLeft: 16,
  paddingVertical: 6,
  alignItems: "center",
  marginBottom: spacing.xl,
  // marginBottom: spacing.xll,
}

const $inputStyle: ViewStyle = {
  // borderWidth: 1,
  borderColor: "green",
}

// const $countryPickerWrapper: ViewStyle = {
//   paddingBottom: 2,
//   // borderWidth: 1,
//   borderColor: "red",
// }

const $button: ViewStyle = {
  backgroundColor: "#0061E6",
  borderWidth: 0,
  borderRadius: spacing.sm,
  marginBottom: spacing.xl,
  // marginBottom: spacing.xll,
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 14,
  fontWeight: "400",
}

const $modalContent: ViewStyle = {
  backgroundColor: "white",
  // padding: 24,
  borderRadius: 8,
  // margin: -16,
  // marginHorizontal: 31,
}

const $modalTopSection: ViewStyle = {
  backgroundColor: "white",
  padding: 20,
  borderRadius: 10,
  rowGap: 8,
}

const $modalBottomSection: ViewStyle = {
  backgroundColor: "white",
  padding: 20,
  borderRadius: 10,
  alignItems: "flex-end",
}

const $modalBtnsWrapper: ViewStyle = {
  flexDirection: "row",
  columnGap: 40,
}

const $termsAndPrivacy: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral500,
  fontSize: 12,
  fontWeight: "400",
}

const $agreement: TextStyle = {
  color: "#0061E6",
}

const $closeButton: ViewStyle = {}
const $closeButtonText: ViewStyle = {}

const $modalContentWebView: ViewStyle = {
  margin: -18,
  borderWidth: 0,
  padding: 0,
  flex: 1,
}

// Main Section End
