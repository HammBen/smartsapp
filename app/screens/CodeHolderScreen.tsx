import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Text } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface CodeHolderScreenProps extends AppStackScreenProps<"CodeHolder"> {}

export const CodeHolderScreen: FC<CodeHolderScreenProps> = observer(function CodeHolderScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} safeAreaEdges={["bottom"]}>
      <View style={$mainWrapper}>
        <Header
          // containerStyle={$header}
          safeAreaEdges={["start"]}
          backgroundColor="#0061E6"
          leftText="Verify phone number"
        />
        <View style={$firstSection}>
          <Text>jh sadfh skadjfh asdkjfh askdjfh asdkjh</Text>
          <Button text="go back" />
        </View>
        <View style={$secondSection}>
          <Text>jh sadfh skadjfh asdkjfh askdjfh asdkjh</Text>
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $mainWrapper: ViewStyle = {
  // flex: 1,
  height: "100%",
  // borderWidth: 2,
  backgroundColor: "azure",
}

const $firstSection: ViewStyle = {
  backgroundColor: "yellow",
  flexGrow: 1,
}

const $secondSection: ViewStyle = {
  backgroundColor: "orange",
  flexGrow: 1,
}
