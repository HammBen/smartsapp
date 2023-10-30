import React, { FC, useMemo, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, TextStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Button,
  Header,
  Icon,
  Screen,
  Text,
  TextField,
  TextFieldAccessoryProps,
} from "app/components"
import { colors, spacing } from "app/theme"
import Modal from "react-native-modal"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PasswordVerificationScreenProps extends AppStackScreenProps<"PasswordVerification"> {}

export const PasswordVerificationScreen: FC<PasswordVerificationScreenProps> = observer(
  function PasswordVerificationScreen() {
    const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
    const [isModalVisible, setModalVisible] = useState(false)

    const showModal = () => {
      setModalVisible(true)
    }

    const hideModal = () => {
      setModalVisible(false)
    }

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    const PasswordRightAccessory = useMemo(
      () =>
        function PasswordRightAccessory(props: TextFieldAccessoryProps) {
          return (
            <Icon
              icon={isAuthPasswordHidden ? "view" : "hidden"}
              color={colors.palette.neutral800}
              containerStyle={props.style}
              size={20}
              onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
            />
          )
        },
      [isAuthPasswordHidden],
    )

    return (
      <Screen style={$root} safeAreaEdges={["bottom"]}>
        <View style={$mainWrapper}>
          <Header
            containerStyle={$header}
            safeAreaEdges={["start"]}
            backgroundColor="#0061E6"
            leftText="Verify phone number"
          />
          <View style={$mainSection}>
            <TextField
              style={$inputStyle}
              inputWrapperStyle={$textField}
              containerStyle={$textFieldContainer}
              keyboardType="visible-password"
              label="New password"
              placeholder="Enter password"
              RightAccessory={PasswordRightAccessory}
            />
            <TextField
              style={$inputStyle}
              inputWrapperStyle={$textField}
              containerStyle={$textFieldContainer}
              keyboardType="visible-password"
              label="Re-enter password"
              placeholder="Enter password"
              RightAccessory={PasswordRightAccessory}
            />
            <Button
              style={$button}
              textStyle={$buttonText}
              text="Activate Account"
              onPress={showModal}
            />
            <Modal isVisible={isModalVisible} backdropColor="black">
              <View style={$modalContent}>
                <View style={$modalTopSection}>
                  <Text preset="bold">Activation Successful</Text>
                  <Text>Go ahead to log in to your account.</Text>
                </View>
                <View style={$modalBottomSection}>
                  <View style={$modalBtnsWrapper}>
                    <Text text="Cancel" onPress={hideModal} />
                    <Text text="Ok" onPress={hideModal} />
                  </View>
                </View>
              </View>
            </Modal>
            <Button text="Go Back" onPress={()=> {navigation.goBack()}} />
          </View>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $mainWrapper: ViewStyle = {
  // flex: 1,
  height: "100%",
  // flexGrow: 1,
  // borderWidth: 1,
}

const $header: ViewStyle = {
  paddingTop: 35,
  paddingBottom: 7,
}

// Welcome Section End

// Main Section Start
const $mainSection: ViewStyle = {
  backgroundColor: "#FFFFFF",
  paddingHorizontal: 16,
  flexGrow: 1,
  paddingTop: 24,
  // alignItems: "center",
}

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
