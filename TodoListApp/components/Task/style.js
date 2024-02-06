import { StyleSheet } from "react-native"
import color from "../../contains/color";

const styles = StyleSheet.create({
    
      item: {
        flexDirection: "row",
        backgroundColor: color.white,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      even:{
        backgroundColor: color.green,
      },
      odd:{
        backgroundColor: color.primary,
      },
      number: {
        fontSize: 16,
        color: color.white,
        fontWeight: "700",
      },
      content: {
        width: "80%",
        fontSize: 16,
      },
})

export default styles;