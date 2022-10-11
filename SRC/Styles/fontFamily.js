
import { Platform}  from 'react-native';

const fontFamily = {
    bold: Platform.OS === "android" ? "OpenSans_Bold" : "OpenSans-Bold",
    semiBold: Platform.OS === "android" ? "OpenSans_Semibold" : "OpenSans-Semibold",
    extraBold:Platform.OS === "android" ? "OpenSans_Extrabold" : "OpenSans-Extrabold",
    regular:Platform.OS === "android" ? "OpenSans_Regular" : "OpenSans",
    boldItalic: Platform.OS === "android" ? "OpenSans_BoldItalic" : "OpenSans-BoldItalic",

    regularAlatsi: Platform.OS === "android" ? "Alatsi_Regularc" : "Alatsi-Regular"
  };
  
  export default fontFamily;