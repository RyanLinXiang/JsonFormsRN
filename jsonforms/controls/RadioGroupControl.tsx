import {
    and,
    computeLabel,
    ControlProps,
    ControlState,
    isEnumControl,
    isPlainLabel,
    optionIs,
    RankedTester,
    rankWith,
} from "@jsonforms/core";
import { Control, withJsonFormsControlProps } from "@jsonforms/react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-material-ui";

/** this is defined as a class component in order to extend from the jsonforms package's Control class */
export class RadioGroupControl extends Control<ControlProps, ControlState> {
    private onChange(value: string) {
        this.props.handleChange(this.props.path, value);
    }

    public render() {
        const { label, data, required, description, errors, schema, visible } =
            this.props;

        const isValid = errors.length === 0;
        const options = schema.enum;

        return (
            <View
                style={
                    isValid
                        ? {
                              ...styles.standardContainer,
                              display: visible ? "flex" : "none",
                          }
                        : {
                              // ...styles.errorContainer,
                              display: visible ? "flex" : "none",
                          }
                }
            >
                <Text>
                    {computeLabel(
                        isPlainLabel(label) ? label : label.default,
                        required,
                        // appliedUiSchemaOptions.hideRequiredAsterisk,
                        true,
                    )}
                    {!isValid ? description : null}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    {options.map((optionValue) => (
                        <RadioButton
                            key={optionValue}
                            label={optionValue}
                            value={optionValue}
                            checked={data == optionValue}
                            onSelect={this.onChange.bind(this)}
                        />
                    ))}
                </View>
            </View>
        );
    }
}

export const radioGroupControlTester: RankedTester = rankWith(
    20,
    and(isEnumControl, optionIs("format", "radio")),
);

export default withJsonFormsControlProps(RadioGroupControl);

const styles = StyleSheet.create({
    errorText: { color: "red" },
    standardContainer: { padding: 5 },
    radioButtonContainer: { flex: 0, minWidth: 200 },
});
