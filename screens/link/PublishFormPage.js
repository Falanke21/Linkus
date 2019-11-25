import React from "react";
import { Text, View, Button, TextInput, StyleSheet, Modal } from "react-native";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

class PublishFormPage extends React.Component {

    render() {
        return(
            <View>

                <View style={[styles.singleRow, styles.margin]}>
                    <Text>类型：</Text>
                    <RadioGroup style={styles.singleRow}>
                        <RadioButton value={'classmate'} >
                            <Text>找课友</Text>
                        </RadioButton>
                        <RadioButton value={'teammate'}>
                            <Text>找队友</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>

                <View style={[styles.singleRow, styles.margin]}>
                    <Text>课号：</Text>
                    <TextInput
                        placeholder=" 请输入课号"
                        style={styles.inputBar}
                        />
                </View>

                <View style={[styles.singleRow, styles.margin]}>
                    <Text>标题：</Text>
                    <TextInput
                        placeholder=" 请输入标题，例：Lec0101 A1寻找队友"
                        style={styles.inputBar}
                        />
                </View>

                <View style={styles.margin}>
                    <Text>描述：</Text>
                    <TextInput
                        placeholder=" 请输入描述"
                        multiline={true}
                        style={[styles.inputBar,
                        {
                        textAlignVertical:"top",
                        height:100,
                        flex:0
                        }]}
                    />
                </View>

                <View style={[styles.singleRow, styles.margin]}>
                    <Text>联系方式 1：</Text>
                    <TextInput
                        placeholder=" 可输入微信号/手机号/邮箱等"
                        style={styles.inputBar}
                    />
                </View>

                <View style={[styles.singleRow, styles.margin]}>
                    <Text>联系方式 2：</Text>
                    <TextInput
                        placeholder=" 选填"
                        style={styles.inputBar}
                    />
                </View>

                <Button style={styles.margin}
                // onPress={() => this.props.navigation.navigate("Linkus")}
                title="发布"
                />

            </View>
        )
    }
}

export default PublishFormPage;


const styles = StyleSheet.create({
    inputBar: {
      flex: 1,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 5
    },
    singleRow: {
      flexDirection:"row",
      alignItems:"center",
    },
    margin: {
      margin:5
    }
  });