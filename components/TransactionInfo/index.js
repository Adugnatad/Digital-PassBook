import { View } from "react-native";
import styles from "./styles";
import { ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import datas from "../../constants/datas";

import Item from "./Item";

const TransactionInfo = () => {
  return (
    <View style={styles.transactionsList}>
      <ListItem>
        <ListItemContent>
          {datas.map((data) => {
            return <Item data={data} />;
          })}
        </ListItemContent>
      </ListItem>
    </View>
  );
};
export default TransactionInfo;
