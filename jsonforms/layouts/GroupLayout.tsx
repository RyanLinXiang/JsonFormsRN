import {
    GroupLayout,
    RankedTester,
    rankWith,
    RendererProps,
    uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { renderChildren } from "./util";

/**
 * Default tester for a group layout.
 *
 * @type {RankedTester}
 */
export const groupTester: RankedTester = rankWith(1, uiTypeIs("Group"));

export const GroupLayoutRenderer = ({
    schema,
    uischema,
    path,
    visible,
}: RendererProps) => {
    const group = uischema as GroupLayout;

    return (
        <View
            style={{ ...styles.container, display: visible ? "flex" : "none" }}
        >
            {!isEmpty(group.label) ? (
                <Text style={styles.title}>{group.label}</Text>
            ) : null}
            {renderChildren(group, schema, path)}
        </View>
    );
};

export default withJsonFormsLayoutProps(GroupLayoutRenderer);

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        marginBottom: 28,
    },
    container: {
        borderWidth: 1,
        borderColor: "white",
        padding: 10,
        marginBottom: 5,
    },
});
