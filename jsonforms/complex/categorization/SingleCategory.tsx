import { Category, JsonSchema } from "@jsonforms/core";
import { ResolvedJsonFormsDispatch } from "@jsonforms/react";
import React from "react";
import { View } from "react-native";

export interface CategoryProps {
    category: Category;
    schema: JsonSchema;
    path: string;
}

export const SingleCategory = ({ category, schema, path }: CategoryProps) => (
    <View>
        {(category.elements || []).map((child, index) => (
            <ResolvedJsonFormsDispatch
                key={`${path}-${index}`}
                uischema={child}
                schema={schema}
                path={path}
            />
        ))}
    </View>
);
